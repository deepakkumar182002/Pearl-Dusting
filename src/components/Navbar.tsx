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


import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiUser, FiLogOut, FiGrid } from "react-icons/fi";
import { MdCleaningServices } from "react-icons/md";
import useStore from "../store/useStore";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenu(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg"
          : "bg-black/30 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
              <MdCleaningServices className="text-white text-xl" />
            </div>
            <div>
              <h2 className={`font-bold text-lg leading-none ${scrolled ? "text-gray-900" : "text-white"}`}>
                Sparkle<span className="text-cyan-500">Clean</span>
              </h2>
              <p className={`text-[10px] tracking-[2px] uppercase ${scrolled ? "text-gray-400" : "text-gray-300"}`}>
                Pro Services
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const active = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? "text-cyan-400 bg-cyan-500/10"
                      : scrolled
                        ? "text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated && user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all ${
                    scrolled
                      ? "hover:bg-gray-100 text-gray-800"
                      : "hover:bg-white/10 text-white"
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white flex items-center justify-center font-semibold text-sm">
                    {user?.name?.charAt(0)?.toUpperCase()}
                  </div>
                  <span className="font-medium text-sm">{user.name}</span>
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                    >
                      <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                        <p className="font-semibold text-gray-900 text-sm">{user.name}</p>
                        <p className="text-xs text-gray-500 truncate mt-0.5">{user.email}</p>
                      </div>
                      <div className="p-1.5">
                        <Link
                          to="/dashboard"
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 text-sm text-gray-700 transition-colors"
                        >
                          <FiUser className="text-gray-400" />
                          Dashboard
                        </Link>
                        {user.role === "admin" && (
                          <Link
                            to="/admin"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 text-sm text-gray-700 transition-colors"
                          >
                            <FiGrid className="text-gray-400" />
                            Admin Panel
                          </Link>
                        )}
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-50 text-red-500 text-sm w-full transition-colors"
                        >
                          <FiLogOut />
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    scrolled
                      ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-sm font-semibold shadow-md shadow-cyan-500/25 transition-all hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileMenu(true)}
          >
            <HiMenuAlt3 size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setMobileMenu(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white z-50 shadow-2xl lg:hidden flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                    <MdCleaningServices className="text-white text-sm" />
                  </div>
                  <span className="font-bold text-gray-900">SparkleClean</span>
                </div>
                <button
                  onClick={() => setMobileMenu(false)}
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-500"
                >
                  <HiX size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex-1 overflow-y-auto p-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">Navigation</p>
                <div className="flex flex-col gap-1">
                  {navLinks.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                        pathname === item.path
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="h-px bg-gray-100 my-4" />

                {isAuthenticated ? (
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">Account</p>
                    <Link
                      to="/dashboard"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <FiUser className="text-gray-400" />
                      Dashboard
                    </Link>
                    {user?.role === "admin" && (
                      <Link
                        to="/admin"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <FiGrid className="text-gray-400" />
                        Admin Panel
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm text-red-500 hover:bg-red-50 transition-colors"
                    >
                      <FiLogOut />
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <Link
                      to="/login"
                      className="w-full py-3 rounded-xl border border-gray-200 text-center text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center text-sm font-semibold shadow-md"
                    >
                      Get Started Free
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
