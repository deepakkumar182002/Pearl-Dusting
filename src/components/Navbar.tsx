// import { useEffect, useRef, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";

// import { HiMenuAlt3, HiX } from "react-icons/hi";

// import { FiUser, FiLogOut, FiGrid } from "react-icons/fi";

// import { MdCleaningServices } from "react-icons/md";

// import useStore from "../store/useStore";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "Services", path: "/services" },
//   { name: "About", path: "/about" },
//   { name: "Contact", path: "/contact" },
// ];

// export default function Navbar() {
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const { pathname } = useLocation();
//   const navigate = useNavigate();

//   const { user, isAuthenticated, logout } = useStore();

//   // Navbar scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu on route change
//   useEffect(() => {
//     setMobileMenu(false);
//     setDropdownOpen(false);
//   }, [pathname]);

//   // Close dropdown outside click
//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target as Node)
//       ) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handler);

//     return () => {
//       document.removeEventListener("mousedown", handler);
//     };
//   }, []);

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   return (
//     <header
//       className={`site-header transition-all duration-300 ${
//         scrolled
//           ? "bg-white/90 backdrop-blur-lg shadow-lg"
//           : "bg-black/30 backdrop-blur-md"
//       }`}
//     >
//       <div className="container">
//         <div className="nav-inner">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3 shrink-0">
//             <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
//               <MdCleaningServices className="text-white text-2xl" />
//             </div>

//             <div>
//               <h2
//                 className={`font-bold text-lg leading-none ${
//                   scrolled ? "text-gray-900" : "text-white"
//                 }`}
//               >
//                 Sparkle
//                 <span className="text-cyan-500">Clean</span>
//               </h2>

//               <p
//                 className={`text-[10px] tracking-[2px] ${
//                   scrolled ? "text-gray-500" : "text-gray-300"
//                 }`}
//               >
//                 PRO SERVICES
//               </p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex nav-links">
//             {navLinks.map((item) => {
//               const active = pathname === item.path;

//               return (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   className={`nav-link text-[16px] font-medium transition-all duration-300 ${
//                     active
//                       ? " text-cyan-400 "
//                       : scrolled
//                         ? "text-gray-700 hover:text-shadow-cyan-200"
//                         : "text-white hover:text-shadow-cyan-200"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* Right Section */}
//           <div className="hidden lg:flex items-center gap-3">
//             {isAuthenticated && user ? (
//               <div className="relative" ref={dropdownRef}>
//                 <button
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                   className={`flex items-center gap-3 px-3 py-2 rounded-xl transition ${
//                     scrolled
//                       ? "hover:bg-gray-100 text-gray-800"
//                       : "hover:bg-white/10 text-white"
//                   }`}
//                 >
//                   <div className="w-9 h-9 rounded-full bg-cyan-500 text-white flex items-center justify-center font-semibold">
//                     {user?.name?.charAt(0)}
//                   </div>

//                   <span className="font-medium text-sm">{user.name}</span>
//                 </button>

//                 <AnimatePresence>
//                   {dropdownOpen && (
//                     <motion.div
//                       initial={{
//                         opacity: 0,
//                         y: 10,
//                       }}
//                       animate={{
//                         opacity: 1,
//                         y: 0,
//                       }}
//                       exit={{
//                         opacity: 0,
//                         y: 10,
//                       }}
//                       className="absolute right-0 mt-3 w-60 bg-white rounded-2xl shadow-2xl border overflow-hidden"
//                     >
//                       <div className="p-4 border-b">
//                         <h3 className="font-semibold text-gray-900">
//                           {user.name}
//                         </h3>

//                         <p className="text-sm text-gray-500 truncate">
//                           {user.email}
//                         </p>
//                       </div>

//                       <div className="p-2">
//                         <Link
//                           to="/dashboard"
//                           className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-sm"
//                         >
//                           <FiUser />
//                           Dashboard
//                         </Link>

//                         {user.role === "admin" && (
//                           <Link
//                             to="/admin"
//                             className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-sm"
//                           > 
//                             <FiGrid />
//                             Admin Panel
//                           </Link>
//                         )}

//                         <button
//                           onClick={handleLogout}
//                           className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-red-500 text-sm w-full"
//                         >
//                           <FiLogOut />
//                           Logout
//                         </button>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   className={`px-5 py-2 rounded-xl text-[16px] font-medium ${
//                     scrolled
//                       ? "text-gray-700 "
//                       : "text-white "
//                   }`}
//                 >
//                   Login
//                 </Link>

//                 <Link
//                   to="/register" 
//                   className=" bg-cyan-500 hover:bg-cyan-600 text-white text-[16px]"
//                 >
//                   Get Started
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className={`lg:hidden p-2 rounded-lg ${
//               scrolled ? "text-gray-900" : "text-white"
//             }`}
//             onClick={() => setMobileMenu(true)}
//           >
//             <HiMenuAlt3 size={28} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       <AnimatePresence>
//         {mobileMenu && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/50 lg:hidden"
//               onClick={() => setMobileMenu(false)}
//             />

//             {/* Sidebar */}
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ duration: 0.3 }}
//               className="fixed top-0 right-0 h-screen w-[300px] bg-white z-50 shadow-2xl lg:hidden"
//             >
//               <div className="flex items-center justify-between p-5 border-b">
//                 <h2 className="font-bold text-xl">Menu</h2>

