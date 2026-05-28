import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiCheckCircle, FiTrash2 } from 'react-icons/fi';
import toast from 'react-hot-toast';
import useStore from '../../store/useStore';
import type { ContactMessage } from '../../types';

const statusColors: Record<string, string> = {
  new: 'bg-red-100 text-red-700',
  read: 'bg-yellow-100 text-yellow-700',
  replied: 'bg-green-100 text-green-700',
};

export default function AdminContacts() {
  const { contacts, fetchContacts, updateContactStatus, deleteContact } = useStore();

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleStatus = async (id: string, status: ContactMessage['status']) => {
    try {
      await updateContactStatus(id, status);
      toast.success(`Marked as ${status}`);
    } catch {
      toast.error('Failed to update status');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this message?')) return;
    try {
      await deleteContact(id);
      toast.success('Message deleted');
    } catch {
      toast.error('Failed to delete message');
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contact Messages</h1>
          <p className="text-sm text-gray-500">{contacts.length} messages · {contacts.filter(c => c.status === 'new').length} new</p>
        </div>
      </div>

      <div className="space-y-4">
        {contacts.map((contact, i) => (
          <motion.div
            key={contact.id || contact._id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 font-bold text-sm">
                    {contact.name[0]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{contact.name}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><FiMail /> {contact.email}</span>
                      {contact.phone && <span className="flex items-center gap-1"><FiPhone /> {contact.phone}</span>}
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[contact.status]}`}>
                    {contact.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-3 bg-gray-50 p-3 rounded-xl">{contact.message}</p>
                <p className="text-xs text-gray-400 mt-2">{contact.createdAt}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                {contact.status !== 'read' && (
                  <button
                    onClick={() => handleStatus(contact.id || contact._id || '', 'read')}
                    className="px-3 py-1.5 text-xs font-medium bg-yellow-50 text-yellow-700 rounded-lg hover:bg-yellow-100"
                  >
                    Mark Read
                  </button>
                )}
                {contact.status !== 'replied' && (
                  <button
                    onClick={() => handleStatus(contact.id || contact._id || '', 'replied')}
                    className="px-3 py-1.5 text-xs font-medium bg-green-50 text-green-700 rounded-lg hover:bg-green-100 flex items-center gap-1"
                  >
                    <FiCheckCircle /> Mark Replied
                  </button>
                )}
                <button
                  onClick={() => handleDelete(contact.id || contact._id || '')}
                  className="px-3 py-1.5 text-xs font-medium bg-red-50 text-red-600 rounded-lg hover:bg-red-100 flex items-center gap-1"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {contacts.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <p className="text-gray-400">No messages yet</p>
        </div>
      )}
    </div>
  );
}
