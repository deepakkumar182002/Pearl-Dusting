// import { Link } from 'react-router-dom';
// import { MdCleaningServices } from 'react-icons/md';
// import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
// import { useState } from 'react';
// import toast from 'react-hot-toast';

// export default function Footer() {
//   const [email, setEmail] = useState('');

//   const handleNewsletter = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email) {
//       toast.success('Subscribed to newsletter!');
//       setEmail('');
//     }
//   };

//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       {/* Newsletter Strip */}
//       <div className="bg-gradient-to-r from-primary-600 to-accent-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//             <div>
//               <h3 className="text-xl font-bold text-white">Subscribe to Our Newsletter</h3>
//               <p className="text-white/80 text-sm">Get exclusive deals and cleaning tips delivered to your inbox</p>
//             </div>
//             <form onSubmit={handleNewsletter} className="flex w-full md:w-auto gap-2">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-white/50 flex-1 md:w-72 text-sm"
//               />
//               <button type="submit" className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors text-sm whitespace-nowrap">
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
//           {/* Company */}
//           <div>
//             <Link to="/" className="flex items-center gap-2 mb-4">
//               <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
//                 <MdCleaningServices className="text-white text-xl" />
//               </div>
//               <div>
//                 <span className="font-bold text-lg text-white">SparkleClean</span>
//                 <span className="block text-[10px] -mt-1 text-gray-500">PRO SERVICES</span>
//               </div>
//             </Link>
//             <p className="text-sm text-gray-400 leading-relaxed mb-4">
//               Premium professional cleaning services for homes and businesses. Trusted by thousands of happy customers across 15+ cities.
//             </p>
//             <div className="flex gap-3">
//               {[FiFacebook, FiTwitter, FiInstagram, FiYoutube].map((Icon, i) => (
//                 <a key={i} href="#" className="w-9 h-9 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
//                   <Icon className="text-sm" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2.5">
//               {[
//                 { name: 'Home', path: '/' },
//                 { name: 'Services', path: '/services' },
//                 { name: 'About Us', path: '/about' },
//                 { name: 'Contact', path: '/contact' },
//                 { name: 'Book Now', path: '/services' },
//               ].map((link) => (
//                 <li key={link.name}>
//                   <Link to={link.path} className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Legal */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Legal</h4>
//             <ul className="space-y-2.5">
//               {[
//                 { name: 'Privacy Policy', path: '/privacy' },
//                 { name: 'Terms & Conditions', path: '/terms' },
//                 { name: 'FAQ', path: '/#faq' },
//                 { name: 'Login', path: '/login' },
//                 { name: 'Register', path: '/register' },
//               ].map((link) => (
//                 <li key={link.name}>
//                   <Link to={link.path} className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Contact Us</h4>
//             <ul className="space-y-3">
//               <li className="flex items-start gap-3">
//                 <FiMapPin className="text-primary-400 mt-0.5 flex-shrink-0" />
//                 <span className="text-sm text-gray-400">123 Clean Street, Suite 100, New York, NY 10001</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <FiPhone className="text-primary-400 flex-shrink-0" />
//                 <span className="text-sm text-gray-400">+1 (555) 123-4567</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <FiMail className="text-primary-400 flex-shrink-0" />
//                 <span className="text-sm text-gray-400">hello@sparkleclean.com</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
//           <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} SparkleClean Pro. All rights reserved.</p>
//           <p className="text-sm text-gray-500">Made with ❤️ for a cleaner world</p>
//         </div>
//       </div>
//     </footer>
//   );
// }


// import { Link } from 'react-router-dom';
// import { MdCleaningServices } from 'react-icons/md';
// import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';
// import { useState } from 'react';
// import toast from 'react-hot-toast';

// export default function Footer() {
//   const [email, setEmail] = useState('');

//   const handleNewsletter = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email) {
//       toast.success('Subscribed to newsletter!');
//       setEmail('');
//     }
//   };

//   return (
//     <footer className="bg-gray-950 text-gray-400">


//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