//                 <button onClick={() => setMobileMenu(false)}>
//                   <HiX size={28} />
//                 </button>
//               </div>

//               <div className="p-5 flex flex-col gap-2">
//                 {navLinks.map((item) => (
//                   <Link
//                     key={item.path}
//                     to={item.path}
//                     className={`px-4 py-3 rounded-xl font-medium transition ${
//                       pathname === item.path
//                         ? "bg-cyan-500 text-white"
//                         : "hover:bg-gray-100"
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}

//                 <div className="border-t my-3" />

//                 {isAuthenticated ? (
//                   <>
//                     <Link
//                       to="/dashboard"
//                       className="px-4 py-3 rounded-xl hover:bg-gray-100"
//                     >
//                       Dashboard
//                     </Link>

//                     {user?.role === "admin" && (
//                       <Link
//                         to="/admin"
//                         className="px-4 py-3 rounded-xl hover:bg-gray-100"
//                       >
//                         Admin Panel
//                       </Link>
//                     )}

//                     <button
//                       onClick={handleLogout}
//                       className="px-4 py-3 rounded-xl text-left text-red-500 hover:bg-red-50"
//                     >
//                       Logout
//                     </button>
//                   </>
//                 ) : (
//                   <div className="flex flex-col gap-3">
//                     <Link
//                       to="/login"
//                       className="w-full py-3 rounded-xl border text-center"
//                     >
//                       Login
//                     </Link>

//                     <Link
//                       to="/register"
//                       className="w-full py-3 rounded-xl bg-cyan-500 text-white text-center"
//                     >
//                       Register
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

// ################################################
// import { useEffect, useRef, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import { HiMenuAlt3, HiX } from "react-icons/hi";
// import { FiUser, FiLogOut, FiGrid } from "react-icons/fi";
// import { MdCleaningServices } from "react-icons/md";
// import useStore from "../store/useStore";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "Services", path: "/services" },
//   { name: "About", path: "/about" },
//   { name: "Contact", path: "/contact" },
// ];

// export default function Navbar() {
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const { pathname } = useLocation();
//   const navigate = useNavigate();
//   const { user, isAuthenticated, logout } = useStore();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setMobileMenu(false);
//     setDropdownOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/95 backdrop-blur-lg shadow-lg"
//           : "bg-black/30 backdrop-blur-md"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 lg:h-20">

