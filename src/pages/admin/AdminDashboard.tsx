import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiCalendar, FiDollarSign, FiArrowUpRight, FiLayers } from 'react-icons/fi';
import useStore from '../../store/useStore';

export default function AdminDashboard() {
  const { bookings, users, services, contacts, reviews, fetchBookings, fetchUsers, fetchContacts, fetchAllReviews } = useStore();

  useEffect(() => {
    fetchBookings();
    fetchUsers();
    fetchContacts();
    fetchAllReviews();
  }, []);

  const totalRevenue = bookings.filter(b => b.status === 'completed').reduce((sum, b) => sum + b.totalPrice, 0);
  const pendingBookings = bookings.filter(b => b.status === 'pending').length;
  const completedBookings = bookings.filter(b => b.status === 'completed').length;

  const stats = [
    { title: 'Total Users', value: users.filter(u => u.role === 'user').length, icon: FiUsers, color: 'bg-blue-500', change: '+12%' },
    { title: 'Total Bookings', value: bookings.length, icon: FiCalendar, color: 'bg-purple-500', change: '+8%' },
    { title: 'Revenue', value: `$${totalRevenue.toLocaleString()}`, icon: FiDollarSign, color: 'bg-green-500', change: '+23%' },
    { title: 'Services', value: services.length, icon: FiLayers, color: 'bg-orange-500', change: '+2' },
  ];

  const recentBookings = bookings.slice(0, 5);

  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-700',
    accepted: 'bg-blue-100 text-blue-700',
    'in-progress': 'bg-purple-100 text-purple-700',
    completed: 'bg-green-100 text-green-700',
    cancelled: 'bg-red-100 text-red-700',
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-sm text-gray-500">Welcome back! Here's what's happening with your business.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="text-white text-lg" />
              </div>
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <FiArrowUpRight className="text-xs" /> {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.title}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Bookings */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Recent Bookings</h2>
            <span className="text-xs text-gray-400">{bookings.length} total</span>
          </div>
          <div className="space-y-3">
            {recentBookings.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-4">No bookings yet</p>
            ) : (
              recentBookings.map((booking) => (
                <div key={booking.id || booking._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">
                      {booking.userName[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{booking.userName}</p>
                      <p className="text-xs text-gray-400">{booking.serviceTitle}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[booking.status]}`}>
                      {booking.status.replace('-', ' ')}
                    </span>
                    <p className="text-xs text-gray-400 mt-1">${booking.totalPrice}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quick Stats Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Booking Status</h2>
            <div className="space-y-3">
              {[
                { label: 'Pending', count: pendingBookings, color: 'bg-yellow-500' },
                { label: 'In Progress', count: bookings.filter(b => b.status === 'in-progress').length, color: 'bg-purple-500' },
                { label: 'Completed', count: completedBookings, color: 'bg-green-500' },
                { label: 'Cancelled', count: bookings.filter(b => b.status === 'cancelled').length, color: 'bg-red-500' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 ${item.color} rounded-full`} />
                    <span className="text-sm text-gray-600">{item.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Quick Info</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Reviews</span>
                <span className="font-medium text-gray-900">{reviews.length}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Messages</span>
                <span className="font-medium text-gray-900">{contacts.length}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">New Messages</span>
                <span className="font-medium text-orange-600">{contacts.filter(c => c.status === 'new').length}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Avg Rating</span>
                <span className="font-medium text-gray-900">
                  {reviews.length > 0 ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1) : '0'} ⭐
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
