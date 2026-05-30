// import { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FiUsers, FiCalendar, FiDollarSign, FiArrowUpRight, FiLayers } from 'react-icons/fi';
// import useStore from '../../store/useStore';

// export default function AdminDashboard() {
//   const { bookings, users, services, contacts, reviews, fetchBookings, fetchUsers, fetchContacts, fetchAllReviews } = useStore();

//   useEffect(() => {
//     fetchBookings();
//     fetchUsers();
//     fetchContacts();
//     fetchAllReviews();
//   }, []);

//   const totalRevenue = bookings.filter(b => b.status === 'completed').reduce((sum, b) => sum + b.totalPrice, 0);
//   const pendingBookings = bookings.filter(b => b.status === 'pending').length;
//   const completedBookings = bookings.filter(b => b.status === 'completed').length;

//   const stats = [
//     { title: 'Total Users', value: users.filter(u => u.role === 'user').length, icon: FiUsers, color: 'bg-blue-500', change: '+12%' },
//     { title: 'Total Bookings', value: bookings.length, icon: FiCalendar, color: 'bg-purple-500', change: '+8%' },
//     { title: 'Revenue', value: `$${totalRevenue.toLocaleString()}`, icon: FiDollarSign, color: 'bg-green-500', change: '+23%' },
//     { title: 'Services', value: services.length, icon: FiLayers, color: 'bg-orange-500', change: '+2' },
//   ];

//   const recentBookings = bookings.slice(0, 5);

//   const statusColors: Record<string, string> = {
//     pending: 'bg-yellow-100 text-yellow-700',
//     accepted: 'bg-blue-100 text-blue-700',
//     'in-progress': 'bg-purple-100 text-purple-700',
//     completed: 'bg-green-100 text-green-700',
//     cancelled: 'bg-red-100 text-red-700',
//   };

//   return (
//     <div>
//       <div className="mb-8">
//         <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
//         <p className="text-sm text-gray-500">Welcome back! Here's what's happening with your business.</p>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//         {stats.map((stat, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.1 }}
//             className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow"
//           >
//             <div className="flex items-center justify-between mb-3">
//               <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center`}>
//                 <stat.icon className="text-white text-lg" />
//               </div>
//               <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
//                 <FiArrowUpRight className="text-xs" /> {stat.change}
//               </span>
//             </div>
//             <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
//             <p className="text-sm text-gray-500">{stat.title}</p>
//           </motion.div>
//         ))}
//       </div>

//       <div className="grid lg:grid-cols-3 gap-6">
//         {/* Recent Bookings */}
//         <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="font-semibold text-gray-900">Recent Bookings</h2>
//             <span className="text-xs text-gray-400">{bookings.length} total</span>
//           </div>
//           <div className="space-y-3">
//             {recentBookings.length === 0 ? (
//               <p className="text-sm text-gray-400 text-center py-4">No bookings yet</p>
//             ) : (
//               recentBookings.map((booking) => (
//                 <div key={booking.id || booking._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
//                   <div className="flex items-center gap-3">
//                     <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">
//                       {booking.userName[0]}
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium text-gray-900">{booking.userName}</p>
//                       <p className="text-xs text-gray-400">{booking.serviceTitle}</p>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[booking.status]}`}>
//                       {booking.status.replace('-', ' ')}
//                     </span>
//                     <p className="text-xs text-gray-400 mt-1">${booking.totalPrice}</p>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>