//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3 shrink-0">
//             <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
//               <MdCleaningServices className="text-white text-xl" />
//             </div>
//             <div>
//               <h2 className={`font-bold text-lg leading-none ${scrolled ? "text-gray-900" : "text-white"}`}>
//                 Sparkle<span className="text-cyan-500">Clean</span>
//               </h2>
//               <p className={`text-[10px] tracking-[2px] uppercase ${scrolled ? "text-gray-400" : "text-gray-300"}`}>
//                 Pro Services
//               </p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-1">
//             {navLinks.map((item) => {
//               const active = pathname === item.path;
//               return (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                     active
//                       ? "text-cyan-400 bg-cyan-500/10"
//                       : scrolled
//                         ? "text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
//                         : "text-white/90 hover:text-white hover:bg-white/10"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* Right Section */}
//           <div className="hidden lg:flex items-center gap-3">
//             {isAuthenticated && user ? (
//               <div className="relative" ref={dropdownRef}>
//                 <button
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                   className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all ${
//                     scrolled
//                       ? "hover:bg-gray-100 text-gray-800"
//                       : "hover:bg-white/10 text-white"
//                   }`}
//                 >
//                   <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white flex items-center justify-center font-semibold text-sm">
//                     {user?.name?.charAt(0)?.toUpperCase()}
//                   </div>
//                   <span className="font-medium text-sm">{user.name}</span>
//                 </button>

//                 <AnimatePresence>
//                   {dropdownOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 8, scale: 0.95 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       exit={{ opacity: 0, y: 8, scale: 0.95 }}
//                       transition={{ duration: 0.15 }}
//                       className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
//                     >
//                       <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
//                         <p className="font-semibold text-gray-900 text-sm">{user.name}</p>
//                         <p className="text-xs text-gray-500 truncate mt-0.5">{user.email}</p>
//                       </div>
//                       <div className="p-1.5">
//                         <Link
//                           to="/dashboard"
//                           className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 text-sm text-gray-700 transition-colors"
//                         >
//                           <FiUser className="text-gray-400" />
//                           Dashboard
//                         </Link>
//                         {user.role === "admin" && (
//                           <Link
//                             to="/admin"
//                             className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 text-sm text-gray-700 transition-colors"
//                           >
//                             <FiGrid className="text-gray-400" />
//                             Admin Panel
//                           </Link>
//                         )}
//                         <button
//                           onClick={handleLogout}
//                           className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-50 text-red-500 text-sm w-full transition-colors"
//                         >
//                           <FiLogOut />
//                           Logout
//                         </button>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ) : (
//               <div className="flex items-center gap-2">
//                 <Link
//                   to="/login"
//                   className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
//                     scrolled
//                       ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
//                       : "text-white hover:bg-white/10"
//                   }`}
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/register"
//                   className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-sm font-semibold shadow-md shadow-cyan-500/25 transition-all hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5"
//                 >
//                   Get Started
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className={`lg:hidden p-2 rounded-xl transition-colors ${
//               scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
//             }`}
//             onClick={() => setMobileMenu(true)}
//           >
//             <HiMenuAlt3 size={24} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       <AnimatePresence>
//         {mobileMenu && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
//               onClick={() => setMobileMenu(false)}
//             />

//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white z-50 shadow-2xl lg:hidden flex flex-col"
//             >
//               {/* Sidebar Header */}
//               <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
//                     <MdCleaningServices className="text-white text-sm" />
//                   </div>
//                   <span className="font-bold text-gray-900">SparkleClean</span>
//                 </div>
//                 <button
//                   onClick={() => setMobileMenu(false)}
//                   className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-500"
//                 >
//                   <HiX size={20} />
//                 </button>
//               </div>

//               {/* Nav Links */}
//               <div className="flex-1 overflow-y-auto p-4">
//                 <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">Navigation</p>
//                 <div className="flex flex-col gap-1">
//                   {navLinks.map((item) => (
//                     <Link
//                       key={item.path}
//                       to={item.path}
//                       className={`px-4 py-3 rounded-xl font-medium text-sm transition-all ${
//                         pathname === item.path
//                           ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md"
//                           : "text-gray-700 hover:bg-gray-100"
//                       }`}
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </div>

//                 <div className="h-px bg-gray-100 my-4" />

//                 {isAuthenticated ? (
//                   <div className="flex flex-col gap-1">
//                     <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">Account</p>
//                     <Link
//                       to="/dashboard"
//                       className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-gray-100 transition-colors"
//                     >
//                       <FiUser className="text-gray-400" />
//                       Dashboard
//                     </Link>
//                     {user?.role === "admin" && (
//                       <Link
//                         to="/admin"
//                         className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-gray-100 transition-colors"
//                       >
//                         <FiGrid className="text-gray-400" />
//                         Admin Panel
//                       </Link>
//                     )}
//                     <button
//                       onClick={handleLogout}
//                       className="flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm text-red-500 hover:bg-red-50 transition-colors"
//                     >
//                       <FiLogOut />
//                       Logout
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="flex flex-col gap-3">
//                     <Link
//                       to="/login"
//                       className="w-full py-3 rounded-xl border border-gray-200 text-center text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
//                     >
//                       Login
//                     </Link>
//                     <Link
//                       to="/register"
//                       className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center text-sm font-semibold shadow-md"
//                     >
//                       Get Started Free
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }


