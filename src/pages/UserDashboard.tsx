// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FiCalendar, FiClock, FiMapPin, FiUser, FiMail, FiPhone, FiEdit2, FiX } from 'react-icons/fi';
// import toast from 'react-hot-toast';
// import useStore from '../store/useStore';

// const statusColors: Record<string, string> = {
//   pending: 'bg-yellow-100 text-yellow-700',
//   accepted: 'bg-blue-100 text-blue-700',
//   'in-progress': 'bg-purple-100 text-purple-700',
//   completed: 'bg-green-100 text-green-700',
//   cancelled: 'bg-red-100 text-red-700',
// };

// export default function UserDashboard() {
//   const { user, isAuthenticated, bookings, fetchUserBookings, cancelBooking } = useStore();
//   const [activeTab, setActiveTab] = useState<'bookings' | 'profile'>('bookings');
//   const [cancellingId, setCancellingId] = useState<string | null>(null);

//   useEffect(() => {
//     if (isAuthenticated) {
//       fetchUserBookings();
//     }
//   }, [isAuthenticated]);

//   if (!isAuthenticated || !user) {
//     return (
//       <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md">
//           <h2 className="text-xl font-bold text-gray-900 mb-2">Login Required</h2>
//           <p className="text-gray-500 mb-6 text-sm">Please login to access your dashboard.</p>
//           <Link to="/login" className="inline-block px-6 py-2.5 bg-primary-600 text-white rounded-xl font-medium text-sm">Go to Login</Link>
//         </div>
//       </div>
//     );
//   }

//   const handleCancel = async (id: string) => {
//     setCancellingId(id);
//     try {
//       await cancelBooking(id);
//       toast.success('Booking cancelled');
//     } catch {
//       toast.error('Failed to cancel booking');
//     } finally {
//       setCancellingId(null);
//     }
//   };

//   return (
//     <div className="pt-20 min-h-screen bg-gray-50">
//       <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-10 sm:py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap items-center gap-4">
//             <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white text-xl sm:text-2xl font-bold flex-shrink-0">
//               {user.name[0]}
//             </div>
//             <div>
//               <h1 className="text-xl sm:text-2xl font-bold text-white">{user.name}</h1>
//               <p className="text-white/70 text-sm">{user.email}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Tabs */}
//         <div className="flex gap-2 mb-8">
//           {(['bookings', 'profile'] as const).map(tab => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
//                 activeTab === tab ? 'bg-primary-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-50'
//               }`}
//             >
//               {tab === 'bookings' ? 'My Bookings' : 'Profile'}
//             </button>
//           ))}
//         </div>

//         {/* Bookings Tab */}
//         {activeTab === 'bookings' && (
//           <div>
//             {/* Stats — responsive grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
//               {[
//                 { label: 'Total Bookings', value: bookings.length, color: 'bg-primary-50 text-primary-600' },
//                 { label: 'Completed', value: bookings.filter(b => b.status === 'completed').length, color: 'bg-green-50 text-green-600' },
//                 { label: 'In Progress', value: bookings.filter(b => b.status === 'in-progress' || b.status === 'accepted').length, color: 'bg-blue-50 text-blue-600' },
//                 { label: 'Pending', value: bookings.filter(b => b.status === 'pending').length, color: 'bg-yellow-50 text-yellow-600' },
//               ].map((stat, i) => (
//                 <div key={i} className={`${stat.color} p-4 sm:p-5 rounded-2xl`}>
//                   <p className="text-2xl font-bold">{stat.value}</p>
//                   <p className="text-xs sm:text-sm opacity-70">{stat.label}</p>
//                 </div>
//               ))}
//             </div>

