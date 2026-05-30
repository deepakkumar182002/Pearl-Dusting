// import { useState } from 'react';
// import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { MdCleaningServices } from 'react-icons/md';
// import { FiGrid, FiCalendar, FiLayers, FiUsers, FiStar, FiMail, FiLogOut, FiMenu, FiX, FiChevronRight } from 'react-icons/fi';
// import useStore from '../store/useStore';

// const sidebarLinks = [
//   { name: 'Dashboard', path: '/admin', icon: FiGrid },
//   { name: 'Bookings', path: '/admin/bookings', icon: FiCalendar },
//   { name: 'Services', path: '/admin/services', icon: FiLayers },
//   { name: 'Users', path: '/admin/users', icon: FiUsers },
//   { name: 'Reviews', path: '/admin/reviews', icon: FiStar },
//   { name: 'Messages', path: '/admin/contacts', icon: FiMail },
// ];

// export default function AdminLayout() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const { pathname } = useLocation();
//   const navigate = useNavigate();
//   const { user, isAuthenticated, logout } = useStore();

//   // Redirect if not admin
//   if (!isAuthenticated || user?.role !== 'admin') {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md">
//           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <FiX className="text-red-600 text-2xl" />
//           </div>
//           <h2 className="text-xl font-bold text-gray-900 mb-2">Access Denied</h2>
//           <p className="text-gray-500 mb-6 text-sm">You need admin privileges to access this panel. Login with admin credentials.</p>
//           <div className="space-y-2">
//             <p className="text-xs text-gray-400">Demo admin: admin@sparkleclean.com / any password</p>
//             <Link to="/login" className="inline-block px-6 py-2.5 bg-primary-600 text-white rounded-xl font-medium text-sm hover:bg-primary-700 transition-colors">
//               Go to Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Mobile overlay */}
//       <AnimatePresence>
//         {sidebarOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSidebarOpen(false)}
//             className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//           />
//         )}
//       </AnimatePresence>

//       {/* Sidebar */}
//       <aside
//         className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 z-50 transition-transform duration-300 lg:translate-x-0 ${
//           sidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <div className="flex flex-col h-full">
//           {/* Logo */}
//           <div className="p-4 border-b border-gray-100">
//             <Link to="/" className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
//                 <MdCleaningServices className="text-white text-xl" />
//               </div>
//               <div>
//                 <span className="font-bold text-gray-900">Admin Panel</span>
//                 <span className="block text-[10px] -mt-0.5 text-gray-400">SparkleClean Pro</span>
//               </div>
//             </Link>
//           </div>

//           {/* Navigation */}
//           <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
//             {sidebarLinks.map((link) => {
//               const isActive = pathname === link.path;
//               return (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   onClick={() => setSidebarOpen(false)}
//                   className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
//                     isActive
//                       ? 'bg-primary-50 text-primary-600'
//                       : 'text-gray-600 hover:bg-gray-50'
//                   }`}
//                 >
//                   <link.icon className={`text-lg ${isActive ? 'text-primary-500' : 'text-gray-400'}`} />
//                   {link.name}
//                   {isActive && <FiChevronRight className="ml-auto text-primary-400" />}
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* Bottom */}
//           <div className="p-3 border-t border-gray-100">
//             <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-600 hover:bg-gray-50 mb-1">
//               <FiChevronRight className="text-gray-400" /> Back to Website
//             </Link>
//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-600 hover:bg-red-50 w-full"
//             >
//               <FiLogOut className="text-lg" /> Logout
//             </button>
//           </div>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col min-h-screen">
//         {/* Top Bar */}
//         <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
//           <div className="flex items-center justify-between px-4 lg:px-8 h-16">
//             <button
//               onClick={() => setSidebarOpen(true)}
//               className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
//             >
//               <FiMenu size={20} />
//             </button>
//             <div className="hidden lg:block">
//               <h2 className="text-sm font-semibold text-gray-900">
//                 {sidebarLinks.find(l => l.path === pathname)?.name || 'Dashboard'}
//               </h2>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="text-right hidden sm:block">
//                 <p className="text-sm font-medium text-gray-900">{user?.name}</p>
//                 <p className="text-xs text-gray-500">{user?.email}</p>
//               </div>
//               <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
//                 {user?.name[0]}
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 p-4 lg:p-8">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import useStore from "../store/useStore";
import {
  FiGrid, FiCalendar, FiLayers, FiStar, FiMail,
  FiLogOut, FiArrowLeft, FiMenu
} from "react-icons/fi";

