// import { useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiPlus, FiEdit2, FiTrash2, FiX, FiStar, FiClock, FiUpload, FiImage } from 'react-icons/fi';
// import toast from 'react-hot-toast';
// import useStore from '../../store/useStore';
// import { uploadApi } from '../../api/api';

// export default function AdminServices() {
//   const { services, addService, updateService, deleteService } = useStore();
//   const [showModal, setShowModal] = useState(false);
//   const [editingService, setEditingService] = useState<{ id: string; _id?: string } | null>(null);
//   const [form, setForm] = useState({
//     title: '', description: '', shortDescription: '', price: '', category: 'Residential', rating: '4.5', duration: '2-3 hrs', image: '',
//   });
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [imagePreview, setImagePreview] = useState<string>('');
//   const [uploading, setUploading] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const openAdd = () => {
//     setEditingService(null);
//     setForm({ title: '', description: '', shortDescription: '', price: '', category: 'Residential', rating: '4.5', duration: '2-3 hrs', image: '' });
//     setImageFile(null);
//     setImagePreview('');
//     setShowModal(true);
//   };

//   const openEdit = (service: typeof services[0]) => {
//     setEditingService({ id: service.id, _id: service._id });
//     setForm({
//       title: service.title,
//       description: service.description,
//       shortDescription: service.shortDescription,
//       price: String(service.price),
//       category: service.category,
//       rating: String(service.rating),
//       duration: service.duration,
//       image: service.image,
//     });
//     setImageFile(null);
//     setImagePreview(service.image);
//     setShowModal(true);
//   };

//   const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     if (file.size > 5 * 1024 * 1024) { toast.error('Image must be under 5MB'); return; }
//     setImageFile(file);
//     setImagePreview(URL.createObjectURL(file));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.title || !form.price) { toast.error('Title and price are required'); return; }
//     setSaving(true);
//     try {
//       let imageUrl = form.image;

//       // Upload new image if selected
//       if (imageFile) {
//         setUploading(true);
//         try {
//           const uploadResult = await uploadApi.uploadImage(imageFile);
//           imageUrl = uploadResult.url;
//         } catch {
//           toast.error('Image upload failed, using URL instead');
//         } finally {
//           setUploading(false);
//         }
//       }

//       const serviceData = {
//         title: form.title,
//         description: form.description,
//         shortDescription: form.shortDescription,
//         price: Number(form.price),
//         category: form.category,
//         rating: Number(form.rating),
//         duration: form.duration,
//         image: imageUrl || 'https://images.pexels.com/photos/6197108/pexels-photo-6197108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
//         features: [],
//         reviewCount: 0,
//       };

//       if (editingService) {
//         await updateService(editingService._id || editingService.id, serviceData);
//         toast.success('Service updated');
//       } else {
//         await addService(serviceData);
//         toast.success('Service added');
//       }
//       setShowModal(false);
//     } catch {
//       toast.error('Failed to save service');
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     if (!confirm('Delete this service?')) return;
//     try {
//       await deleteService(id);
//       toast.success('Service deleted');
//     } catch {
//       toast.error('Failed to delete service');
//     }
//   };