//             {bookings.length === 0 ? (
//               <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
//                 <FiCalendar className="text-4xl text-gray-300 mx-auto mb-4" />
//                 <p className="text-gray-500 mb-4">No bookings yet</p>
//                 <Link to="/services" className="inline-block px-6 py-2.5 bg-primary-600 text-white rounded-xl text-sm font-medium">Book a Service</Link>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {bookings.map((booking, i) => (
//                   <motion.div
//                     key={booking.id || booking._id}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: i * 0.05 }}
//                     className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 hover:shadow-md transition-shadow"
//                   >
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
//                       <div className="flex-1 min-w-0">
//                         <div className="flex flex-wrap items-center gap-2 mb-2">
//                           <h3 className="font-semibold text-gray-900 truncate">{booking.serviceTitle}</h3>
//                           <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium capitalize flex-shrink-0 ${statusColors[booking.status]}`}>
//                             {booking.status.replace('-', ' ')}
//                           </span>
//                         </div>
//                         <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-500">
//                           <span className="flex items-center gap-1"><FiCalendar /> {booking.bookingDate}</span>
//                           <span className="flex items-center gap-1"><FiClock /> {booking.bookingTime}</span>
//                           <span className="flex items-center gap-1 truncate"><FiMapPin /> {booking.area || booking.address}</span>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-3 flex-shrink-0">
//                         <span className="text-lg sm:text-xl font-bold text-primary-600">${booking.totalPrice}</span>
//                         {(booking.status === 'pending' || booking.status === 'accepted') && (
//                           <button
//                             onClick={() => handleCancel(booking.id || booking._id || '')}
//                             disabled={cancellingId === (booking.id || booking._id)}
//                             className="px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 flex items-center gap-1 disabled:opacity-50"
//                           >
//                             <FiX /> {cancellingId === (booking.id || booking._id) ? '...' : 'Cancel'}
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {/* Profile Tab */}
//         {activeTab === 'profile' && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 max-w-2xl">
//             <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Information</h2>
//             <div className="space-y-4">
//               <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
//                 <FiUser className="text-gray-400 flex-shrink-0" />
//                 <div>
//                   <p className="text-xs text-gray-400">Full Name</p>
//                   <p className="text-sm font-medium text-gray-900">{user.name}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
//                 <FiMail className="text-gray-400 flex-shrink-0" />
//                 <div className="min-w-0">
//                   <p className="text-xs text-gray-400">Email</p>
//                   <p className="text-sm font-medium text-gray-900 truncate">{user.email}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
//                 <FiPhone className="text-gray-400 flex-shrink-0" />
//                 <div>
//                   <p className="text-xs text-gray-400">Phone</p>
//                   <p className="text-sm font-medium text-gray-900">{user.phone || 'Not set'}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
//                 <FiMapPin className="text-gray-400 flex-shrink-0" />
//                 <div>
//                   <p className="text-xs text-gray-400">Address</p>
//                   <p className="text-sm font-medium text-gray-900">{user.address || 'Not set'}</p>
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={() => toast.success('Profile updated!')}
//               className="mt-6 px-6 py-2.5 bg-primary-600 text-white rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-primary-700"
//             >
//               <FiEdit2 /> Edit Profile
//             </button>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }



import { useState } from "react";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