const sidebarLinks = [
  { name:"Dashboard", path:"/admin",          icon: FiGrid },
  { name:"Bookings",  path:"/admin/bookings", icon: FiCalendar },
  { name:"Services",  path:"/admin/services", icon: FiLayers },
  { name:"Reviews",   path:"/admin/reviews",  icon: FiStar },
  { name:"Messages",  path:"/admin/contacts", icon: FiMail },
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

.al-root { font-family:'DM Sans',sans-serif; min-height:100vh; display:flex; background:#f8fafc; color:#1e293b; }

/* SIDEBAR */
.al-sidebar {
  width:240px; flex-shrink:0; background:#fff; border-right:1px solid #e8eef4;
  display:flex; flex-direction:column; height:100vh;
  position:sticky; top:0; z-index:50; transition:transform .3s;
}
.al-sidebar-logo { padding:20px 18px; border-bottom:1px solid #e8eef4; display:flex; align-items:center; gap:10px; text-decoration:none; }
.al-sidebar-logo-icon { width:38px; height:38px; border-radius:10px; background:linear-gradient(135deg,#06b6d4,#3b82f6); display:flex; align-items:center; justify-content:center; font-size:1.1rem; }
.al-sidebar-logo-text { font-family:'Syne',sans-serif; font-weight:800; font-size:.95rem; color:#0f172a; }
.al-sidebar-logo-text span { color:#06b6d4; }
.al-sidebar-logo-sub { font-size:.65rem; color:#94a3b8; margin-top:1px; }
.al-nav { flex:1; padding:12px; overflow-y:auto; }
.al-nav-label { font-family:'Syne',sans-serif; font-size:.68rem; font-weight:700; color:#94a3b8; text-transform:uppercase; letter-spacing:.1em; padding:4px 8px; margin:8px 0 4px; }
.al-nav-link {
  display:flex; align-items:center; gap:10px;
  padding:11px 12px; border-radius:12px; margin-bottom:2px;
  font-family:'DM Sans',sans-serif; font-weight:500; font-size:.875rem;
  color:#475569; text-decoration:none; transition:all .15s;
}
.al-nav-link:hover { background:#f1f5f9; color:#0f172a; }
.al-nav-link.active { background:linear-gradient(135deg,#e0f7fa,#dbeafe); color:#0891b2; font-weight:600; }
.al-nav-link.active .al-nav-icon { opacity:1; }
.al-nav-icon { font-size:1rem; flex-shrink:0; }
.al-nav-arrow { margin-left:auto; font-size:.65rem; opacity:.5; }
.al-sidebar-bottom { padding:12px; border-top:1px solid #e8eef4; }
.al-sidebar-back { display:flex; align-items:center; gap:8px; padding:10px 12px; border-radius:10px; font-size:.84rem; color:#64748b; text-decoration:none; margin-bottom:4px; transition:background .15s; }
.al-sidebar-back:hover { background:#f1f5f9; }
.al-sidebar-logout { display:flex; align-items:center; gap:8px; padding:10px 12px; border-radius:10px; font-size:.84rem; color:#dc2626; border:none; background:none; cursor:pointer; width:100%; text-align:left; font-family:'DM Sans',sans-serif; transition:background .15s; }
.al-sidebar-logout:hover { background:#fee2e2; }

/* MAIN */
.al-main { flex:1; display:flex; flex-direction:column; min-height:100vh; overflow-x:hidden; }
.al-topbar {
  background:#fff; border-bottom:1px solid #e8eef4;
  position:sticky; top:0; z-index:40;
  display:flex; align-items:center; justify-content:space-between;
  padding:0 24px; height:60px;
}
.al-topbar-left { display:flex; align-items:center; gap:12px; }
.al-topbar-menu { padding:8px; border:1px solid #e2e8f0; border-radius:9px; background:none; cursor:pointer; font-size:1.1rem; color:#475569; display:none; transition:background .2s; }
.al-topbar-menu:hover { background:#f1f5f9; }
.al-page-title { font-family:'Syne',sans-serif; font-weight:700; font-size:.95rem; color:#0f172a; }
.al-topbar-right { display:flex; align-items:center; gap:12px; }
.al-topbar-user { display:flex; align-items:center; gap:8px; }
.al-topbar-user-info { text-align:right; }
.al-topbar-user-name { font-family:'Syne',sans-serif; font-weight:600; font-size:.83rem; color:#0f172a; }
.al-topbar-user-email { font-size:.72rem; color:#94a3b8; }
.al-topbar-avatar { width:34px; height:34px; border-radius:50%; background:linear-gradient(135deg,#06b6d4,#3b82f6); color:#fff; display:flex; align-items:center; justify-content:center; font-family:'Syne',sans-serif; font-weight:700; font-size:.85rem; }
.al-content { flex:1; padding:28px 24px; }

/* ACCESS DENIED */
.al-denied { min-height:100vh; display:flex; align-items:center; justify-content:center; background:#f8fafc; font-family:'DM Sans',sans-serif; }
.al-denied-box { background:#fff; border-radius:22px; border:1px solid #e8eef4; box-shadow:0 8px 32px rgba(0,0,0,.07); padding:48px 40px; text-align:center; max-width:420px; }
.al-denied-icon { width:60px; height:60px; border-radius:50%; background:#fee2e2; display:flex; align-items:center; justify-content:center; font-size:1.6rem; margin:0 auto 20px; }
.al-denied-box h2 { font-family:'Syne',sans-serif; font-weight:800; font-size:1.3rem; color:#0f172a; margin:0 0 8px; }
.al-denied-box p  { font-size:.875rem; color:#64748b; margin:0 0 6px; line-height:1.65; }
.al-denied-hint { font-size:.75rem; color:#94a3b8; margin:0 0 22px!important; }
.al-denied-btn { background:linear-gradient(135deg,#06b6d4,#3b82f6); color:#fff; text-decoration:none; padding:12px 26px; border-radius:12px; font-family:'Syne',sans-serif; font-weight:700; font-size:.875rem; display:inline-block; box-shadow:0 4px 14px rgba(6,182,212,.28); }

/* MOBILE OVERLAY */
.al-mob-overlay { position:fixed; inset:0; background:rgba(0,0,0,.5); backdrop-filter:blur(4px); z-index:49; }

@media(max-width:1024px){
  .al-sidebar { position:fixed; left:0; top:0; transform:translateX(-100%); z-index:50; }
  .al-sidebar.open { transform:translateX(0); }
  .al-topbar-menu { display:flex!important; }
  .al-topbar-user-info { display:none; }
  .al-content { padding:20px 16px; }
}
`;

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useStore();

  if (!isAuthenticated || user?.role !== "admin") {
    return (
      <>
        <style>{styles}</style>
        <div className="al-denied">
          <div className="al-denied-box">
            <div className="al-denied-icon"><FiLogOut size={28} color="#dc2626"/></div>
            <h2>Access Denied</h2>
            <p>You need admin privileges to access this panel.</p>
            <p className="al-denied-hint">Demo: admin@pearldusting.com / admin123</p>
            <Link to="/login" className="al-denied-btn">Go to Login</Link>
          </div>
        </div>
      </>
    );
  }

  const handleLogout = () => { logout(); navigate("/"); };
  const currentPage = sidebarLinks.find(l => l.path === pathname)?.name || "Dashboard";

  return (
    <>
      <style>{styles}</style>
      <div className="al-root">

        {/* Mobile overlay */}
        {sidebarOpen && <div className="al-mob-overlay" onClick={() => setSidebarOpen(false)} />}

        {/* Sidebar */}
        <aside className={`al-sidebar${sidebarOpen ? " open" : ""}`}>
          <Link to="/" className="al-sidebar-logo">
            <div className="al-sidebar-logo-icon"><FiLayers size={20} color="#fff"/></div>
            <div>
              <div className="al-sidebar-logo-text">Pearl<span>Dusting</span></div>
              <div className="al-sidebar-logo-sub">Admin Panel</div>
            </div>
          </Link>

          <nav className="al-nav">
            <div className="al-nav-label">Main Menu</div>
            {sidebarLinks.map(l => (
              <Link
                key={l.path} to={l.path}
                className={`al-nav-link${pathname === l.path ? " active" : ""}`}
                onClick={() => setSidebarOpen(false)}
              >
                <l.icon className="al-nav-icon" size={17}/>
                {l.name}
                {pathname === l.path && <span className="al-nav-arrow">▶</span>}
              </Link>
            ))}
          </nav>

          <div className="al-sidebar-bottom">
            <Link to="/" className="al-sidebar-back"><FiArrowLeft size={14} style={{marginRight:6}}/> Back to Website</Link>
            <button className="al-sidebar-logout" onClick={handleLogout}><FiLogOut size={14} style={{marginRight:6}}/> Logout</button>
          </div>
        </aside>

        {/* Main */}
        <div className="al-main">
          <header className="al-topbar">
            <div className="al-topbar-left">
              <button className="al-topbar-menu" onClick={() => setSidebarOpen(true)}><FiMenu size={18}/></button>
              <span className="al-page-title">{currentPage}</span>
            </div>
            <div className="al-topbar-right">
              <div className="al-topbar-user">
                <div className="al-topbar-user-info">
                  <div className="al-topbar-user-name">{user.name}</div>
                  <div className="al-topbar-user-email">{user.email}</div>
                </div>
                <div className="al-topbar-avatar">{user.name?.[0]}</div>
              </div>
            </div>
          </header>
          <main className="al-content">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
