// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';
// import toast from 'react-hot-toast';
// import useStore from '../store/useStore';

// export default function ContactPage() {
//   const { addContact, settings } = useStore();
//   const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.name || !form.email || !form.message) {
//       toast.error('Please fill all required fields');
//       return;
//     }
//     setIsLoading(true);
//     try {
//       await addContact(form);
//       toast.success("Message sent successfully! We'll get back to you soon.");
//       setForm({ name: '', email: '', phone: '', message: '' });
//     } catch {
//       toast.error('Failed to send message. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="pt-20">
//       <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl lg:text-5xl font-bold text-white mb-4">Get In Touch</motion.h1>
//           <p className="text-white/70 max-w-2xl mx-auto">Have questions? We'd love to hear from you. Send us a message!</p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
//         <div className="grid lg:grid-cols-12 gap-8">
//           {/* Contact Info */}
//           <div className="space-y-6 lg:col-span-4">
//             {[
//               { icon: FiMapPin, title: 'Visit Us', lines: [settings?.address || '123 Clean Street, Suite 100, New York, NY 10001'] },
//               { icon: FiPhone, title: 'Call Us', lines: [settings?.phone || '+1 (555) 123-4567'] },
//               { icon: FiMail, title: 'Email Us', lines: [settings?.email || 'hello@sparkleclean.com', 'support@sparkleclean.com'] },
//               { icon: FiClock, title: 'Working Hours', lines: [settings?.workingHours ? settings.workingHours.split(',')[0] : 'Mon-Fri: 8AM - 8PM', settings?.workingHours ? settings.workingHours.split(',')[1]?.trim() : 'Sat-Sun: 9AM - 6PM'] },
//             ].map((item, i) => (
//               <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
//                 <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <item.icon className="text-primary-600 text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
//                   {item.lines.map((line, j) => (
//                     <p key={j} className="text-sm text-gray-500 break-words">{line}</p>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Contact Form */}
//           <div className="lg:col-span-8">
//             <motion.form
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               onSubmit={handleSubmit}
//               className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
//             >
//               <h2 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h2>
//               <div className="grid sm:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
//                   <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm" required />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
//                   <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm" required />
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
//                 <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+1 234 567 8900" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm" />
//               </div>
//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
//                 <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={5} placeholder="Tell us how we can help..." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm resize-none" required />
//               </div>
//               <button type="submit" disabled={isLoading} className="px-8 py-3.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
//                 <FiSend /> {isLoading ? 'Sending...' : 'Send Message'}
//               </button>
//             </motion.form>

//             {/* Map */}
//             <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-64">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1&output=embed"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Location"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

