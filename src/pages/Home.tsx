// import { Link } from 'react-router-dom';
// import { ArrowRight, BadgeCheck, ChevronDown, Leaf, Settings2, Shield, ShieldCheck, Star } from 'lucide-react';

// const stats = [
//   { value: '15,000+', label: 'Happy Clients' },
//   { value: '12+', label: 'Years Experience' },
//   { value: '50+', label: 'Expert Cleaners' },
//   { value: '99.9%', label: 'Satisfaction' },
// ];

// const services = [
//   {
//     title: 'Residential Bliss',
//     price: 'From $99',
//     rating: '4.9',
//     description:
//       'Transform your home into a sanctuary of cleanliness. Comprehensive dusting, vacuuming, and sanitization using safe, eco-friendly products.',
//   },
//   {
//     title: 'Corporate Shine',
//     price: 'Custom Quote',
//     rating: '5.0',
//     description:
//       'Elevate your workspace with reliable, thorough office cleaning for a healthy, productive environment.',
//   },
//   {
//     title: 'Deep Restoration',
//     price: 'From $199',
//     rating: '4.8',
//     description:
//       'An intensive cleaning overhaul targeting grime, allergens, and neglected areas for a full reset.',
//   },
// ];

// const featureCards = [
//   {
//     icon: Leaf,
//     title: 'Eco-Friendly Products',
//     description:
//       'We use non-toxic, biodegradable cleaning solutions that are safe for your family, pets, and the planet.',
//     className: 'md:col-span-2 bg-slate-800/50 rounded-2xl p-8 border border-slate-700 flex flex-col justify-center relative overflow-hidden',
//     iconClassName: 'text-emerald-500 w-6 h-6',
//     iconWrapClassName: 'w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6',
//   },
//   {
//     icon: BadgeCheck,
//     title: 'Vetted Professionals',
//     description: 'Every team member undergoes rigorous background checks and extensive training.',
//     className: 'bg-slate-800/50 rounded-2xl p-8 border border-slate-700 flex flex-col justify-center relative overflow-hidden',
//     iconClassName: 'text-indigo-400 w-5 h-5',
//     iconWrapClassName: 'w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4',
//   },
//   {
//     icon: Settings2,
//     title: 'Customized Plans',
//     description: 'Flexible scheduling and tailored checklists to meet your specific needs and budget.',
//     className: 'bg-slate-800/50 rounded-2xl p-8 border border-slate-700 flex flex-col justify-center relative overflow-hidden',
//     iconClassName: 'text-indigo-400 w-5 h-5',
//     iconWrapClassName: 'w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4',
//   },
// ];

// const faqs = [
//   {
//     question: 'What products do you use?',
//     answer:
//       'We use a curated selection of eco-friendly, non-toxic, and biodegradable cleaning solutions. They are effective against dirt and germs while being safe for children, pets, and the environment.',
//   },
//   {
//     question: 'Are you insured?',
//     answer:
//       'Yes, SparkleClean Pro is fully insured and bonded. This provides peace of mind for both our clients and our staff.',
//   },
//   {
//     question: 'How do I cancel?',
//     answer:
//       'We require a 24-hour notice for cancellations or rescheduling to avoid a cancellation fee. You can manage appointments through your account or by contacting support.',
//   },
// ];

