import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiEdit2, FiTrash2, FiX, FiStar, FiClock, FiUpload, FiImage } from 'react-icons/fi';
import toast from 'react-hot-toast';
import useStore from '../../store/useStore';
import { uploadApi } from '../../api/api';

export default function AdminServices() {
  const { services, addService, updateService, deleteService } = useStore();
  const [showModal, setShowModal] = useState(false);
  const [editingService, setEditingService] = useState<{ id: string; _id?: string } | null>(null);
  const [form, setForm] = useState({
    title: '', description: '', shortDescription: '', price: '', category: 'Residential', rating: '4.5', duration: '2-3 hrs', image: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const openAdd = () => {
    setEditingService(null);
    setForm({ title: '', description: '', shortDescription: '', price: '', category: 'Residential', rating: '4.5', duration: '2-3 hrs', image: '' });
    setImageFile(null);
    setImagePreview('');
    setShowModal(true);
  };

  const openEdit = (service: typeof services[0]) => {
    setEditingService({ id: service.id, _id: service._id });
    setForm({
      title: service.title,
      description: service.description,
      shortDescription: service.shortDescription,
      price: String(service.price),
      category: service.category,
      rating: String(service.rating),
      duration: service.duration,
      image: service.image,
    });
    setImageFile(null);
    setImagePreview(service.image);
    setShowModal(true);
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { toast.error('Image must be under 5MB'); return; }
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.price) { toast.error('Title and price are required'); return; }
    setSaving(true);
    try {
      let imageUrl = form.image;

      // Upload new image if selected
      if (imageFile) {
        setUploading(true);
        try {
          const uploadResult = await uploadApi.uploadImage(imageFile);
          imageUrl = uploadResult.url;
        } catch {
          toast.error('Image upload failed, using URL instead');
        } finally {
          setUploading(false);
        }
      }

      const serviceData = {
        title: form.title,
        description: form.description,
        shortDescription: form.shortDescription,
        price: Number(form.price),
        category: form.category,
        rating: Number(form.rating),
        duration: form.duration,
        image: imageUrl || 'https://images.pexels.com/photos/6197108/pexels-photo-6197108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
        features: [],
        reviewCount: 0,
      };

      if (editingService) {
        await updateService(editingService._id || editingService.id, serviceData);
        toast.success('Service updated');
      } else {
        await addService(serviceData);
        toast.success('Service added');
      }
      setShowModal(false);
    } catch {
      toast.error('Failed to save service');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this service?')) return;
    try {
      await deleteService(id);
      toast.success('Service deleted');
    } catch {
      toast.error('Failed to delete service');
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Services</h1>
          <p className="text-sm text-gray-500">{services.length} services listed</p>
        </div>
        <button onClick={openAdd} className="px-4 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-xl hover:bg-primary-700 flex items-center gap-2">
          <FiPlus /> Add Service
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, i) => (
          <motion.div
            key={service.id || service._id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden group"
          >
            <div className="h-36 overflow-hidden relative">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <button onClick={() => openEdit(service)} className="p-2 bg-white rounded-lg hover:bg-gray-100"><FiEdit2 className="text-gray-700" /></button>
                <button onClick={() => handleDelete(service.id || service._id || '')} className="p-2 bg-white rounded-lg hover:bg-gray-100"><FiTrash2 className="text-red-600" /></button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-gray-900 text-sm">{service.title}</h3>
                <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded">{service.category}</span>
              </div>
              <p className="text-xs text-gray-400 mb-3 line-clamp-1">{service.shortDescription}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-primary-600">${service.price}</span>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="flex items-center gap-0.5"><FiStar className="text-yellow-500" /> {service.rating}</span>
                  <span className="flex items-center gap-0.5"><FiClock /> {service.duration}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">{editingService ? 'Edit Service' : 'Add Service'}</h2>
                <button onClick={() => setShowModal(false)} className="p-1 hover:bg-gray-100 rounded-lg"><FiX /></button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
                  <input value={form.shortDescription} onChange={e => setForm({...form, shortDescription: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})} rows={3} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                    <input type="number" value={form.price} onChange={e => setForm({...form, price: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select value={form.category} onChange={e => setForm({...form, category: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                      {['Residential', 'Commercial', 'Specialized', 'Premium'].map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                    <input value={form.duration} onChange={e => setForm({...form, duration: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                    <input type="number" step="0.1" max="5" value={form.rating} onChange={e => setForm({...form, rating: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Image</label>
                  <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageSelect} className="hidden" />
                  {imagePreview ? (
                    <div className="relative">
                      <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover rounded-xl border border-gray-200" />
                      <button
                        type="button"
                        onClick={() => { setImagePreview(''); setImageFile(null); setForm({...form, image: ''}); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                        className="absolute top-2 right-2 p-1 bg-white rounded-lg shadow hover:bg-gray-50"
                      >
                        <FiX className="text-gray-600" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full h-32 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-primary-400 hover:bg-primary-50 transition-colors"
                    >
                      <FiUpload className="text-gray-400 text-xl" />
                      <span className="text-sm text-gray-500">Click to upload image</span>
                      <span className="text-xs text-gray-400">JPG, PNG, WebP up to 5MB</span>
                    </button>
                  )}
                  {!imagePreview && (
                    <div className="mt-2">
                      <label className="block text-xs text-gray-500 mb-1">Or paste image URL:</label>
                      <div className="flex items-center gap-2">
                        <FiImage className="text-gray-400 flex-shrink-0" />
                        <input value={form.image} onChange={e => { setForm({...form, image: e.target.value}); setImagePreview(e.target.value); }} placeholder="https://..." className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={saving}
                  className="w-full py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {uploading ? 'Uploading image...' : saving ? 'Saving...' : (editingService ? 'Update Service' : 'Add Service')}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
