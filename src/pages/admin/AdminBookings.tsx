// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FiCalendar, FiClock, FiMapPin, FiSearch } from 'react-icons/fi';
// import toast from 'react-hot-toast';
// import useStore from '../../store/useStore';
// import type { Booking } from '../../types';

// const statusColors: Record<string, string> = {
//   pending: 'bg-yellow-100 text-yellow-700',
//   accepted: 'bg-blue-100 text-blue-700',
//   'in-progress': 'bg-purple-100 text-purple-700',
//   completed: 'bg-green-100 text-green-700',
//   cancelled: 'bg-red-100 text-red-700',
// };

// const statusOptions: Booking['status'][] = ['pending', 'accepted', 'in-progress', 'completed', 'cancelled'];

// export default function AdminBookings() {
//   const { bookings, fetchBookings, updateBookingStatus } = useStore();
//   const [filterStatus, setFilterStatus] = useState('all');
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const filtered = bookings.filter(b => {
//     const matchStatus = filterStatus === 'all' || b.status === filterStatus;
//     const matchSearch = b.userName.toLowerCase().includes(search.toLowerCase()) || b.serviceTitle.toLowerCase().includes(search.toLowerCase());
//     return matchStatus && matchSearch;
//   });

//   const handleStatusChange = async (id: string, status: Booking['status']) => {
//     try {
//       await updateBookingStatus(id, status);
//       toast.success(`Status updated to ${status}`);
//     } catch {
//       toast.error('Failed to update status');
//     }
//   };

//   return (
//     <div>
//       <div className="mb-8">
//         <h1 className="text-2xl font-bold text-gray-900">Manage Bookings</h1>
//         <p className="text-sm text-gray-500">View and manage all service bookings</p>
//       </div>

//       {/* Filters */}
//       <div className="flex flex-col sm:flex-row gap-4 mb-6">
//         <div className="relative flex-1">
//           <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//           <input
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="Search bookings..."
//             className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
//           />
//         </div>
//         <div className="flex gap-2 flex-wrap">
//           {['all', ...statusOptions].map(status => (
//             <button
//               key={status}
//               onClick={() => setFilterStatus(status)}
//               className={`px-3 py-2 rounded-lg text-xs font-medium capitalize transition-all ${
//                 filterStatus === status ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//               }`}
//             >
//               {status === 'all' ? 'All' : status.replace('-', ' ')}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Bookings List */}
//       <div className="space-y-4">
//         {filtered.map((booking, i) => (
//           <motion.div
//             key={booking.id || booking._id}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.03 }}
//             className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow"
//           >
//             <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
//               <div className="flex-1">
//                 <div className="flex items-center gap-3 mb-2">
//                   <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 font-bold text-sm">
//                     {booking.userName[0]}
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900">{booking.userName}</h3>
//                     <p className="text-xs text-gray-400">{booking.userEmail}</p>
//                   </div>
//                   <span className={`ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[booking.status]}`}>
//                     {booking.status.replace('-', ' ')}
//                   </span>
//                 </div>
//                 <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2">
//                   <span className="font-medium text-gray-900">{booking.serviceTitle}</span>
//                   <span className="flex items-center gap-1"><FiCalendar className="text-xs" /> {booking.bookingDate}</span>
//                   <span className="flex items-center gap-1"><FiClock className="text-xs" /> {booking.bookingTime}</span>
//                   <span className="flex items-center gap-1"><FiMapPin className="text-xs" /> {booking.area || 'N/A'}</span>
//                 </div>
//                 {booking.notes && <p className="text-xs text-gray-400 mt-2 italic">Note: {booking.notes}</p>}
//               </div>
//               <div className="flex items-center gap-3">
//                 <span className="text-lg font-bold text-primary-600">${booking.totalPrice}</span>
//                 <select
//                   value={booking.status}
//                   onChange={(e) => handleStatusChange(booking.id || booking._id || '', e.target.value as Booking['status'])}
//                   className="px-3 py-2 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary-500"
//                 >
//                   {statusOptions.map(s => (
//                     <option key={s} value={s}>{s.replace('-', ' ')}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {filtered.length === 0 && (
//         <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
//           <p className="text-gray-400">No bookings found</p>
//         </div>
//       )}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import useStore from "../../store/useStore";

const STATUS_OPTIONS = ["pending","accepted","in-progress","completed","cancelled"];
const PILL = { pending:"pill-yellow", accepted:"pill-blue", "in-progress":"pill-purple", completed:"pill-green", cancelled:"pill-red" };

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
.ab-root { font-family:'DM Sans',sans-serif; }
.ab-head { margin-bottom:24px; }
.ab-head h1 { font-family:'Syne',sans-serif; font-weight:800; font-size:1.4rem; color:#0f172a; margin:0 0 4px; }
.ab-head p  { font-size:.875rem; color:#64748b; margin:0; }
.ab-toolbar { display:flex; flex-wrap:wrap; gap:12px; align-items:center; margin-bottom:20px; }
.ab-search-wrap { position:relative; flex:1; min-width:200px; max-width:360px; }
.ab-search-icon { position:absolute; left:14px; top:50%; transform:translateY(-50%); font-size:.9rem; color:#94a3b8; pointer-events:none; }
.ab-search { width:100%; height:42px; padding:0 14px 0 40px; border:1.5px solid #e2e8f0; border-radius:12px; font-family:'DM Sans',sans-serif; font-size:.875rem; color:#1e293b; outline:none; box-sizing:border-box; transition:border-color .2s; background:#fff; }
.ab-search:focus { border-color:#06b6d4; box-shadow:0 0 0 3px rgba(6,182,212,.1); }
.ab-filters { display:flex; flex-wrap:wrap; gap:6px; }
.ab-filter-btn { padding:8px 14px; border-radius:50px; border:1.5px solid #e2e8f0; background:#fff; color:#64748b; font-family:'Syne',sans-serif; font-weight:600; font-size:.75rem; cursor:pointer; transition:all .15s; text-transform:capitalize; white-space:nowrap; }
.ab-filter-btn:hover { border-color:#06b6d4; color:#0891b2; }
.ab-filter-btn.active { background:linear-gradient(135deg,#06b6d4,#3b82f6); border-color:transparent; color:#fff; box-shadow:0 3px 12px rgba(6,182,212,.28); }
.ab-list { display:flex; flex-direction:column; gap:12px; }
.ab-card { background:#fff; border:1px solid #e8eef4; border-radius:18px; padding:18px 20px; transition:box-shadow .2s; }
.ab-card:hover { box-shadow:0 6px 24px rgba(0,0,0,.07); }
.ab-card-top { display:flex; flex-wrap:wrap; align-items:flex-start; gap:12px; margin-bottom:10px; }
.ab-user { display:flex; align-items:center; gap:10px; flex:1; min-width:0; }
.ab-avatar { width:38px; height:38px; border-radius:11px; background:linear-gradient(135deg,#e0f7fa,#dbeafe); color:#0891b2; display:flex; align-items:center; justify-content:center; font-family:'Syne',sans-serif; font-weight:700; font-size:.9rem; flex-shrink:0; }
.ab-user-name { font-family:'Syne',sans-serif; font-weight:700; font-size:.88rem; color:#0f172a; }
.ab-user-email { font-size:.75rem; color:#94a3b8; }
.ab-card-meta { display:flex; flex-wrap:wrap; gap:12px; font-size:.8rem; color:#64748b; }
.ab-meta-item { display:flex; align-items:center; gap:5px; }
.ab-service-name { font-family:'Syne',sans-serif; font-weight:700; font-size:.88rem; color:#0f172a; }
.ab-card-bottom { display:flex; align-items:center; justify-content:space-between; gap:12px; margin-top:12px; padding-top:12px; border-top:1px solid #f1f5f9; flex-wrap:wrap; }
.ab-price { font-family:'Syne',sans-serif; font-weight:800; font-size:1.1rem; background:linear-gradient(135deg,#0891b2,#3b82f6); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.ab-status-select { padding:8px 12px; border:1.5px solid #e2e8f0; border-radius:10px; font-family:'DM Sans',sans-serif; font-size:.8rem; color:#334155; outline:none; cursor:pointer; background:#f8fafc; transition:border-color .2s; }
.ab-status-select:focus { border-color:#06b6d4; }
.ab-note { font-size:.75rem; color:#94a3b8; font-style:italic; margin-top:6px; }

/* pills */
.pill-yellow  { background:#fef9c3; color:#92400e; }
.pill-blue    { background:#dbeafe; color:#1e40af; }
.pill-purple  { background:#ede9fe; color:#6d28d9; }
.pill-green   { background:#dcfce7; color:#166534; }
.pill-red     { background:#fee2e2; color:#991b1b; }
.ab-pill { font-size:.68rem; font-weight:700; font-family:'Syne',sans-serif; padding:3px 10px; border-radius:50px; text-transform:capitalize; }

.ab-empty { background:#fff; border:1px solid #e8eef4; border-radius:18px; padding:56px 24px; text-align:center; }
.ab-empty-icon { font-size:2.5rem; margin-bottom:12px; }
.ab-empty p { color:#94a3b8; font-size:.875rem; margin:0; }

@media(max-width:640px){
  .ab-card-bottom { flex-direction:column; align-items:flex-start; }
  .ab-toolbar { flex-direction:column; align-items:stretch; }
  .ab-search-wrap { max-width:100%; }
}
`;

export default function AdminBookings() {
  const { bookings, fetchBookings, updateBookingStatus } = useStore();
  const [filterStatus, setFilterStatus] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => { fetchBookings(); }, []);

  const filtered = bookings.filter(b => {
    const matchStatus = filterStatus === "all" || b.status === filterStatus;
    const matchSearch = b.userName?.toLowerCase().includes(search.toLowerCase()) || b.serviceTitle?.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const handleStatusChange = async (id, status) => {
    try { await updateBookingStatus(id, status); } catch { }
  };

  return (
    <>
      <style>{styles}</style>
      <div className="ab-root">
        <div className="ab-head">
          <h1>Manage Bookings</h1>
          <p>View and update all service bookings</p>
        </div>

        <div className="ab-toolbar">
          <div className="ab-search-wrap">
            <span className="ab-search-icon">🔍</span>
            <input className="ab-search" placeholder="Search by name or service…" value={search} onChange={e=>setSearch(e.target.value)} />
          </div>
          <div className="ab-filters">
            {["all", ...STATUS_OPTIONS].map(s => (
              <button key={s} className={`ab-filter-btn${filterStatus===s?" active":""}`} onClick={()=>setFilterStatus(s)}>
                {s === "all" ? "All" : s.replace("-"," ")}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0
          ? <div className="ab-empty"><div className="ab-empty-icon">📭</div><p>No bookings found</p></div>
          : <div className="ab-list">
            {filtered.map(b => (
              <div className="ab-card" key={b.id || b._id}>
                <div className="ab-card-top">
                  <div className="ab-user">
                    <div className="ab-avatar">{b.userName?.[0]}</div>
                    <div>
                      <div className="ab-user-name">{b.userName}</div>
                      <div className="ab-user-email">{b.userEmail}</div>
                    </div>
                  </div>
                  <span className={`ab-pill ${PILL[b.status]}`}>{b.status.replace("-"," ")}</span>
                </div>
                <div className="ab-card-meta">
                  <span className="ab-service-name">{b.serviceTitle}</span>
                  <div className="ab-meta-item"><span>📅</span>{b.bookingDate}</div>
                  <div className="ab-meta-item"><span>⏰</span>{b.bookingTime}</div>
                  <div className="ab-meta-item"><span>📍</span>{b.area || "N/A"}</div>
                </div>
                {b.notes && <div className="ab-note">Note: {b.notes}</div>}
                <div className="ab-card-bottom">
                  <span className="ab-price">₹{b.totalPrice}</span>
                  <select className="ab-status-select" value={b.status} onChange={e=>handleStatusChange(b.id || b._id, e.target.value)}>
                    {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s.replace("-"," ")}</option>)}
                  </select>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </>
  );
}