// function Hero() {
//   return (
//     <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-24 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
//       <div className="lg:w-1/2 flex flex-col items-start gap-6 z-10">
//         <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
//           Spotless Spaces, Sustainable Soul.
//         </h1>
//         <p className="text-lg text-slate-500 max-w-xl font-medium">
//           Experience the ultimate premium eco-friendly cleaning service for your home and office. We
//           blend meticulous care with sustainable practices for a truly refreshing environment.
//         </p>
//         <div className="flex flex-wrap items-center gap-4 mt-2">
//           <Link
//             to="/services"
//             className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:bg-indigo-700 transition-colors flex items-center gap-2"
//           >
//             Book Your Clean
//             <ArrowRight className="w-4 h-4" />
//           </Link>
//           <Link
//             to="/services"
//             className="bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:bg-slate-50 transition-colors"
//           >
//             Our Services
//           </Link>
//         </div>
//         <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-slate-200 w-full">
//           <div className="flex items-center gap-2">
//             <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
//               <ShieldCheck className="text-emerald-700 w-3 h-3" />
//             </div>
//             <span className="text-sm font-medium text-slate-600">Eco-Certified</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
//               <Shield className="text-indigo-700 w-3 h-3" />
//             </div>
//             <span className="text-sm font-medium text-slate-600">Insured & Bonded</span>
//           </div>
//         </div>
//       </div>
//       <div className="lg:w-1/2 relative w-full h-[400px] lg:h-[500px] bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
//         <img
//           alt="Living room"
//           className="w-full h-full object-cover rounded-xl"
//           src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBoYOXwhVUNW8mMb0X_7Ifw1ECb24Vid0JUZUNuWi1sX2iF5XK2ZzgUO305FYnGLYwMszP0SPFlq9nDH8vZew-rf5Kyk2gJW3KNBCHvaapN43TWfCC7K5O6z1n0yx14z_DtB2268dCoSWCnBcx7J_x-rKsv4LibX5Vd9CN-MqODJAsSy0Kbb2Th6Y9FB_KJZmqiLBEqH2JBLkaGMhOvLTkbiANkLBRawvbnLVzS3r9_FbgvyQODD2trS6quEea50fFawxR75CdztZH"
//         />
//       </div>
//     </section>
//   );
// }

// function StatsSection() {
//   return (
//     <section className="bg-white border-y border-slate-200 py-12">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {stats.map((stat) => (
//             <div key={stat.label} className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
//               <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
//               <div className="mt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ServicesSection() {
//   return (
//     <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto" id="services">
//       <div className="text-center mb-12 max-w-2xl mx-auto">
//         <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Premium Services</h2>
//         <p className="text-slate-500 font-medium">
//           Tailored cleaning solutions for every environment, delivered with meticulous attention to detail.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {services.map((service) => (
//           <div key={service.title} className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
//             <div className="relative h-48 overflow-hidden bg-slate-100">
//               <img
//                 alt={service.title}
//                 className="w-full h-full object-cover"
//                 src="https://images.pexels.com/photos/6197108/pexels-photo-6197108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400"
//               />
//               <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
//                 {service.price}
//               </div>
//             </div>
//             <div className="p-6 flex flex-col grow">
//               <div className="flex justify-between items-start mb-3">
//                 <h3 className="font-bold text-slate-900 text-lg">{service.title}</h3>
//                 <div className="flex items-center text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
//                   <Star className="w-3 h-3 fill-emerald-600 mr-1" />
//                   <span className="text-[10px] font-bold">{service.rating}</span>
//                 </div>
//               </div>
//               <p className="text-sm text-slate-500 font-medium mb-6 grow">{service.description}</p>
//               <button className="w-full bg-slate-50 border border-slate-200 text-slate-700 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-colors">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function FeaturesSection() {
//   return (
//     <section className="bg-[#0F172A] py-20">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-white mb-4">The SparkleClean Difference</h2>
//           <p className="text-slate-400 font-medium max-w-2xl mx-auto">We go beyond surface-level cleaning to deliver peace of mind.</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {featureCards.map((feature) => (
//             <div key={feature.title} className={feature.className}>
//               <div className="relative z-10">
//                 <div className={feature.iconWrapClassName}>
//                   <feature.icon className={feature.iconClassName} />
//                 </div>
//                 <h3 className="font-bold text-white text-lg mb-2">{feature.title}</h3>
//                 <p className="text-sm text-slate-400 font-medium">{feature.description}</p>
//               </div>
//             </div>
//           ))}
//           <div className="md:col-span-2 bg-indigo-600 rounded-2xl p-0 shadow-sm flex flex-col md:flex-row overflow-hidden relative">
//             <div className="p-8 md:w-1/2 flex flex-col justify-center z-10">
//               <h3 className="font-bold text-white text-xl mb-2">Meet the Team</h3>
//               <p className="text-sm text-indigo-100 font-medium mb-6">Dedicated professionals who take pride in making your space shine.</p>
//               <button className="bg-white text-indigo-600 w-fit px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:bg-slate-50 transition-colors">
//                 Join Our Team
//               </button>
//             </div>
//             <div className="md:w-1/2 relative h-48 md:h-auto">
//               <img
//                 alt="Team member"
//                 className="w-full h-full object-cover"
//                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGQmeOEyJGcQzLiLYzjRlxylP1chW2jo6eyYKuY0ZRRj1N11gHnA6VSkIMK0cYwpfIBX3salf0mOpRvxq0oV7NHoo6SKEeQw52GBgI47PclU7PKe5j3QYFuQnNXuPX661E-IYnoMppPyFS2ebH6K37rpi6HGoyjmwbBNKcQIE93st57JYAuLPmvebijh_AKrDuMjLq9jwINFwTviU_LL5SdIfyku0p0MSt1Dm38OsDP4YH28_Q2_RJsk9TNoJ7yLnoarHSf0JNF9PT"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function FAQSection() {
//   return (
//     <section className="py-20 px-6 lg:px-8 max-w-3xl mx-auto" id="faq">
//       <div className="text-center mb-10">
//         <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
//       </div>
//       <div className="space-y-4">
//         {faqs.map((faq) => (
//           <details key={faq.question} className="group bg-white rounded-2xl border border-slate-200 shadow-sm [&_summary::-webkit-details-marker]:hidden">
//             <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-slate-800 text-lg">
//               {faq.question}
//               <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-300 group-open:-rotate-180" />
//             </summary>
//             <div className="p-6 pt-0 text-sm text-slate-500 font-medium">{faq.answer}</div>
//           </details>
//         ))}
//       </div>
//     </section>
//   );
// }