.cp-root { font-family:'DM Sans',sans-serif; color:#1e293b; background:#f8fafc; }

/* HERO */
.cp-hero { background:linear-gradient(135deg,#0c4a6e 0%,#1e40af 55%,#0f172a 100%); padding:72px 24px; text-align:center; position:relative; overflow:hidden; }
.cp-hero::before { content:''; position:absolute; top:-100px; right:-100px; width:360px; height:360px; border-radius:50%; background:radial-gradient(circle,rgba(6,182,212,.2) 0%,transparent 70%); pointer-events:none; }
.cp-hero-inner { max-width:680px; margin:0 auto; position:relative; z-index:1; }
.cp-hero h1 { font-family:'Syne',sans-serif; font-weight:800; font-size:clamp(2rem,5vw,3.2rem); color:#fff; margin:0 0 12px; line-height:1.15; }
.cp-hero p  { color:rgba(255,255,255,.72); font-size:1.05rem; font-weight:300; margin:0; }

/* BODY */
.cp-body { max-width:1200px; margin:0 auto; padding:56px 24px 80px; display:grid; grid-template-columns:380px 1fr; gap:36px; align-items:start; }

/* INFO CARDS */
.cp-info { display:flex; flex-direction:column; gap:16px; }
.cp-info-card { display:flex; gap:16px; align-items:flex-start; background:#fff; border:1px solid #e8eef4; border-radius:18px; padding:22px 20px; box-shadow:0 2px 10px rgba(0,0,0,.04); }
.cp-info-icon { width:44px; height:44px; border-radius:12px; background:linear-gradient(135deg,#e0f7fa,#dbeafe); display:flex; align-items:center; justify-content:center; font-size:1.2rem; flex-shrink:0; }
.cp-info-card h3 { font-family:'Syne',sans-serif; font-weight:700; font-size:.88rem; color:#0f172a; margin:0 0 5px; }
.cp-info-card p  { font-size:.83rem; color:#64748b; line-height:1.65; margin:0; }

/* FORM PANEL */
.cp-form-wrap { background:#fff; border-radius:22px; padding:36px; border:1px solid #e8eef4; box-shadow:0 4px 24px rgba(0,0,0,.06); }
.cp-form-wrap h2 { font-family:'Syne',sans-serif; font-weight:800; font-size:1.3rem; color:#0f172a; margin:0 0 24px; }
.cp-form-row { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:16px; }
.cp-form-group { display:flex; flex-direction:column; gap:6px; margin-bottom:16px; }
.cp-form-group label { font-family:'Syne',sans-serif; font-size:.78rem; font-weight:700; color:#334155; }
.cp-form-group input,
.cp-form-group textarea { border:1.5px solid #e2e8f0; border-radius:12px; padding:12px 16px; font-family:'DM Sans',sans-serif; font-size:.9rem; color:#1e293b; outline:none; transition:border-color .2s; background:#fff; resize:none; }
.cp-form-group input:focus,
.cp-form-group textarea:focus { border-color:#06b6d4; box-shadow:0 0 0 3px rgba(6,182,212,.1); }
.cp-submit-btn { display:inline-flex; align-items:center; gap:8px; background:linear-gradient(135deg,#06b6d4,#3b82f6); color:#fff; border:none; padding:14px 28px; border-radius:14px; font-family:'Syne',sans-serif; font-weight:700; font-size:.92rem; cursor:pointer; transition:transform .2s,box-shadow .2s; box-shadow:0 4px 16px rgba(6,182,212,.25); }
.cp-submit-btn:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(6,182,212,.4); }
.cp-submit-btn:disabled { opacity:.65; cursor:not-allowed; transform:none; }

/* MAP */
.cp-map { margin-top:24px; border-radius:18px; overflow:hidden; border:1px solid #e8eef4; height:220px; }
.cp-map iframe { width:100%; height:100%; border:0; display:block; }

/* SUCCESS */
.cp-success { background:#e0f7fa; border:1px solid #a5f3fc; border-radius:14px; padding:16px 20px; color:#0891b2; font-family:'Syne',sans-serif; font-weight:600; font-size:.9rem; margin-top:16px; text-align:center; }

/* RESPONSIVE */
@media(max-width:960px){
  .cp-body { grid-template-columns:1fr; }
  .cp-info { display:grid; grid-template-columns:1fr 1fr; }
}
@media(max-width:600px){
  .cp-info { grid-template-columns:1fr; }
  .cp-form-row { grid-template-columns:1fr; }
  .cp-form-wrap { padding:24px 18px; }
  .cp-hero { padding:52px 18px; }
}
`;

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", message:"" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setSent(true);
    setForm({ name:"", email:"", phone:"", message:"" });
    setLoading(false);
  };

  const infoCards = [
    { icon:"📍", title:"Visit Us",       text:"B-1137-38, Near Kali Mata Mandir,\nMangol Puri, New Delhi – 110083" },
    { icon:"📞", title:"Call Us",        text:"+91 9458606691\n+91 8796026236" },
    { icon:"✉️", title:"Email Us",       text:"pearldustingcleaningservicepv\n@gmail.com" },
    { icon:"⏱",  title:"Working Hours", text:"Mon–Sat: 8 AM – 8 PM\nSunday: 9 AM – 5 PM" },
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="cp-root">

        {/* HERO */}
        <div className="cp-hero">
          <div className="cp-hero-inner">
            <h1>Get In Touch</h1>
            <p>Have questions? We'd love to hear from you. Send us a message and we'll respond shortly!</p>
          </div>
        </div>

        {/* BODY */}
        <div className="cp-body">

          {/* Info */}
          <div className="cp-info">
            {infoCards.map((c,i) => (
              <div className="cp-info-card" key={i}>
                <div className="cp-info-icon">{c.icon}</div>
                <div>
                  <h3>{c.title}</h3>
                  <p style={{whiteSpace:"pre-line"}}>{c.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div>
            <div className="cp-form-wrap">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="cp-form-row">
                  <div className="cp-form-group" style={{marginBottom:0}}>
                    <label>Full Name *</label>
                    <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name" required />
                  </div>
                  <div className="cp-form-group" style={{marginBottom:0}}>
                    <label>Email *</label>
                    <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com" required />
                  </div>
                </div>
                <div className="cp-form-group">
                  <label>Phone</label>
                  <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="+91 XXXXXXXXXX" />
                </div>
                <div className="cp-form-group">
                  <label>Message *</label>
                  <textarea rows={5} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us how we can help..." required />
                </div>
                <button type="submit" className="cp-submit-btn" disabled={loading}>
                  {loading ? "Sending…" : "✉️  Send Message"}
                </button>
              </form>
              {sent && <div className="cp-success">✅ Message sent! We'll contact you shortly.</div>}
            </div>

            {/* Map */}
            <div className="cp-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.2!2d77.1!3d28.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQzJzEyLjAiTiA3N8KwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1&output=embed"
                title="Pearl Dusting Location"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