//         {/* Quick Stats Sidebar */}
//         <div className="space-y-6">
//           <div className="bg-white rounded-2xl border border-gray-100 p-6">
//             <h2 className="font-semibold text-gray-900 mb-4">Booking Status</h2>
//             <div className="space-y-3">
//               {[
//                 { label: 'Pending', count: pendingBookings, color: 'bg-yellow-500' },
//                 { label: 'In Progress', count: bookings.filter(b => b.status === 'in-progress').length, color: 'bg-purple-500' },
//                 { label: 'Completed', count: completedBookings, color: 'bg-green-500' },
//                 { label: 'Cancelled', count: bookings.filter(b => b.status === 'cancelled').length, color: 'bg-red-500' },
//               ].map((item, i) => (
//                 <div key={i} className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className={`w-2.5 h-2.5 ${item.color} rounded-full`} />
//                     <span className="text-sm text-gray-600">{item.label}</span>
//                   </div>
//                   <span className="text-sm font-semibold text-gray-900">{item.count}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl border border-gray-100 p-6">
//             <h2 className="font-semibold text-gray-900 mb-4">Quick Info</h2>
//             <div className="space-y-3">
//               <div className="flex items-center justify-between text-sm">
//                 <span className="text-gray-500">Reviews</span>
//                 <span className="font-medium text-gray-900">{reviews.length}</span>
//               </div>
//               <div className="flex items-center justify-between text-sm">
//                 <span className="text-gray-500">Messages</span>
//                 <span className="font-medium text-gray-900">{contacts.length}</span>
//               </div>
//               <div className="flex items-center justify-between text-sm">
//                 <span className="text-gray-500">New Messages</span>
//                 <span className="font-medium text-orange-600">{contacts.filter(c => c.status === 'new').length}</span>
//               </div>
//               <div className="flex items-center justify-between text-sm">
//                 <span className="text-gray-500">Avg Rating</span>
//                 <span className="font-medium text-gray-900">
//                   {reviews.length > 0 ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1) : '0'} ⭐
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect } from "react";
import useStore from "../../store/useStore";
import { FiUsers, FiCalendar, FiDollarSign, FiLayers } from "react-icons/fi";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
.adm-root { font-family:'DM Sans',sans-serif; }
.adm-head { margin-bottom:28px; }
.adm-head h1 { font-family:'Syne',sans-serif; font-weight:800; font-size:1.5rem; color:#0f172a; margin:0 0 4px; }
.adm-head p  { font-size:.875rem; color:#64748b; margin:0; }

/* STAT CARDS */
.adm-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-bottom:28px; }
.adm-stat { background:#fff; border:1px solid #e8eef4; border-radius:18px; padding:20px; box-shadow:0 2px 10px rgba(0,0,0,.04); transition:box-shadow .2s; }
.adm-stat:hover { box-shadow:0 6px 24px rgba(0,0,0,.08); }
.adm-stat-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; }
.adm-stat-icon { width:42px; height:42px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:1.1rem; }
.adm-stat-icon.blue   { background:#dbeafe; }
.adm-stat-icon.purple { background:#ede9fe; }
.adm-stat-icon.green  { background:#dcfce7; }
.adm-stat-icon.orange { background:#ffedd5; }
.adm-stat-change { font-size:.72rem; font-weight:600; font-family:'Syne',sans-serif; color:#16a34a; background:#dcfce7; padding:3px 9px; border-radius:50px; }
.adm-stat-val { font-family:'Syne',sans-serif; font-weight:800; font-size:1.9rem; color:#0f172a; margin:0 0 3px; }
.adm-stat-lbl { font-size:.8rem; color:#64748b; }

/* GRID LOWER */
.adm-lower { display:grid; grid-template-columns:1fr 320px; gap:20px; }
.adm-card { background:#fff; border:1px solid #e8eef4; border-radius:18px; padding:22px; box-shadow:0 2px 10px rgba(0,0,0,.04); }
.adm-card-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:18px; }
.adm-card-head h2 { font-family:'Syne',sans-serif; font-weight:700; font-size:.95rem; color:#0f172a; margin:0; }
.adm-card-head span { font-size:.78rem; color:#94a3b8; }

/* BOOKINGS LIST */
.adm-booking-item { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:12px 14px; background:#f8fafc; border-radius:12px; margin-bottom:8px; }
.adm-booking-item:last-child { margin-bottom:0; }
.adm-b-avatar { width:36px; height:36px; border-radius:10px; background:linear-gradient(135deg,#e0f7fa,#dbeafe); color:#0891b2; display:flex; align-items:center; justify-content:center; font-family:'Syne',sans-serif; font-weight:700; font-size:.85rem; flex-shrink:0; }
.adm-b-name { font-family:'Syne',sans-serif; font-weight:600; font-size:.83rem; color:#0f172a; margin:0 0 2px; }
.adm-b-service { font-size:.75rem; color:#94a3b8; }
.adm-b-right { text-align:right; flex-shrink:0; }
.adm-b-price { font-family:'Syne',sans-serif; font-weight:700; font-size:.88rem; color:#0891b2; }

/* STATUS PILL */
.adm-pill { font-size:.68rem; font-weight:700; font-family:'Syne',sans-serif; padding:2px 9px; border-radius:50px; text-transform:capitalize; display:inline-block; margin-top:3px; }
.adm-pill.pending    { background:#fef9c3; color:#92400e; }
.adm-pill.accepted   { background:#dbeafe; color:#1e40af; }
.adm-pill.in-progress{ background:#ede9fe; color:#6d28d9; }
.adm-pill.completed  { background:#dcfce7; color:#166534; }
.adm-pill.cancelled  { background:#fee2e2; color:#991b1b; }

/* RIGHT SIDEBAR CARDS */
.adm-right { display:flex; flex-direction:column; gap:16px; }
.adm-status-row { display:flex; align-items:center; justify-content:space-between; padding:8px 0; border-bottom:1px solid #f1f5f9; }
.adm-status-row:last-child { border-bottom:none; }
.adm-status-dot { display:flex; align-items:center; gap:7px; font-size:.84rem; color:#475569; }
.adm-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }
.adm-dot.yellow  { background:#f59e0b; }
.adm-dot.purple  { background:#8b5cf6; }
.adm-dot.green   { background:#22c55e; }
.adm-dot.red     { background:#ef4444; }
.adm-status-count { font-family:'Syne',sans-serif; font-weight:700; font-size:.875rem; color:#0f172a; }
.adm-quick-row { display:flex; align-items:center; justify-content:space-between; padding:8px 0; border-bottom:1px solid #f1f5f9; font-size:.84rem; }
.adm-quick-row:last-child { border-bottom:none; }
.adm-quick-lbl { color:#64748b; }
.adm-quick-val { font-family:'Syne',sans-serif; font-weight:700; color:#0f172a; }
.adm-quick-val.orange { color:#ea580c; }

/* EMPTY */
.adm-empty { text-align:center; padding:32px; color:#94a3b8; font-size:.875rem; }

@media(max-width:1100px){ .adm-lower { grid-template-columns:1fr; } .adm-right { display:grid; grid-template-columns:1fr 1fr; } }
@media(max-width:900px) { .adm-stats { grid-template-columns:repeat(2,1fr); } }
@media(max-width:520px) { .adm-stats { grid-template-columns:1fr 1fr; gap:10px; } .adm-right { grid-template-columns:1fr; } }
`;

export default function AdminDashboard() {
  const { bookings, users, services, contacts, reviews, fetchBookings, fetchUsers, fetchContacts, fetchAllReviews, fetchAllServices } = useStore();

  useEffect(() => {
    fetchBookings();
    fetchUsers();
    fetchContacts();
    fetchAllReviews();
    fetchAllServices();
  }, []);

  const totalRevenue = bookings.filter(b => b.status === "completed").reduce((s,b) => s + b.totalPrice, 0);
  const pendingBookings  = bookings.filter(b => b.status === "pending").length;
  const completedBookings = bookings.filter(b => b.status === "completed").length;
  const avgRating = reviews.length > 0 ? (reviews.reduce((s,r) => s+r.rating, 0)/reviews.length).toFixed(1) : "0";

  const statCards = [
    { icon: <FiUsers size={18} color="#3b82f6"/>, cls:"blue",   val:users.filter(u=>u.role==="user").length, lbl:"Total Users",    change:"+12%" },
    { icon: <FiCalendar size={18} color="#8b5cf6"/>, cls:"purple", val:bookings.length,                         lbl:"Total Bookings", change:"+8%" },
    { icon: <FiDollarSign size={18} color="#16a34a"/>, cls:"green",  val:`₹${totalRevenue.toLocaleString()}`,      lbl:"Revenue",        change:"+23%" },
    { icon: <FiLayers size={18} color="#ea580c"/>, cls:"orange", val:services.length,                         lbl:"Services",       change:"+2" },
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="adm-root">
        <div className="adm-head">
          <h1>Dashboard Overview</h1>
          <p>Welcome back! Here's what's happening with your business.</p>
        </div>

        {/* Stats */}
        <div className="adm-stats">
          {statCards.map((s,i) => (
            <div className="adm-stat" key={i}>
              <div className="adm-stat-top">
                <div className={`adm-stat-icon ${s.cls}`}>{s.icon}</div>
                <span className="adm-stat-change">↑ {s.change}</span>
              </div>
              <div className="adm-stat-val">{s.val}</div>
              <div className="adm-stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>

        {/* Lower */}
        <div className="adm-lower">
          {/* Recent Bookings */}
          <div className="adm-card">
            <div className="adm-card-head">
              <h2>Recent Bookings</h2>
              <span>{bookings.length} total</span>
            </div>
            {bookings.length === 0
              ? <div className="adm-empty">No bookings yet</div>
              : bookings.slice(0,6).map(b => (
                <div className="adm-booking-item" key={b.id || b._id}>
                  <div className="adm-b-avatar">{b.userName?.[0]}</div>
                  <div style={{flex:1,minWidth:0}}>
                    <div className="adm-b-name">{b.userName}</div>
                    <div className="adm-b-service">{b.serviceTitle}</div>
                  </div>
                  <div className="adm-b-right">
                    <div className="adm-b-price">₹{b.totalPrice}</div>
                    <span className={`adm-pill ${b.status}`}>{b.status.replace("-"," ")}</span>
                  </div>
                </div>
              ))
            }
          </div>

          {/* Right column */}
          <div className="adm-right">
            <div className="adm-card">
              <div className="adm-card-head"><h2>Booking Status</h2></div>
              {[
                {dot:"yellow", lbl:"Pending",     val:pendingBookings},
                {dot:"purple", lbl:"In Progress",  val:bookings.filter(b=>b.status==="in-progress").length},
                {dot:"green",  lbl:"Completed",   val:completedBookings},
                {dot:"red",    lbl:"Cancelled",   val:bookings.filter(b=>b.status==="cancelled").length},
              ].map((r,i) => (
                <div className="adm-status-row" key={i}>
                  <div className="adm-status-dot"><span className={`adm-dot ${r.dot}`}/>{r.lbl}</div>
                  <span className="adm-status-count">{r.val}</span>
                </div>
              ))}
            </div>
            <div className="adm-card">
              <div className="adm-card-head"><h2>Quick Info</h2></div>
              <div className="adm-quick-row"><span className="adm-quick-lbl">Reviews</span>      <span className="adm-quick-val">{reviews.length}</span></div>
              <div className="adm-quick-row"><span className="adm-quick-lbl">Messages</span>     <span className="adm-quick-val">{contacts.length}</span></div>
              <div className="adm-quick-row"><span className="adm-quick-lbl">New Messages</span> <span className="adm-quick-val orange">{contacts.filter(c=>c.status==="new").length}</span></div>
              <div className="adm-quick-row"><span className="adm-quick-lbl">Avg Rating</span>   <span className="adm-quick-val">{avgRating} ★</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