//           {/* Brand */}
//           <div className="sm:col-span-2 lg:col-span-1">
//             <Link to="/" className="inline-flex items-center gap-2.5 mb-5">
//               <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
//                 <MdCleaningServices className="text-white text-xl" />
//               </div>
//               <div>
//                 <span className="font-bold text-base text-white">SparkleClean</span>
//                 <span className="block text-[10px] text-gray-500 tracking-[2px] uppercase -mt-0.5">Pro Services</span>
//               </div>
//             </Link>
//             <p className="text-sm text-gray-500 leading-relaxed mb-6">
//               Premium professional cleaning services for homes and businesses. Trusted by thousands of happy customers across 15+ cities.
//             </p>
//             <div className="flex gap-2.5">
//               {[FiFacebook, FiTwitter, FiInstagram, FiYoutube].map((Icon, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className="w-9 h-9 bg-gray-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
//                 >
//                   <Icon className="text-sm text-gray-400 hover:text-white" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
//             <ul className="space-y-3">
//               {[
//                 { name: 'Home', path: '/' },
//                 { name: 'Services', path: '/services' },
//                 { name: 'About Us', path: '/about' },
//                 { name: 'Contact', path: '/contact' },
//                 { name: 'Book Now', path: '/services' },
//               ].map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.path}
//                     className="text-sm text-gray-500 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-cyan-400 transition-colors" />
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Legal */}
//           <div>
//             <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Legal</h4>
//             <ul className="space-y-3">
//               {[
//                 { name: 'Privacy Policy', path: '/privacy' },
//                 { name: 'Terms & Conditions', path: '/terms' },
//                 { name: 'FAQ', path: '/#faq' },
//                 { name: 'Login', path: '/login' },
//                 // { name: 'Register', path: '/register' },
//               ].map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.path}
//                     className="text-sm text-gray-500 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-cyan-400 transition-colors" />
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact Us</h4>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
//                   <FiMapPin className="text-cyan-400 text-sm" />
//                 </div>
//                 <span className="text-sm text-gray-500 leading-relaxed">123 Clean Street, Suite 100, New York, NY 10001</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
//                   <FiPhone className="text-cyan-400 text-sm" />
//                 </div>
//                 <span className="text-sm text-gray-500">+1 (555) 123-4567</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
//                   <FiMail className="text-cyan-400 text-sm" />
//                 </div>
//                 <span className="text-sm text-gray-500">hello@sparkleclean.com</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800/60">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
//           <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} SparkleClean Pro. All rights reserved.</p>
//           <p className="text-xs text-gray-600">Made with ❤️ for a cleaner world</p>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { Link } from 'react-router-dom';
import { MdCleaningServices } from 'react-icons/md';
import {
  FiFacebook, FiTwitter, FiInstagram, FiYoutube,
  FiMail, FiPhone, FiMapPin, FiArrowRight, FiChevronRight
} from 'react-icons/fi';
import { useState } from 'react';
import toast from 'react-hot-toast';

const socialLinks = [
  { Icon: FiFacebook, href: '#', label: 'Facebook' },
  { Icon: FiTwitter, href: '#', label: 'Twitter' },
  { Icon: FiInstagram, href: '#', label: 'Instagram' },
  { Icon: FiYoutube, href: '#', label: 'YouTube' },
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Book Now', path: '/services' },
];

const legalLinks = [
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms & Conditions', path: '/terms' },
  { name: 'FAQ', path: '/#faq' },
  { name: 'Login', path: '/login' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    // Simulate async (replace with real API call if needed)
    await new Promise((r) => setTimeout(r, 800));
    toast.success('Successfully subscribed to newsletter!');
    setEmail('');
    setLoading(false);
  };

  return (
    <footer className="bg-[#050d18] text-gray-400 relative overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />



      {/* Main Footer Grid */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 sm:p-10 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-11 h-11 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-shadow">
                <MdCleaningServices className="text-white text-xl" />
              </div>
              <div>
                <span className="block font-bold text-base text-white leading-tight">SparkleClean</span>
                <span className="block text-[9px] text-gray-500 tracking-[3px] uppercase">Pro Services</span>
              </div>
            </Link>

            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
              Premium professional cleaning services for homes and businesses. Trusted by thousands of happy customers across 15+ cities.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2.5">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800/80 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-md hover:shadow-cyan-500/20 group"
                >
                  <Icon className="text-sm text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-cyan-400 transition-colors group"
                  >
                    <FiChevronRight className="text-xs text-gray-700 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-cyan-400 transition-colors group"
                  >
                    <FiChevronRight className="text-xs text-gray-700 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiMapPin className="text-cyan-400 text-sm" />
                </div>
                <span className="text-sm text-gray-500 leading-relaxed">
                  123 Clean Street, Suite 100,<br />New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <FiPhone className="text-cyan-400 text-sm" />
                </div>
                <a
                  href="tel:+15551234567"
                  className="text-sm text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <FiMail className="text-cyan-400 text-sm" />
                </div>
                <a
                  href="mailto:hello@sparkleclean.com"
                  className="text-sm text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  hello@sparkleclean.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-gray-800/50 ">
        <div className="max-w-7xl mx-auto pt-2 pb-2 px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-600 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Pearl Dusting Cleaning Services
          </p>
          <a href="https://www.kamwale.tech" target="_blank" className="text-xs text-gray-600 hover:text-cyan-400 transition-colors hover:underline ">
            Developed by Kamwale.tech
          </a>
        </div>
      </div>
    </footer>
  );
}
