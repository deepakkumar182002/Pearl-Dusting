import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiMapPin, FiSearch } from 'react-icons/fi';
import toast from 'react-hot-toast';
import useStore from '../../store/useStore';
import type { Booking } from '../../types';

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-700',
  accepted: 'bg-blue-100 text-blue-700',
  'in-progress': 'bg-purple-100 text-purple-700',
  completed: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-700',
};

const statusOptions: Booking['status'][] = ['pending', 'accepted', 'in-progress', 'completed', 'cancelled'];

export default function AdminBookings() {
  const { bookings, fetchBookings, updateBookingStatus } = useStore();
  const [filterStatus, setFilterStatus] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchBookings();
  }, []);

  const filtered = bookings.filter(b => {
    const matchStatus = filterStatus === 'all' || b.status === filterStatus;
    const matchSearch = b.userName.toLowerCase().includes(search.toLowerCase()) || b.serviceTitle.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const handleStatusChange = async (id: string, status: Booking['status']) => {
    try {
      await updateBookingStatus(id, status);
      toast.success(`Status updated to ${status}`);
    } catch {
      toast.error('Failed to update status');
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Manage Bookings</h1>
        <p className="text-sm text-gray-500">View and manage all service bookings</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search bookings..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {['all', ...statusOptions].map(status => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-2 rounded-lg text-xs font-medium capitalize transition-all ${
                filterStatus === status ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {status === 'all' ? 'All' : status.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {filtered.map((booking, i) => (
          <motion.div
            key={booking.id || booking._id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 font-bold text-sm">
                    {booking.userName[0]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{booking.userName}</h3>
                    <p className="text-xs text-gray-400">{booking.userEmail}</p>
                  </div>
                  <span className={`ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[booking.status]}`}>
                    {booking.status.replace('-', ' ')}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2">
                  <span className="font-medium text-gray-900">{booking.serviceTitle}</span>
                  <span className="flex items-center gap-1"><FiCalendar className="text-xs" /> {booking.bookingDate}</span>
                  <span className="flex items-center gap-1"><FiClock className="text-xs" /> {booking.bookingTime}</span>
                  <span className="flex items-center gap-1"><FiMapPin className="text-xs" /> {booking.area || 'N/A'}</span>
                </div>
                {booking.notes && <p className="text-xs text-gray-400 mt-2 italic">Note: {booking.notes}</p>}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-primary-600">${booking.totalPrice}</span>
                <select
                  value={booking.status}
                  onChange={(e) => handleStatusChange(booking.id || booking._id || '', e.target.value as Booking['status'])}
                  className="px-3 py-2 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {statusOptions.map(s => (
                    <option key={s} value={s}>{s.replace('-', ' ')}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <p className="text-gray-400">No bookings found</p>
        </div>
      )}
    </div>
  );
}