// function CTASection() {
//   return (
//     <section className="py-24 relative overflow-hidden bg-white border-y border-slate-200">
//       <div className="absolute inset-0 bg-linear-to-b from-slate-50 to-white z-0" />
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
//         <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Ready for a Sparkle?</h2>
//         <p className="text-lg text-slate-500 font-medium mb-10 max-w-xl">
//           Transform your space into a pristine haven today. Quick booking, transparent pricing.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
//           <Link
//             to="/services"
//             className="bg-indigo-600 text-white px-8 py-3.5 rounded-lg text-sm font-semibold shadow-sm hover:bg-indigo-700 transition-colors"
//           >
//             Book Now
//           </Link>
//           <Link
//             to="/contact"
//             className="bg-white border border-slate-200 text-slate-700 px-8 py-3.5 rounded-lg text-sm font-semibold shadow-sm hover:bg-slate-50 transition-colors"
//           >
//             Get a Quote
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <StatsSection />
//       <ServicesSection />
//       <FeaturesSection />
//       <FAQSection />
//       <CTASection />
//     </>
//   );
// }


import { useMemo } from "react";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

.hp-root { font-family:'DM Sans',sans-serif; color:#1e293b; background:#fff; overflow-x:hidden; }

/* ── HERO ── */
.hp-hero { min-height:100vh; display:flex; align-items:center; background:linear-gradient(145deg,#e0f7fa 0%,#e8f4fd 42%,#f0fdf4 100%); padding:100px 24px 60px; position:relative; overflow:hidden; }
.hp-hero::before { content:''; position:absolute; top:-200px; right:-180px; width:600px; height:600px; border-radius:50%; background:radial-gradient(circle,rgba(6,182,212,.12) 0%,transparent 70%); pointer-events:none; }
.hp-hero-inner { max-width:1260px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:56px; align-items:center; position:relative; z-index:1; }
.hp-badge { display:inline-flex; align-items:center; gap:6px; background:#e0f7fa; color:#0891b2; font-family:'Syne',sans-serif; font-weight:700; font-size:.78rem; padding:6px 14px; border-radius:50px; text-transform:uppercase; letter-spacing:.07em; margin-bottom:18px; }
.hp-hero h1 { font-family:'Syne',sans-serif; font-weight:800; font-size:clamp(2.2rem,4.5vw,3.5rem); color:#0f172a; line-height:1.12; margin:0 0 18px; }
.hp-hero h1 span { background:linear-gradient(135deg,#06b6d4,#3b82f6); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.hp-sub { font-size:1.05rem; color:#64748b; line-height:1.75; margin:0 0 28px; font-weight:300; max-width:480px; }
.hp-btns { display:flex; gap:14px; flex-wrap:wrap; margin-bottom:32px; }
.hp-btn-primary { background:linear-gradient(135deg,#06b6d4,#3b82f6); color:#fff; border:none; padding:14px 28px; border-radius:14px; font-family:'Syne',sans-serif; font-weight:700; font-size:.92rem; cursor:pointer; text-decoration:none; display:inline-block; transition:transform .2s,box-shadow .2s; box-shadow:0 4px 18px rgba(6,182,212,.3); }
.hp-btn-primary:hover { transform:translateY(-2px); box-shadow:0 10px 30px rgba(6,182,212,.42); }
.hp-btn-outline { background:transparent; color:#0891b2; border:2px solid #06b6d4; padding:12px 28px; border-radius:14px; font-family:'Syne',sans-serif; font-weight:700; font-size:.92rem; cursor:pointer; text-decoration:none; display:inline-block; transition:all .2s; }
.hp-btn-outline:hover { background:#e0f7fa; }
.hp-pills { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
.hp-pill { display:flex; align-items:center; gap:8px; background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:10px 14px; font-size:.84rem; font-weight:500; color:#334155; box-shadow:0 2px 8px rgba(0,0,0,.04); }
.hp-pill-check { width:20px; height:20px; border-radius:50%; background:linear-gradient(135deg,#06b6d4,#3b82f6); display:flex; align-items:center; justify-content:center; color:#fff; font-size:.7rem; flex-shrink:0; }

/* HERO VISUAL */
.hp-visual { display:flex; flex-direction:column; gap:16px; }
.hp-visual-card { background:#fff; border-radius:22px; padding:22px; box-shadow:0 16px 50px rgba(0,0,0,.09); border:1px solid rgba(255,255,255,.7); }
.hp-visual-card-blue { background:linear-gradient(145deg,#e0f7fa,#dbeafe); }
.hp-chips { display:flex; flex-wrap:wrap; gap:8px; margin-top:8px; }
.hp-chip { background:linear-gradient(135deg,#e0f7fa,#dbeafe); color:#0891b2; font-family:'Syne',sans-serif; font-size:.76rem; font-weight:700; padding:5px 14px; border-radius:50px; }
.hp-stats-row { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
.hp-stat { background:#fff; border-radius:16px; padding:16px 12px; text-align:center; box-shadow:0 4px 16px rgba(0,0,0,.07); }
.hp-stat-num { font-family:'Syne',sans-serif; font-weight:800; font-size:1.6rem; background:linear-gradient(135deg,#06b6d4,#3b82f6); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.hp-stat-lbl { font-size:.72rem; color:#94a3b8; margin-top:3px; }
.hp-visual-title { font-family:'Syne',sans-serif; font-weight:700; font-size:1rem; color:#0f172a; margin-bottom:6px; }

/* ── STATS BAND ── */
.hp-band { background:#fff; border-top:1px solid #e8eef4; border-bottom:1px solid #e8eef4; padding:48px 24px; }
.hp-band-inner { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
.hp-band-item { background:#f8fafc; border:1px solid #e8eef4; border-radius:18px; padding:22px; text-align:center; }
.hp-band-val { font-family:'Syne',sans-serif; font-weight:800; font-size:1.9rem; color:#0f172a; }
.hp-band-lbl { font-size:.75rem; color:#94a3b8; margin-top:5px; text-transform:uppercase; letter-spacing:.08em; font-weight:500; }

/* ── SERVICES ── */
.hp-services { padding:72px 24px; background:#f8fafc; }
.hp-sec-inner { max-width:1200px; margin:0 auto; }
.hp-sec-head { text-align:center; margin-bottom:48px; }
.hp-sec-label { display:inline-block; background:#e0f7fa; color:#0891b2; font-family:'Syne',sans-serif; font-weight:700; font-size:.76rem; padding:5px 14px; border-radius:50px; text-transform:uppercase; letter-spacing:.07em; margin-bottom:12px; }
.hp-sec-head h2 { font-family:'Syne',sans-serif; font-weight:800; font-size:clamp(1.7rem,3vw,2.4rem); color:#0f172a; margin:0 0 10px; }
.hp-sec-head p { color:#64748b; font-size:.95rem; font-weight:300; max-width:520px; margin:0 auto; line-height:1.7; }
.hp-svc-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
.hp-svc-card { background:#fff; border-radius:20px; overflow:hidden; border:1px solid #e8eef4; box-shadow:0 2px 12px rgba(0,0,0,.05); transition:transform .25s,box-shadow .25s; }
.hp-svc-card:hover { transform:translateY(-6px); box-shadow:0 20px 50px rgba(8,145,178,.13); border-color:#bae6fd; }
.hp-svc-img { height:180px; object-fit:cover; width:100%; display:block; transition:transform .5s; }
.hp-svc-card:hover .hp-svc-img { transform:scale(1.06); }
.hp-svc-img-wrap { overflow:hidden; position:relative; }
.hp-svc-price { position:absolute; top:12px; right:12px; background:#fff; border-radius:10px; padding:4px 12px; font-family:'Syne',sans-serif; font-weight:700; font-size:.78rem; color:#0f172a; box-shadow:0 2px 8px rgba(0,0,0,.12); }
.hp-svc-body { padding:20px; }
.hp-svc-top { display:flex; align-items:flex-start; justify-content:space-between; margin-bottom:8px; }
.hp-svc-name { font-family:'Syne',sans-serif; font-weight:700; font-size:1.05rem; color:#0f172a; }
.hp-svc-rating { display:flex; align-items:center; gap:4px; background:#fefce8; border-radius:8px; padding:3px 8px; }
.hp-svc-rating span { font-size:.78rem; font-weight:700; color:#92400e; }
.hp-svc-desc { font-size:.84rem; color:#64748b; line-height:1.65; margin-bottom:16px; }
.hp-svc-btn { width:100%; border:1.5px solid #e2e8f0; background:#f8fafc; border-radius:10px; padding:10px; font-family:'Syne',sans-serif; font-weight:600; font-size:.83rem; color:#334155; cursor:pointer; transition:all .2s; }
.hp-svc-btn:hover { background:#e0f7fa; border-color:#06b6d4; color:#0891b2; }

/* ── FEATURES ── */
.hp-features { background:#0f172a; padding:72px 24px; }
.hp-feat-inner { max-width:1200px; margin:0 auto; }
.hp-feat-inner .hp-sec-label { background:rgba(6,182,212,.15); color:#67e8f9; }
.hp-feat-inner .hp-sec-head h2 { color:#fff; }
.hp-feat-inner .hp-sec-head p { color:#94a3b8; }
.hp-feat-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
.hp-feat-card { background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.08); border-radius:20px; padding:28px; }
.hp-feat-icon { font-size:1.8rem; margin-bottom:16px; }
.hp-feat-card h3 { font-family:'Syne',sans-serif; font-weight:700; font-size:1rem; color:#e2e8f0; margin:0 0 8px; }
.hp-feat-card p  { font-size:.84rem; color:#94a3b8; line-height:1.7; margin:0; }
.hp-feat-cta { grid-column:1/-1; background:linear-gradient(135deg,#0c4a6e,#1e40af); border:none; border-radius:20px; padding:0; overflow:hidden; display:grid; grid-template-columns:1fr 1fr; }
.hp-feat-cta-text { padding:36px; }
.hp-feat-cta-text h3 { font-family:'Syne',sans-serif; font-weight:800; font-size:1.4rem; color:#fff; margin:0 0 10px; }
.hp-feat-cta-text p  { font-size:.88rem; color:rgba(255,255,255,.7); margin:0 0 20px; line-height:1.65; }
.hp-feat-cta-btn { background:#fff; color:#1e40af; border:none; padding:12px 22px; border-radius:12px; font-family:'Syne',sans-serif; font-weight:700; font-size:.85rem; cursor:pointer; }
.hp-feat-cta-img { height:200px; }
.hp-feat-cta-img img { width:100%; height:100%; object-fit:cover; }

/* ── FAQ ── */
.hp-faq { padding:72px 24px; background:#fff; }
.hp-faq-inner { max-width:720px; margin:0 auto; }
.hp-faq-list { display:flex; flex-direction:column; gap:14px; margin-top:0; }
.hp-faq-item { background:#f8fafc; border:1px solid #e8eef4; border-radius:16px; overflow:hidden; }
.hp-faq-item summary { list-style:none; padding:18px 22px; font-family:'Syne',sans-serif; font-weight:700; font-size:.92rem; color:#0f172a; cursor:pointer; display:flex; align-items:center; justify-content:space-between; }
.hp-faq-item summary::-webkit-details-marker { display:none; }
.hp-faq-item summary::after { content:'＋'; color:#06b6d4; font-size:1.1rem; transition:transform .2s; }
.hp-faq-item[open] summary::after { content:'－'; }
.hp-faq-item p { padding:0 22px 18px; font-size:.88rem; color:#64748b; line-height:1.75; margin:0; }

/* ── CTA ── */
.hp-cta { background:linear-gradient(135deg,#0c4a6e,#1e40af); padding:72px 24px; text-align:center; }
.hp-cta-inner { max-width:640px; margin:0 auto; }
.hp-cta h2 { font-family:'Syne',sans-serif; font-weight:800; font-size:clamp(1.8rem,4vw,2.8rem); color:#fff; margin:0 0 14px; }
.hp-cta p  { color:rgba(255,255,255,.72); font-size:1rem; font-weight:300; margin:0 0 32px; line-height:1.7; }
.hp-cta-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
.hp-cta-btn-white { background:#fff; color:#1e40af; border:none; padding:14px 32px; border-radius:14px; font-family:'Syne',sans-serif; font-weight:700; font-size:.92rem; cursor:pointer; text-decoration:none; display:inline-block; transition:transform .2s; box-shadow:0 4px 18px rgba(0,0,0,.15); }
.hp-cta-btn-white:hover { transform:translateY(-2px); }
.hp-cta-btn-border { background:transparent; color:#fff; border:2px solid rgba(255,255,255,.5); padding:12px 32px; border-radius:14px; font-family:'Syne',sans-serif; font-weight:700; font-size:.92rem; cursor:pointer; text-decoration:none; display:inline-block; transition:all .2s; }
.hp-cta-btn-border:hover { background:rgba(255,255,255,.1); }

/* RESPONSIVE */
@media(max-width:1024px){
  .hp-hero-inner { grid-template-columns:1fr; }
  .hp-visual,.hp-stats-row { display:none; }
  .hp-svc-grid { grid-template-columns:1fr 1fr; }
  .hp-feat-grid { grid-template-columns:1fr 1fr; }
  .hp-feat-cta { grid-column:1/-1; }
}
@media(max-width:768px){
  .hp-band-inner { grid-template-columns:repeat(2,1fr); }
  .hp-svc-grid  { grid-template-columns:1fr; }
  .hp-feat-grid { grid-template-columns:1fr; }
  .hp-feat-cta  { grid-template-columns:1fr; }
  .hp-feat-cta-img { height:160px; }
  .hp-pills { grid-template-columns:1fr; }
}
@media(max-width:480px){
  .hp-band-inner { grid-template-columns:1fr 1fr; gap:12px; }
  .hp-hero,.hp-services,.hp-features,.hp-faq,.hp-cta { padding:52px 18px; }
}
`;

const services = [
  { title:"Home Deep Cleaning", price:"₹3,999", rating:"4.9", desc:"Complete top-to-bottom home cleaning with eco-friendly products and trained staff.", img:"https://images.pexels.com/photos/6195124/pexels-photo-6195124.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600" },
  { title:"Office Cleaning",     price:"₹6,499", rating:"4.8", desc:"Professional workspace cleaning to maintain a hygienic and productive environment.", img:"https://images.pexels.com/photos/6197108/pexels-photo-6197108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600" },
  { title:"Sofa Steam Cleaning", price:"₹2,499", rating:"4.9", desc:"Deep steam cleaning for sofas and upholstery to restore like-new freshness.", img:"https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600" },
];

const bandStats = [
  { val:"500+",  lbl:"Happy Clients" },
  { val:"8+",    lbl:"Services" },
  { val:"50+",   lbl:"Expert Cleaners" },
  { val:"99%",   lbl:"Satisfaction" },
];

const faqs = [
  { q:"How can I book a cleaning service?",   a:"You can book online through our website form, or call us directly on +91 9458606691 or +91 8796026236." },
  { q:"Do you provide same day service?",     a:"Yes, same-day service is available depending on your location and slot availability." },
  { q:"Are your cleaners verified?",          a:"All staff are trained, background-checked, and verified before joining our team." },
  { q:"What areas do you serve?",             a:"We serve across Delhi NCR including Rohini, Pitampura, Mangol Puri, and surrounding areas." },
  { q:"Do you use eco-friendly products?",    a:"Yes, we use non-toxic, eco-friendly cleaning solutions that are safe for families and pets." },
];

export default function HomePage() {
  const highlights = useMemo(() => ["Verified Staff","Same Day Service","Eco-Friendly Products","Affordable Pricing"], []);

  return (
    <>
      <style>{styles}</style>
      <div className="hp-root">

        {/* HERO */}
        <section className="hp-hero">
          <div className="hp-hero-inner">
            <div>
              <div className="hp-badge">⭐ Trusted by 500+ customers in Delhi NCR</div>
              <h1>Professional <span>Cleaning Services</span> You Can Trust</h1>
              <p className="hp-sub">Pearl Dusting provides premium home, office, bathroom, sofa, deep cleaning and sanitization services with trusted professionals across Delhi NCR.</p>
              <div className="hp-btns">
                <a href="/booking" className="hp-btn-primary">🗓 Book Cleaning</a>
                <a href="/services" className="hp-btn-outline">Explore Services →</a>
              </div>
              <div className="hp-pills">
                {highlights.map((h,i) => (
                  <div className="hp-pill" key={i}>
                    <div className="hp-pill-check">✓</div>
                    {h}
                  </div>
                ))}
              </div>
            </div>
            <div className="hp-visual">
              <div className="hp-visual-card hp-visual-card-blue">
                <div className="hp-visual-title">✨ Services We Offer</div>
                <div className="hp-chips">
                  {["🏠 Home","🏢 Office","🚿 Bathroom","🛋 Sofa","🍳 Kitchen","🪟 Windows"].map((c,i)=>(
                    <span className="hp-chip" key={i}>{c}</span>
                  ))}
                </div>
              </div>
              <div className="hp-stats-row">
                {[{n:"500+",l:"Happy Clients"},{n:"8+",l:"Services"},{n:"24/7",l:"Support"}].map((s,i)=>(
                  <div className="hp-stat" key={i}>
                    <div className="hp-stat-num">{s.n}</div>
                    <div className="hp-stat-lbl">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAND */}
        <div className="hp-band">
          <div className="hp-band-inner">
            {bandStats.map((s,i) => (
              <div className="hp-band-item" key={i}>
                <div className="hp-band-val">{s.val}</div>
                <div className="hp-band-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <section className="hp-services">
          <div className="hp-sec-inner">
            <div className="hp-sec-head">
              <span className="hp-sec-label">Our Services</span>
              <h2>Premium Cleaning Solutions</h2>
              <p>From regular home cleaning to specialized deep cleaning — we've got every corner covered.</p>
            </div>
            <div className="hp-svc-grid">
              {services.map((s,i) => (
                <div className="hp-svc-card" key={i}>
                  <div className="hp-svc-img-wrap">
                    <img className="hp-svc-img" src={s.img} alt={s.title} loading="lazy" />
                    <div className="hp-svc-price">{s.price}</div>
                  </div>
                  <div className="hp-svc-body">
                    <div className="hp-svc-top">
                      <div className="hp-svc-name">{s.title}</div>
                      <div className="hp-svc-rating"><span>★</span><span>{s.rating}</span></div>
                    </div>
                    <div className="hp-svc-desc">{s.desc}</div>
                    <button className="hp-svc-btn">Learn More →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="hp-features">
          <div className="hp-feat-inner">
            <div className="hp-sec-head">
              <span className="hp-sec-label">Why Choose Us</span>
              <h2>The Pearl Dusting Difference</h2>
              <p>We go beyond surface-level cleaning to deliver peace of mind.</p>
            </div>
            <div className="hp-feat-grid">
              {[
                {icon:"🌿",title:"Eco-Friendly Products",    desc:"Non-toxic, biodegradable solutions safe for your family, pets, and the planet."},
                {icon:"✅",title:"Verified Professionals",   desc:"Every cleaner undergoes background checks and extensive training before joining us."},
                {icon:"⚡",title:"Fast Booking Process",     desc:"Book online in minutes and get same-day confirmation from our team."},
              ].map((f,i)=>(
                <div className="hp-feat-card" key={i}>
                  <div className="hp-feat-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
              <div className="hp-feat-cta">
                <div className="hp-feat-cta-text">
                  <h3>Ready to Book a Cleaning?</h3>
                  <p>Get your space spotless today. Quick booking, transparent pricing, trusted professionals.</p>
                  <button className="hp-feat-cta-btn">Book Now →</button>
                </div>
                <div className="hp-feat-cta-img">
                  <img src="https://images.pexels.com/photos/6195072/pexels-photo-6195072.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600" alt="Cleaning team" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="hp-faq">
          <div className="hp-faq-inner">
            <div className="hp-sec-head">
              <span className="hp-sec-label">FAQ</span>
              <h2>Frequently Asked Questions</h2>
              <p>Quick answers to the most common questions we receive.</p>
            </div>
            <div className="hp-faq-list">
              {faqs.map((f,i) => (
                <details className="hp-faq-item" key={i}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="hp-cta">
          <div className="hp-cta-inner">
            <h2>Ready for a Spotless Space?</h2>
            <p>Book your cleaning in a few clicks and let our team handle the rest. Fast, affordable, and eco-friendly.</p>
            <div className="hp-cta-btns">
              <a href="/booking" className="hp-cta-btn-white">Book Now</a>
              <a href="/contact" className="hp-cta-btn-border">Get a Quote</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