//   return (
//     <div>
//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900">Manage Services</h1>
//           <p className="text-sm text-gray-500">{services.length} services listed</p>
//         </div>
//         <button onClick={openAdd} className="px-4 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-xl hover:bg-primary-700 flex items-center gap-2">
//           <FiPlus /> Add Service
//         </button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {services.map((service, i) => (
//           <motion.div
//             key={service.id || service._id}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.03 }}
//             className="bg-white rounded-2xl border border-gray-100 overflow-hidden group"
//           >
//             <div className="h-36 overflow-hidden relative">
//               <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
//                 <button onClick={() => openEdit(service)} className="p-2 bg-white rounded-lg hover:bg-gray-100"><FiEdit2 className="text-gray-700" /></button>
//                 <button onClick={() => handleDelete(service.id || service._id || '')} className="p-2 bg-white rounded-lg hover:bg-gray-100"><FiTrash2 className="text-red-600" /></button>
//               </div>
//             </div>
//             <div className="p-4">
//               <div className="flex items-center justify-between mb-1">
//                 <h3 className="font-semibold text-gray-900 text-sm">{service.title}</h3>
//                 <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded">{service.category}</span>
//               </div>
//               <p className="text-xs text-gray-400 mb-3 line-clamp-1">{service.shortDescription}</p>
//               <div className="flex items-center justify-between">
//                 <span className="font-bold text-primary-600">${service.price}</span>
//                 <div className="flex items-center gap-2 text-xs text-gray-400">
//                   <span className="flex items-center gap-0.5"><FiStar className="text-yellow-500" /> {service.rating}</span>
//                   <span className="flex items-center gap-0.5"><FiClock /> {service.duration}</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
//             onClick={() => setShowModal(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.95 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.95 }}
//               onClick={e => e.stopPropagation()}
//               className="bg-white rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto"
//             >
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-lg font-bold text-gray-900">{editingService ? 'Edit Service' : 'Add Service'}</h2>
//                 <button onClick={() => setShowModal(false)} className="p-1 hover:bg-gray-100 rounded-lg"><FiX /></button>
//               </div>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
//                   <input value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" required />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
//                   <input value={form.shortDescription} onChange={e => setForm({...form, shortDescription: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                   <textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})} rows={3} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none" />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
//                     <input type="number" value={form.price} onChange={e => setForm({...form, price: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" required />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//                     <select value={form.category} onChange={e => setForm({...form, category: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
//                       {['Residential', 'Commercial', 'Specialized', 'Premium'].map(c => <option key={c}>{c}</option>)}
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
//                     <input value={form.duration} onChange={e => setForm({...form, duration: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
//                     <input type="number" step="0.1" max="5" value={form.rating} onChange={e => setForm({...form, rating: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
//                   </div>
//                 </div>

//                 {/* Image Upload */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Service Image</label>
//                   <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageSelect} className="hidden" />
//                   {imagePreview ? (
//                     <div className="relative">
//                       <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover rounded-xl border border-gray-200" />
//                       <button
//                         type="button"
//                         onClick={() => { setImagePreview(''); setImageFile(null); setForm({...form, image: ''}); if (fileInputRef.current) fileInputRef.current.value = ''; }}
//                         className="absolute top-2 right-2 p-1 bg-white rounded-lg shadow hover:bg-gray-50"
//                       >
//                         <FiX className="text-gray-600" />
//                       </button>
//                     </div>
//                   ) : (
//                     <button
//                       type="button"
//                       onClick={() => fileInputRef.current?.click()}
//                       className="w-full h-32 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-primary-400 hover:bg-primary-50 transition-colors"
//                     >
//                       <FiUpload className="text-gray-400 text-xl" />
//                       <span className="text-sm text-gray-500">Click to upload image</span>
//                       <span className="text-xs text-gray-400">JPG, PNG, WebP up to 5MB</span>
//                     </button>
//                   )}
//                   {!imagePreview && (
//                     <div className="mt-2">
//                       <label className="block text-xs text-gray-500 mb-1">Or paste image URL:</label>
//                       <div className="flex items-center gap-2">
//                         <FiImage className="text-gray-400 flex-shrink-0" />
//                         <input value={form.image} onChange={e => { setForm({...form, image: e.target.value}); setImagePreview(e.target.value); }} placeholder="https://..." className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={saving}
//                   className="w-full py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
//                 >
//                   {uploading ? 'Uploading image...' : saving ? 'Saving...' : (editingService ? 'Update Service' : 'Add Service')}
//                 </button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


import { useRef, useState, useEffect } from "react";
import useStore from "../../store/useStore";
import { uploadApi } from "../../api/api";
import {
  FiPlus, FiEdit2, FiTrash2, FiX, FiStar, FiClock, FiUpload, FiLink
} from "react-icons/fi";