import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useStore from "../store/useStore";

const navLinks = [
  { name: "Home",     path: "/" },
  { name: "Services", path: "/services" },
  { name: "About",    path: "/about" },
  { name: "Contact",  path: "/contact" },
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

.nb-header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 999;
  transition: background .3s, box-shadow .3s;
}
.nb-header.scrolled {
  background: rgba(255,255,255,.96);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 1px 0 #e8eef4, 0 4px 24px rgba(0,0,0,.06);
}
.nb-header.top {
  background: rgba(0,0,0,.28);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.nb-inner {
  max-width: 1280px; margin: 0 auto;
  padding: 0 24px;
  display: flex; align-items: center; justify-content: space-between;
  height: 68px;
}

/* LOGO */
.nb-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; flex-shrink: 0; }
.nb-logo-icon {
  width: 40px; height: 40px; border-radius: 12px;
  background: linear-gradient(135deg,#06b6d4,#3b82f6);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.2rem; box-shadow: 0 4px 14px rgba(6,182,212,.35);
}
.nb-logo-name { font-family:'Syne',sans-serif; font-weight:800; font-size:1.1rem; line-height:1; }
.nb-logo-name .cyan { color:#06b6d4; }
.nb-header.scrolled .nb-logo-name { color:#0f172a; }
.nb-header.top    .nb-logo-name { color:#fff; }
.nb-logo-sub { font-size:.65rem; letter-spacing:.15em; text-transform:uppercase; line-height:1; margin-top:2px; }
.nb-header.scrolled .nb-logo-sub { color:#94a3b8; }
.nb-header.top    .nb-logo-sub { color:rgba(255,255,255,.55); }

/* DESKTOP NAV */
.nb-nav { display:flex; align-items:center; gap:2px; }
.nb-nav a {
  padding: 8px 16px; border-radius:10px;
  font-family:'DM Sans',sans-serif; font-weight:500; font-size:.88rem;
  text-decoration:none; transition:all .2s;
}
.nb-header.scrolled .nb-nav a { color:#475569; }
.nb-header.scrolled .nb-nav a:hover { background:#f1f5f9; color:#0891b2; }
.nb-header.scrolled .nb-nav a.active { color:#0891b2; background:#e0f7fa; }
.nb-header.top .nb-nav a { color:rgba(255,255,255,.85); }
.nb-header.top .nb-nav a:hover { background:rgba(255,255,255,.12); color:#fff; }
.nb-header.top .nb-nav a.active { color:#67e8f9; background:rgba(6,182,212,.15); }

/* RIGHT SECTION */
.nb-right { display:flex; align-items:center; gap:8px; }
.nb-login {
  padding:8px 16px; border-radius:10px;
  font-family:'DM Sans',sans-serif; font-weight:500; font-size:.88rem;
  text-decoration:none; transition:all .2s;
}
.nb-header.scrolled .nb-login { color:#475569; }
.nb-header.scrolled .nb-login:hover { background:#f1f5f9; }
.nb-header.top .nb-login { color:rgba(255,255,255,.85); }
.nb-header.top .nb-login:hover { background:rgba(255,255,255,.1); }
.nb-cta {
  padding:9px 20px; border-radius:11px;
  background:linear-gradient(135deg,#06b6d4,#3b82f6);
  color:#fff; font-family:'Syne',sans-serif; font-weight:700; font-size:.84rem;
  text-decoration:none; transition:transform .2s, box-shadow .2s;
  box-shadow:0 4px 14px rgba(6,182,212,.32);
  white-space:nowrap;
}
.nb-cta:hover { transform:translateY(-1px); box-shadow:0 6px 20px rgba(6,182,212,.45); }

/* USER DROPDOWN */
.nb-user-btn {
  display:flex; align-items:center; gap:10px;
  padding:6px 14px 6px 6px; border-radius:12px;
  background:none; border:none; cursor:pointer; transition:background .2s;
}
.nb-header.scrolled .nb-user-btn:hover { background:#f1f5f9; }
.nb-header.top    .nb-user-btn:hover { background:rgba(255,255,255,.1); }
.nb-user-avatar {
  width:34px; height:34px; border-radius:50%;
  background:linear-gradient(135deg,#06b6d4,#3b82f6);
  color:#fff; display:flex; align-items:center; justify-content:center;
  font-family:'Syne',sans-serif; font-weight:700; font-size:.9rem; flex-shrink:0;
}
.nb-user-name { font-family:'DM Sans',sans-serif; font-weight:500; font-size:.88rem; }
.nb-header.scrolled .nb-user-name { color:#334155; }
.nb-header.top    .nb-user-name { color:#fff; }

/* DROPDOWN */
.nb-dropdown-wrap { position:relative; }
.nb-dropdown {
  position:absolute; top:calc(100% + 8px); right:0;
  width:220px; background:#fff; border-radius:16px;
  border:1px solid #e8eef4; box-shadow:0 16px 48px rgba(0,0,0,.14);
  overflow:hidden; z-index:100;
  animation: nbFadeIn .15s ease;
}
@keyframes nbFadeIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
.nb-dropdown-head { padding:14px 16px; background:#f8fafc; border-bottom:1px solid #e8eef4; }
.nb-dropdown-head p { font-family:'Syne',sans-serif; font-weight:700; font-size:.85rem; color:#0f172a; margin:0 0 2px; }
.nb-dropdown-head span { font-size:.75rem; color:#94a3b8; }
.nb-dropdown-body { padding:6px; }
.nb-dropdown-item {
  display:flex; align-items:center; gap:10px;
  padding:10px 12px; border-radius:10px;
  font-family:'DM Sans',sans-serif; font-size:.85rem; color:#334155;
  text-decoration:none; transition:background .15s; cursor:pointer;
  border:none; background:none; width:100%; text-align:left;
}
.nb-dropdown-item:hover { background:#f1f5f9; }
.nb-dropdown-item.danger { color:#dc2626; }
.nb-dropdown-item.danger:hover { background:#fee2e2; }
.nb-dropdown-icon { font-size:1rem; flex-shrink:0; }

/* MOBILE BUTTON */
.nb-menu-btn {
  display:none; padding:8px; border-radius:10px; border:none;
  background:none; cursor:pointer; font-size:1.4rem; line-height:1;
  transition:background .2s;
}
.nb-header.scrolled .nb-menu-btn { color:#334155; }
.nb-header.scrolled .nb-menu-btn:hover { background:#f1f5f9; }
.nb-header.top .nb-menu-btn { color:#fff; }
.nb-header.top .nb-menu-btn:hover { background:rgba(255,255,255,.1); }

/* MOBILE SIDEBAR */
.nb-overlay {
  position:fixed; inset:0; background:rgba(0,0,0,.5);
  backdrop-filter:blur(4px); z-index:1000;
  animation:nbFadeIn .2s ease;
}
.nb-sidebar {
  position:fixed; top:0; right:0; height:100%; width:300px; max-width:85vw;
  background:#fff; z-index:1001; display:flex; flex-direction:column;
  box-shadow:-20px 0 60px rgba(0,0,0,.15);
  animation:nbSlideIn .25s ease;
}
@keyframes nbSlideIn { from{transform:translateX(100%)} to{transform:translateX(0)} }
.nb-sidebar-head {
  display:flex; align-items:center; justify-content:space-between;
  padding:18px 20px; border-bottom:1px solid #e8eef4;
}
.nb-sidebar-logo { font-family:'Syne',sans-serif; font-weight:800; font-size:1rem; color:#0f172a; }
.nb-sidebar-logo .cyan { color:#06b6d4; }
.nb-sidebar-close {
  width:32px; height:32px; border-radius:8px; border:none;
  background:#f1f5f9; cursor:pointer; font-size:1rem; color:#475569;
  display:flex; align-items:center; justify-content:center; transition:background .2s;
}
.nb-sidebar-close:hover { background:#e2e8f0; }
.nb-sidebar-body { flex:1; overflow-y:auto; padding:16px; }
.nb-sidebar-label { font-family:'Syne',sans-serif; font-size:.7rem; font-weight:700; color:#94a3b8; text-transform:uppercase; letter-spacing:.1em; padding:0 4px; margin-bottom:8px; margin-top:4px; }
.nb-sidebar-link {
  display:flex; align-items:center; gap:10px;
  padding:12px 14px; border-radius:12px;
  font-family:'DM Sans',sans-serif; font-weight:500; font-size:.9rem;
  color:#334155; text-decoration:none; margin-bottom:4px; transition:all .2s;
}
.nb-sidebar-link:hover { background:#f1f5f9; }
.nb-sidebar-link.active { background:linear-gradient(135deg,#06b6d4,#3b82f6); color:#fff; box-shadow:0 4px 14px rgba(6,182,212,.28); }
.nb-sidebar-divider { height:1px; background:#e8eef4; margin:12px 0; }
.nb-sidebar-action {
  display:flex; align-items:center; gap:10px;
  padding:12px 14px; border-radius:12px;
  font-family:'DM Sans',sans-serif; font-weight:500; font-size:.9rem;
  color:#334155; margin-bottom:4px; transition:all .2s;
  border:none; background:none; cursor:pointer; width:100%; text-align:left;
}
.nb-sidebar-action:hover { background:#f1f5f9; }
.nb-sidebar-action.danger { color:#dc2626; }
.nb-sidebar-action.danger:hover { background:#fee2e2; }
.nb-sidebar-bottom { padding:16px; display:flex; flex-direction:column; gap:10px; }
.nb-sidebar-outline {
  display:block; text-align:center;
  padding:12px; border-radius:12px;
  border:1.5px solid #e2e8f0; color:#475569;
  font-family:'Syne',sans-serif; font-weight:600; font-size:.88rem;
  text-decoration:none; transition:all .2s;
}
.nb-sidebar-outline:hover { border-color:#06b6d4; color:#0891b2; background:#e0f7fa; }
.nb-sidebar-fill {
  display:block; text-align:center;
  padding:12px; border-radius:12px;
  background:linear-gradient(135deg,#06b6d4,#3b82f6); color:#fff;
  font-family:'Syne',sans-serif; font-weight:700; font-size:.88rem;
  text-decoration:none; box-shadow:0 4px 14px rgba(6,182,212,.3);
}

@media(max-width:1024px){
  .nb-nav,.nb-right { display:none; }
  .nb-menu-btn { display:flex; align-items:center; justify-content:center; }
}
`;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setDropdownOpen(false); }, [pathname]);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = () => { logout(); navigate("/"); };

  return (
    <>
      <style>{styles}</style>
      <header className={`nb-header ${scrolled ? "scrolled" : "top"}`}>
        <div className="nb-inner">

          {/* Logo */}
          <Link to="/" className="nb-logo">
            <div className="nb-logo-icon">🧹</div>
            <div>
              <div className="nb-logo-name">Pearl<span className="cyan">Dusting</span></div>
              <div className="nb-logo-sub">Pro Services</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="nb-nav">
            {navLinks.map(l => (
              <Link key={l.path} to={l.path} className={pathname === l.path ? "active" : ""}>{l.name}</Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="nb-right">
            {isAuthenticated && user ? (
              <div className="nb-dropdown-wrap" ref={dropdownRef}>
                <button className="nb-user-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <div className="nb-user-avatar">{user.name?.charAt(0).toUpperCase()}</div>
                  <span className="nb-user-name">{user.name}</span>
                  <span style={{fontSize:".7rem",color:"inherit",opacity:.6}}>{dropdownOpen?"▲":"▼"}</span>
                </button>
                {dropdownOpen && (
                  <div className="nb-dropdown">
                    <div className="nb-dropdown-head">
                      <p>{user.name}</p>
                      <span>{user.email}</span>
                    </div>
                    <div className="nb-dropdown-body">
                      {/* <Link to="/dashboard" className="nb-dropdown-item"><span className="nb-dropdown-icon">👤</span>Dashboard</Link> */}
                      {user.role === "admin" && (
                        <Link to="/admin" className="nb-dropdown-item"><span className="nb-dropdown-icon">⚙️</span>Admin Panel</Link>
                      )}
                      <button onClick={handleLogout} className="nb-dropdown-item danger"><span className="nb-dropdown-icon">🚪</span>Logout</button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="nb-login">Login</Link>
                <Link to="/register" className="nb-cta">Get Started</Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button className="nb-menu-btn" onClick={() => setMobileOpen(true)}>☰</button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <>
          <div className="nb-overlay" onClick={() => setMobileOpen(false)} />
          <div className="nb-sidebar">
            <div className="nb-sidebar-head">
              <div className="nb-sidebar-logo">Pearl<span className="cyan">Dusting</span> ✦</div>
              <button className="nb-sidebar-close" onClick={() => setMobileOpen(false)}>✕</button>
            </div>
            <div className="nb-sidebar-body">
              <div className="nb-sidebar-label">Navigation</div>
              {navLinks.map(l => (
                <Link key={l.path} to={l.path} className={`nb-sidebar-link${pathname === l.path ? " active" : ""}`}>{l.name}</Link>
              ))}

              {isAuthenticated && user && (
                <>
                  <div className="nb-sidebar-divider" />
                  <div className="nb-sidebar-label">Account</div>
                  <Link to="/dashboard" className="nb-sidebar-link">👤 Dashboard</Link>
                  {user.role === "admin" && (
                    <Link to="/admin" className="nb-sidebar-link">⚙️ Admin Panel</Link>
                  )}
                  <button onClick={handleLogout} className="nb-sidebar-action danger">🚪 Logout</button>
                </>
              )}
            </div>

            {!isAuthenticated && (
              <div className="nb-sidebar-bottom">
                <Link to="/login" className="nb-sidebar-outline">Login</Link>
                <Link to="/register" className="nb-sidebar-fill">Get Started Free</Link>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