.ud-root { font-family:'DM Sans',sans-serif; min-height:100vh; background:#f8fafc; color:#1e293b; padding-top:0; }

/* HEADER BANNER */
.ud-banner { background:linear-gradient(135deg,#0c4a6e 0%,#1e40af 55%,#0f172a 100%); padding:40px 24px 48px; position:relative; overflow:hidden; }
.ud-banner::before { content:''; position:absolute; top:-100px; right:-100px; width:320px; height:320px; border-radius:50%; background:radial-gradient(circle,rgba(6,182,212,.18) 0%,transparent 70%); pointer-events:none; }
.ud-banner-inner { max-width:1200px; margin:0 auto; display:flex; align-items:center; gap:20px; position:relative; z-index:1; }
.ud-avatar { width:64px; height:64px; border-radius:18px; background:rgba(255,255,255,.18); border:2px solid rgba(255,255,255,.25); display:flex; align-items:center; justify-content:center; font-family:'Syne',sans-serif; font-weight:800; font-size:1.5rem; color:#fff; flex-shrink:0; }
.ud-banner-info h1 { font-family:'Syne',sans-serif; font-weight:800; font-size:1.4rem; color:#fff; margin:0 0 3px; }
.ud-banner-info p  { font-size:.85rem; color:rgba(255,255,255,.65); margin:0; }

/* BODY */
.ud-body { max-width:1200px; margin:0 auto; padding:32px 24px 64px; }

/* TABS */
.ud-tabs { display:flex; gap:8px; margin-bottom:28px; }
.ud-tab { padding:10px 22px; border-radius:12px; font-family:'Syne',sans-serif; font-weight:600; font-size:.84rem; border:none; cursor:pointer; transition:all .2s; }
.ud-tab.active { background:linear-gradient(135deg,#06b6d4,#3b82f6); color:#fff; box-shadow:0 4px 16px rgba(6,182,212,.28); }
.ud-tab:not(.active) { background:#fff; color:#64748b; border:1px solid #e2e8f0; }
.ud-tab:not(.active):hover { border-color:#06b6d4; color:#0891b2; }

/* STATS GRID */
.ud-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-bottom:28px; }
.ud-stat { border-radius:18px; padding:20px; }
.ud-stat.total    { background:#e0f7fa; }
.ud-stat.done     { background:#dcfce7; }
.ud-stat.active   { background:#dbeafe; }
.ud-stat.pending  { background:#fef9c3; }
.ud-stat-num { font-family:'Syne',sans-serif; font-weight:800; font-size:1.8rem; color:#0f172a; margin:0 0 3px; }
.ud-stat-lbl { font-size:.78rem; color:#64748b; font-weight:400; }

/* BOOKING CARDS */
.ud-booking-list { display:flex; flex-direction:column; gap:14px; }
.ud-booking-card { background:#fff; border:1px solid #e8eef4; border-radius:18px; padding:20px 22px; display:flex; align-items:center; justify-content:space-between; gap:16px; transition:box-shadow .2s; }
.ud-booking-card:hover { box-shadow:0 6px 24px rgba(0,0,0,.07); }
.ud-booking-left { flex:1; min-width:0; }
.ud-booking-top  { display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-bottom:8px; }
.ud-booking-title { font-family:'Syne',sans-serif; font-weight:700; font-size:.95rem; color:#0f172a; }
.ud-status-pill { font-size:.7rem; font-weight:700; font-family:'Syne',sans-serif; padding:3px 10px; border-radius:50px; text-transform:capitalize; white-space:nowrap; }
.ud-status-pill.pending    { background:#fef9c3; color:#92400e; }
.ud-status-pill.accepted   { background:#dbeafe; color:#1e40af; }
.ud-status-pill.in-progress{ background:#ede9fe; color:#6d28d9; }
.ud-status-pill.completed  { background:#dcfce7; color:#166534; }
.ud-status-pill.cancelled  { background:#fee2e2; color:#991b1b; }
.ud-booking-meta { display:flex; flex-wrap:wrap; gap:14px; }
.ud-meta-item { display:flex; align-items:center; gap:5px; font-size:.8rem; color:#94a3b8; }
.ud-meta-item span:first-child { font-size:.9rem; }
.ud-booking-right { display:flex; align-items:center; gap:12px; flex-shrink:0; }
.ud-booking-price { font-family:'Syne',sans-serif; font-weight:800; font-size:1.2rem; background:linear-gradient(135deg,#0891b2,#3b82f6); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.ud-cancel-btn { padding:7px 14px; border-radius:10px; background:#fee2e2; color:#dc2626; border:none; font-size:.76rem; font-family:'Syne',sans-serif; font-weight:700; cursor:pointer; transition:background .2s; display:flex; align-items:center; gap:5px; }
.ud-cancel-btn:hover { background:#fecaca; }
.ud-cancel-btn:disabled { opacity:.5; cursor:not-allowed; }

/* EMPTY STATE */
.ud-empty { background:#fff; border:1px solid #e8eef4; border-radius:20px; padding:64px 24px; text-align:center; }
.ud-empty-icon { font-size:3rem; margin-bottom:16px; }
.ud-empty h3 { font-family:'Syne',sans-serif; font-weight:700; font-size:1.1rem; color:#334155; margin:0 0 8px; }
.ud-empty p  { font-size:.875rem; color:#94a3b8; margin:0 0 20px; }
.ud-empty-btn { background:linear-gradient(135deg,#06b6d4,#3b82f6); color:#fff; border:none; padding:12px 24px; border-radius:12px; font-family:'Syne',sans-serif; font-weight:700; font-size:.875rem; cursor:pointer; box-shadow:0 4px 14px rgba(6,182,212,.3); text-decoration:none; display:inline-block; }

/* PROFILE */
.ud-profile-card { background:#fff; border:1px solid #e8eef4; border-radius:22px; padding:32px; max-width:580px; }
.ud-profile-card h2 { font-family:'Syne',sans-serif; font-weight:800; font-size:1.2rem; color:#0f172a; margin:0 0 24px; }
.ud-profile-field { display:flex; align-items:center; gap:14px; background:#f8fafc; border:1px solid #e8eef4; border-radius:14px; padding:14px 16px; margin-bottom:12px; }
.ud-profile-field-icon { width:36px; height:36px; background:linear-gradient(135deg,#e0f7fa,#dbeafe); border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:1rem; flex-shrink:0; }
.ud-profile-field-label { font-size:.72rem; color:#94a3b8; font-family:'Syne',sans-serif; font-weight:600; text-transform:uppercase; letter-spacing:.04em; margin-bottom:2px; }
.ud-profile-field-val { font-size:.9rem; font-weight:500; color:#0f172a; }
.ud-edit-btn { display:inline-flex; align-items:center; gap:7px; margin-top:20px; background:linear-gradient(135deg,#06b6d4,#3b82f6); color:#fff; border:none; padding:12px 22px; border-radius:12px; font-family:'Syne',sans-serif; font-weight:700; font-size:.875rem; cursor:pointer; box-shadow:0 4px 14px rgba(6,182,212,.28); transition:transform .2s; }
.ud-edit-btn:hover { transform:translateY(-2px); }

/* LOGIN PROMPT */
.ud-login-prompt { display:flex; align-items:center; justify-content:center; min-height:60vh; }
.ud-login-box { background:#fff; border:1px solid #e8eef4; border-radius:22px; padding:48px 40px; text-align:center; max-width:380px; box-shadow:0 8px 32px rgba(0,0,0,.07); }
.ud-login-box h2 { font-family:'Syne',sans-serif; font-weight:800; font-size:1.3rem; color:#0f172a; margin:0 0 8px; }
.ud-login-box p  { font-size:.875rem; color:#64748b; margin:0 0 22px; }
.ud-login-box a  { background:linear-gradient(135deg,#06b6d4,#3b82f6); color:#fff; text-decoration:none; padding:12px 26px; border-radius:12px; font-family:'Syne',sans-serif; font-weight:700; font-size:.875rem; display:inline-block; box-shadow:0 4px 14px rgba(6,182,212,.28); }

/* RESPONSIVE */
@media(max-width:900px){ .ud-stats { grid-template-columns:repeat(2,1fr); } }
@media(max-width:640px){
  .ud-stats { grid-template-columns:repeat(2,1fr); gap:10px; }
  .ud-booking-card { flex-direction:column; align-items:flex-start; }
  .ud-booking-right { width:100%; justify-content:space-between; }
  .ud-body { padding:24px 16px 48px; }
  .ud-banner { padding:32px 16px 40px; }
}
`;

// Demo data — replace with useStore()
const demoUser = { name:"Rahul Sharma", email:"rahul@example.com", phone:"+91 9458606691", address:"Mangol Puri, New Delhi – 110083", role:"user" };
const demoBookings = [
  { id:"1", serviceTitle:"Home Deep Cleaning",   bookingDate:"2025-06-10", bookingTime:"10:00 AM", area:"Mangol Puri",  status:"completed",  totalPrice:"₹3,999" },
  { id:"2", serviceTitle:"Bathroom Cleaning",     bookingDate:"2025-06-18", bookingTime:"02:00 PM", area:"Rohini",       status:"in-progress",totalPrice:"₹2,499" },
  { id:"3", serviceTitle:"Sofa Steam Cleaning",   bookingDate:"2025-06-22", bookingTime:"11:00 AM", area:"Pitampura",    status:"accepted",   totalPrice:"₹1,999" },
  { id:"4", serviceTitle:"Kitchen Degreasing",    bookingDate:"2025-06-28", bookingTime:"09:00 AM", area:"Mangol Puri",  status:"pending",    totalPrice:"₹3,199" },
];

export default function UserDashboard() {
  // Replace with: const { user, isAuthenticated, bookings, cancelBooking } = useStore();
  const isAuthenticated = true;
  const user = demoUser;
  const [bookings, setBookings] = useState(demoBookings);
  const [activeTab, setActiveTab] = useState("bookings");
  const [cancellingId, setCancellingId] = useState(null);

  const handleCancel = async (id) => {
    setCancellingId(id);
    await new Promise(r => setTimeout(r, 700));
    setBookings(b => b.map(bk => bk.id === id ? {...bk, status:"cancelled"} : bk));
    setCancellingId(null);
  };

  if (!isAuthenticated || !user) {
    return (
      <>
        <style>{styles}</style>
        <div className="ud-root">
          <div className="ud-login-prompt">
            <div className="ud-login-box">
              <div style={{fontSize:"2.5rem",marginBottom:"14px"}}>🔒</div>
              <h2>Login Required</h2>
              <p>Please sign in to access your dashboard.</p>
              <a href="/login">Go to Login</a>
            </div>
          </div>
        </div>
      </>
    );
  }

  const counts = {
    total:   bookings.length,
    done:    bookings.filter(b=>b.status==="completed").length,
    active:  bookings.filter(b=>b.status==="in-progress"||b.status==="accepted").length,
    pending: bookings.filter(b=>b.status==="pending").length,
  };

  return (
    <>
      <style>{styles}</style>
      <div className="ud-root">

        {/* BANNER */}
        <div className="ud-banner">
          <div className="ud-banner-inner">
            <div className="ud-avatar">{user.name[0]}</div>
            <div className="ud-banner-info">
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="ud-body">

          {/* TABS */}
          <div className="ud-tabs">
            <button className={`ud-tab${activeTab==="bookings"?" active":""}`} onClick={()=>setActiveTab("bookings")}>📋 My Bookings</button>
            <button className={`ud-tab${activeTab==="profile"?" active":""}`}  onClick={()=>setActiveTab("profile")}>👤 Profile</button>
          </div>

          {/* BOOKINGS TAB */}
          {activeTab === "bookings" && (
            <>
              <div className="ud-stats">
                <div className="ud-stat total">  <div className="ud-stat-num">{counts.total}</div>  <div className="ud-stat-lbl">Total Bookings</div></div>
                <div className="ud-stat done">   <div className="ud-stat-num">{counts.done}</div>   <div className="ud-stat-lbl">Completed</div></div>
                <div className="ud-stat active"> <div className="ud-stat-num">{counts.active}</div> <div className="ud-stat-lbl">In Progress</div></div>
                <div className="ud-stat pending"><div className="ud-stat-num">{counts.pending}</div><div className="ud-stat-lbl">Pending</div></div>
              </div>

              {bookings.length === 0 ? (
                <div className="ud-empty">
                  <div className="ud-empty-icon">📅</div>
                  <h3>No Bookings Yet</h3>
                  <p>You haven't booked any service yet. Let's fix that!</p>
                  <a href="/services" className="ud-empty-btn">Browse Services</a>
                </div>
              ) : (
                <div className="ud-booking-list">
                  {bookings.map(b => (
                    <div className="ud-booking-card" key={b.id}>
                      <div className="ud-booking-left">
                        <div className="ud-booking-top">
                          <span className="ud-booking-title">{b.serviceTitle}</span>
                          <span className={`ud-status-pill ${b.status}`}>{b.status.replace("-"," ")}</span>
                        </div>
                        <div className="ud-booking-meta">
                          <div className="ud-meta-item"><span>📅</span><span>{b.bookingDate}</span></div>
                          <div className="ud-meta-item"><span>⏰</span><span>{b.bookingTime}</span></div>
                          <div className="ud-meta-item"><span>📍</span><span>{b.area}</span></div>
                        </div>
                      </div>
                      <div className="ud-booking-right">
                        <span className="ud-booking-price">{b.totalPrice}</span>
                        {(b.status==="pending"||b.status==="accepted") && (
                          <button className="ud-cancel-btn" disabled={cancellingId===b.id} onClick={()=>handleCancel(b.id)}>
                            {cancellingId===b.id ? "…" : "✕ Cancel"}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* PROFILE TAB */}
          {activeTab === "profile" && (
            <div className="ud-profile-card">
              <h2>Profile Information</h2>
              {[
                {icon:"👤", label:"Full Name",     val:user.name},
                {icon:"✉️", label:"Email Address", val:user.email},
                {icon:"📞", label:"Phone Number",  val:user.phone || "Not set"},
                {icon:"📍", label:"Address",       val:user.address || "Not set"},
              ].map((f,i) => (
                <div className="ud-profile-field" key={i}>
                  <div className="ud-profile-field-icon">{f.icon}</div>
                  <div>
                    <div className="ud-profile-field-label">{f.label}</div>
                    <div className="ud-profile-field-val">{f.val}</div>
                  </div>
                </div>
              ))}
              <button className="ud-edit-btn">✏️ Edit Profile</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