const CATEGORIES = ["Residential","Commercial","Specialized","Premium"];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
.as-root { font-family:'DM Sans',sans-serif; }
.as-head { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; margin-bottom:24px; }
.as-head-text h1 { font-family:'Syne',sans-serif; font-weight:800; font-size:1.4rem; color:#0f172a; margin:0 0 4px; }
.as-head-text p  { font-size:.875rem; color:#64748b; margin:0; }
.as-add-btn { display:flex; align-items:center; gap:7px; padding:11px 20px; border-radius:12px; background:linear-gradient(135deg,#06b6d4,#3b82f6); color:#fff; font-family:'Syne',sans-serif; font-weight:700; font-size:.85rem; border:none; cursor:pointer; box-shadow:0 4px 14px rgba(6,182,212,.28); transition:transform .2s; }
.as-add-btn:hover { transform:translateY(-1px); }

/* GRID */
.as-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
.as-card { background:#fff; border:1px solid #e8eef4; border-radius:18px; overflow:hidden; transition:box-shadow .2s; }
.as-card:hover { box-shadow:0 8px 28px rgba(0,0,0,.09); }
.as-img-wrap { position:relative; height:150px; overflow:hidden; }
.as-img-wrap img { width:100%; height:100%; object-fit:cover; transition:transform .4s; }
.as-card:hover .as-img-wrap img { transform:scale(1.06); }
.as-card-overlay { position:absolute; inset:0; background:rgba(0,0,0,0); transition:background .2s; display:flex; align-items:center; justify-content:center; gap:8px; opacity:0; }
.as-card:hover .as-card-overlay { background:rgba(0,0,0,.35); opacity:1; }
.as-overlay-btn { width:36px; height:36px; border-radius:10px; background:#fff; border:none; cursor:pointer; font-size:.95rem; display:flex; align-items:center; justify-content:center; transition:transform .15s; }
.as-overlay-btn:hover { transform:scale(1.08); }
.as-card-body { padding:16px; }
.as-card-top { display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom:6px; }
.as-card-name { font-family:'Syne',sans-serif; font-weight:700; font-size:.88rem; color:#0f172a; }
.as-cat-tag { font-size:.68rem; font-weight:600; font-family:'Syne',sans-serif; background:#f1f5f9; color:#64748b; padding:2px 9px; border-radius:6px; white-space:nowrap; }
.as-card-desc { font-size:.78rem; color:#94a3b8; line-height:1.5; margin-bottom:12px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.as-card-footer { display:flex; align-items:center; justify-content:space-between; }
.as-price { font-family:'Syne',sans-serif; font-weight:800; font-size:1rem; background:linear-gradient(135deg,#0891b2,#3b82f6); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.as-meta { display:flex; gap:10px; font-size:.75rem; color:#94a3b8; }

/* MODAL OVERLAY */
.as-modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,.5); backdrop-filter:blur(6px); z-index:999; display:flex; align-items:center; justify-content:center; padding:20px; }
.as-modal { background:#fff; border-radius:22px; padding:28px; width:100%; max-width:540px; max-height:90vh; overflow-y:auto; box-shadow:0 24px 80px rgba(0,0,0,.2); }
.as-modal-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:22px; }
.as-modal-head h2 { font-family:'Syne',sans-serif; font-weight:800; font-size:1.2rem; color:#0f172a; margin:0; }
.as-modal-close { width:32px; height:32px; border-radius:8px; background:#f1f5f9; border:none; cursor:pointer; font-size:.9rem; color:#475569; display:flex; align-items:center; justify-content:center; transition:background .15s; }
.as-modal-close:hover { background:#e2e8f0; }
.as-form-group { display:flex; flex-direction:column; gap:5px; margin-bottom:14px; }
.as-form-group label { font-family:'Syne',sans-serif; font-size:.75rem; font-weight:700; color:#334155; }
.as-form-input { border:1.5px solid #e2e8f0; border-radius:11px; padding:10px 14px; font-family:'DM Sans',sans-serif; font-size:.875rem; color:#1e293b; outline:none; transition:border-color .2s; background:#fff; resize:none; width:100%; box-sizing:border-box; }
.as-form-input:focus { border-color:#06b6d4; box-shadow:0 0 0 3px rgba(6,182,212,.1); }
.as-form-row { display:grid; grid-template-columns:1fr 1fr; gap:12px; }

/* IMG UPLOAD */
.as-img-upload { border:2px dashed #e2e8f0; border-radius:14px; height:120px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:6px; cursor:pointer; transition:all .2s; background:#f8fafc; }
.as-img-upload:hover { border-color:#06b6d4; background:#e0f7fa; }
.as-img-upload-icon { font-size:1.6rem; }
.as-img-upload-text { font-size:.8rem; color:#64748b; font-weight:500; }
.as-img-upload-sub  { font-size:.72rem; color:#94a3b8; }
.as-img-preview-wrap { position:relative; border-radius:12px; overflow:hidden; }
.as-img-preview-wrap img { width:100%; height:130px; object-fit:cover; display:block; }
.as-img-remove { position:absolute; top:8px; right:8px; width:28px; height:28px; border-radius:7px; background:#fff; border:none; cursor:pointer; font-size:.8rem; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(0,0,0,.15); }
.as-url-row { display:flex; align-items:center; gap:8px; margin-top:8px; }
.as-url-icon { font-size:1rem; color:#94a3b8; flex-shrink:0; }

/* SUBMIT */
.as-submit { width:100%; height:48px; background:linear-gradient(135deg,#06b6d4,#3b82f6); color:#fff; border:none; border-radius:12px; font-family:'Syne',sans-serif; font-weight:700; font-size:.925rem; cursor:pointer; box-shadow:0 4px 14px rgba(6,182,212,.28); transition:transform .2s; margin-top:6px; }
.as-submit:hover { transform:translateY(-1px); }
.as-submit:disabled { opacity:.65; cursor:not-allowed; transform:none; }

/* EMPTY */
.as-empty { background:#fff; border:1px solid #e8eef4; border-radius:18px; padding:56px 24px; text-align:center; }
.as-empty p { color:#94a3b8; font-size:.875rem; }

@media(max-width:900px){ .as-grid { grid-template-columns:repeat(2,1fr); } }
@media(max-width:560px){ .as-grid { grid-template-columns:1fr; } .as-form-row { grid-template-columns:1fr; } }
`;

export default function AdminServices() {
  const { services, fetchAllServices, addService, updateService, deleteService } = useStore();
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ title:"", description:"", shortDescription:"", price:"", category:"Residential", rating:"4.5", duration:"2-3 hrs", image:"" });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const fileRef = useRef(null);

  // Fetch ALL services from backend on mount (admin sees inactive too)
  useEffect(() => { fetchAllServices(); }, []);

  const setF = (k, v) => setForm(f => ({...f, [k]:v}));

  const openAdd = () => {
    setEditingId(null);
    setForm({ title:"", description:"", shortDescription:"", price:"", category:"Residential", rating:"4.5", duration:"2-3 hrs", image:"" });
    setImageFile(null); setImagePreview("");
    setShowModal(true);
  };

  const openEdit = (svc) => {
    setEditingId(svc._id || svc.id);
    setForm({ title:svc.title, description:svc.description, shortDescription:svc.shortDescription, price:String(svc.price), category:svc.category, rating:String(svc.rating), duration:svc.duration, image:svc.image });
    setImageFile(null); setImagePreview(svc.image);
    setShowModal(true);
  };

  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5*1024*1024) { alert("Image must be under 5MB"); return; }
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.price) return;
    setSaving(true);
    try {
      let imageUrl = form.image;
      if (imageFile) {
        setUploading(true);
        try {
          const res = await uploadApi.uploadImage(imageFile);
          imageUrl = res.url;
        } catch { } finally { setUploading(false); }
      }
      const data = {
        title:form.title, description:form.description, shortDescription:form.shortDescription,
        price:Number(form.price), category:form.category, rating:Number(form.rating),
        duration:form.duration, features:[], reviewCount:0,
        image:imageUrl || "https://images.pexels.com/photos/6197108/pexels-photo-6197108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
      };
      if (editingId) await updateService(editingId, data);
      else await addService(data);
      setShowModal(false);
    } catch {} finally { setSaving(false); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this service?")) return;
    try { await deleteService(id); } catch {}
  };

  return (
    <>
      <style>{styles}</style>
      <div className="as-root">
        <div className="as-head">
          <div className="as-head-text">
            <h1>Manage Services</h1>
            <p>{services.length} services listed</p>
          </div>
          <button className="as-add-btn" onClick={openAdd}><FiPlus style={{marginRight:4}}/> Add Service</button>
        </div>

        {services.length === 0
          ? <div className="as-empty"><p>No services yet. Click "Add Service" to get started.</p></div>
          : <div className="as-grid">
            {services.map(svc => (
              <div className="as-card" key={svc.id || svc._id}>
                <div className="as-img-wrap">
                  <img src={svc.image} alt={svc.title} loading="lazy" />
                  <div className="as-card-overlay">
                    <button className="as-overlay-btn" title="Edit" onClick={()=>openEdit(svc)}><FiEdit2 size={15}/></button>
                    <button className="as-overlay-btn" title="Delete" onClick={()=>handleDelete(svc._id||svc.id)}><FiTrash2 size={15} style={{color:'#dc2626'}}/></button>
                  </div>
                </div>
                <div className="as-card-body">
                  <div className="as-card-top">
                    <span className="as-card-name">{svc.title}</span>
                    <span className="as-cat-tag">{svc.category}</span>
                  </div>
                  <div className="as-card-desc">{svc.shortDescription}</div>
                  <div className="as-card-footer">
                    <span className="as-price">₹{svc.price}</span>
                    <div className="as-meta">
                      <span><FiStar size={12} style={{display:'inline',color:'#f59e0b',marginRight:2}}/>{svc.rating}</span>
                      <span><FiClock size={12} style={{display:'inline',marginRight:2}}/>{svc.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }

        {/* Modal */}
        {showModal && (
          <div className="as-modal-overlay" onClick={()=>setShowModal(false)}>
            <div className="as-modal" onClick={e=>e.stopPropagation()}>
              <div className="as-modal-head">
                <h2>{editingId ? "Edit Service" : "Add Service"}</h2>
                <button className="as-modal-close" onClick={()=>setShowModal(false)}><FiX/></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="as-form-group">
                  <label>Service Title *</label>
                  <input className="as-form-input" value={form.title} onChange={e=>setF("title",e.target.value)} placeholder="e.g. Home Deep Cleaning" required />
                </div>
                <div className="as-form-group">
                  <label>Short Description</label>
                  <input className="as-form-input" value={form.shortDescription} onChange={e=>setF("shortDescription",e.target.value)} placeholder="Brief summary shown on cards" />
                </div>
                <div className="as-form-group">
                  <label>Full Description</label>
                  <textarea className="as-form-input" rows={3} value={form.description} onChange={e=>setF("description",e.target.value)} placeholder="Detailed description…" />
                </div>
                <div className="as-form-row">
                  <div className="as-form-group" style={{marginBottom:0}}>
                    <label>Price (₹) *</label>
                    <input className="as-form-input" type="number" value={form.price} onChange={e=>setF("price",e.target.value)} required />
                  </div>
                  <div className="as-form-group" style={{marginBottom:0}}>
                    <label>Category</label>
                    <select className="as-form-input" value={form.category} onChange={e=>setF("category",e.target.value)}>
                      {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
                <div className="as-form-row" style={{marginTop:"14px"}}>
                  <div className="as-form-group" style={{marginBottom:0}}>
                    <label>Duration</label>
                    <input className="as-form-input" value={form.duration} onChange={e=>setF("duration",e.target.value)} placeholder="e.g. 2-3 hrs" />
                  </div>
                  <div className="as-form-group" style={{marginBottom:0}}>
                    <label>Rating (max 5)</label>
                    <input className="as-form-input" type="number" step="0.1" max="5" value={form.rating} onChange={e=>setF("rating",e.target.value)} />
                  </div>
                </div>

                {/* Image */}
                <div className="as-form-group" style={{marginTop:"14px"}}>
                  <label>Service Image</label>
                  <input ref={fileRef} type="file" accept="image/*" style={{display:"none"}} onChange={handleImageSelect} />
                  {imagePreview
                    ? <div className="as-img-preview-wrap">
                        <img src={imagePreview} alt="Preview" />
                        <button type="button" className="as-img-remove" onClick={()=>{ setImagePreview(""); setImageFile(null); setF("image",""); if(fileRef.current) fileRef.current.value=""; }}>✕</button>
                      </div>
                    : <div className="as-img-upload" onClick={()=>fileRef.current?.click()}>
                        <div className="as-img-upload-icon"><FiUpload size={28} color="#94a3b8"/></div>
                        <div className="as-img-upload-text">Click to upload image</div>
                        <div className="as-img-upload-sub">JPG, PNG, WebP · max 5MB</div>
                      </div>
                  }
                  {!imagePreview && (
                    <div className="as-url-row">
                      <span className="as-url-icon"><FiLink size={15}/></span>
                      <input className="as-form-input" style={{flex:1}} value={form.image} onChange={e=>{ setF("image",e.target.value); setImagePreview(e.target.value); }} placeholder="Or paste image URL…" />
                    </div>
                  )}
                </div>

                <button type="submit" className="as-submit" disabled={saving}>
                  {uploading ? "Uploading image…" : saving ? "Saving…" : (editingId ? "Update Service" : "Add Service")}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
