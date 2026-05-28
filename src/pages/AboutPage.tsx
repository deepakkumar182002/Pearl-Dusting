// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { FiTarget, FiEye, FiUsers, FiAward, FiCheckCircle, FiHeart } from 'react-icons/fi';
// import { MdCleaningServices } from 'react-icons/md';

// function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: '-50px' });
//   return (
//     <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className={className}>
//       {children}
//     </motion.div>
//   );
// }

// export default function AboutPage() {
//   const team = [
//     { name: 'David Park', role: 'CEO & Founder', img: 'https://images.pexels.com/photos/29615996/pexels-photo-29615996.png?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=200' },
//     { name: 'Sarah Miller', role: 'Operations Director', img: 'https://images.pexels.com/photos/16869444/pexels-photo-16869444.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=200' },
//     { name: 'James Wilson', role: 'Head of Training', img: 'https://images.pexels.com/photos/11579595/pexels-photo-11579595.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=200' },
//     { name: 'Emily Chen', role: 'Customer Success Lead', img: 'https://images.pexels.com/photos/16160801/pexels-photo-16160801.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=200' },
//   ];

//   return (
//     <div className="pt-20">
//       {/* Header */}
//       <div className="bg-gradient-to-br from-primary-600 to-accent-700 py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl lg:text-5xl font-bold text-white mb-4">About SparkleClean Pro</motion.h1>
//           <p className="text-white/70 max-w-2xl mx-auto">Dedicated to delivering premium cleaning services since 2019</p>
//         </div>
//       </div>

//       {/* Story */}
//       <section className="py-16 sm:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <AnimatedSection>
//               <img src="https://images.pexels.com/photos/6196677/pexels-photo-6196677.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800" alt="Our story" className="rounded-2xl shadow-xl w-full" loading="lazy" />
//             </AnimatedSection>
//             <AnimatedSection>
//               <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">Our Story</span>
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">From a Small Team to a Trusted Brand</h2>
//               <p className="text-gray-500 mb-4 leading-relaxed">SparkleClean Pro started in 2019 with just 3 passionate individuals who believed that everyone deserves a clean, healthy living space. Today, we've grown into a team of 50+ dedicated professionals serving 15+ cities.</p>
//               <p className="text-gray-500 leading-relaxed">Our commitment to quality, eco-friendly practices, and customer satisfaction has earned us the trust of over 10,000 happy customers. We continue to innovate and expand, always putting our customers first.</p>
//             </AnimatedSection>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-16 sm:py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { icon: FiTarget, title: 'Our Mission', desc: 'To make professional, eco-friendly cleaning services accessible and affordable for every home and business.' },
//               { icon: FiEye, title: 'Our Vision', desc: 'To become the most trusted and preferred cleaning service brand globally, setting new standards of excellence.' },
//               { icon: FiHeart, title: 'Our Values', desc: 'Integrity, quality, sustainability, and customer-centricity form the foundation of everything we do.' },
//             ].map((item, i) => (
//               <AnimatedSection key={i}>
//                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col">
//                   <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-5">
//                     <item.icon className="text-white text-2xl" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
//                   <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
//                 </div>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team */}
//       <section className="py-16 sm:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection className="text-center mb-16">
//             <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">Our Team</span>
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Leadership</h2>
//             <p className="text-gray-500 max-w-2xl mx-auto">The passionate people behind SparkleClean Pro</p>
//           </AnimatedSection>
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//             {team.map((member, i) => (
//               <AnimatedSection key={i}>
//                 <motion.div whileHover={{ y: -5 }} className="text-center group">
//                   <div className="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
//                     <img src={member.img} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
//                   </div>
//                   <h3 className="font-semibold text-gray-900">{member.name}</h3>
//                   <p className="text-sm text-gray-500">{member.role}</p>
//                 </motion.div>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-600 to-primary-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <AnimatedSection>
//             <h2 className="text-3xl font-bold text-white mb-12">What Sets Us Apart</h2>
//           </AnimatedSection>
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { icon: FiCheckCircle, title: 'Quality Assured', value: '100%' },
//               { icon: FiUsers, title: 'Expert Team', value: '50+' },
//               { icon: FiAward, title: 'Awards Won', value: '12' },
//               { icon: MdCleaningServices, title: 'Services Completed', value: '25K+' },
//             ].map((item, i) => (
//               <AnimatedSection key={i}>
//                 <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
//                   <item.icon className="text-3xl text-white/80 mx-auto mb-3" />
//                   <p className="text-3xl font-bold text-white mb-1">{item.value}</p>
//                   <p className="text-sm text-white/70">{item.title}</p>
//                 </div>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import { useRef } from "react";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

.ap-root { font-family:'DM Sans',sans-serif; color:#1e293b; background:#fff; }

/* HERO BANNER */
.ap-hero { background:linear-gradient(135deg,#0c4a6e 0%,#1e40af 55%,#0f172a 100%); padding:72px 24px; text-align:center; position:relative; overflow:hidden; }
.ap-hero::before { content:''; position:absolute; top:-120px; left:-120px; width:420px; height:420px; border-radius:50%; background:radial-gradient(circle,rgba(6,182,212,.22) 0%,transparent 70%); pointer-events:none; }
.ap-hero::after  { content:''; position:absolute; bottom:-80px; right:-80px; width:320px; height:320px; border-radius:50%; background:radial-gradient(circle,rgba(59,130,246,.18) 0%,transparent 70%); pointer-events:none; }
.ap-hero-inner { max-width:720px; margin:0 auto; position:relative; z-index:1; }
.ap-hero h1 { font-family:'Syne',sans-serif; font-weight:800; font-size:clamp(2rem,5vw,3.2rem); color:#fff; margin:0 0 14px; line-height:1.15; }
.ap-hero p  { color:rgba(255,255,255,.72); font-size:1.05rem; font-weight:300; margin:0; }

/* STORY */
.ap-story { background:#fff; padding:72px 24px; }
.ap-story-inner { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:56px; align-items:center; }
.ap-story img { width:100%; height:400px; object-fit:cover; border-radius:20px; box-shadow:0 24px 60px rgba(0,0,0,.1); }
.ap-story-tag { display:inline-block; background:#e0f7fa; color:#0891b2; font-family:'Syne',sans-serif; font-weight:700; font-size:.76rem; padding:5px 14px; border-radius:50px; text-transform:uppercase; letter-spacing:.06em; margin-bottom:16px; }
.ap-story h2 { font-family:'Syne',sans-serif; font-weight:800; font-size:clamp(1.6rem,3vw,2.3rem); color:#0f172a; margin:0 0 20px; line-height:1.2; }
.ap-story p  { font-size:.95rem; color:#64748b; line-height:1.8; margin:0 0 14px; font-weight:300; }

/* MISSION */
.ap-mission { background:#f8fafc; padding:72px 24px; }
.ap-mission-inner { max-width:1200px; margin:0 auto; }
.ap-section-head { text-align:center; margin-bottom:48px; }
.ap-section-head h2 { font-family:'Syne',sans-serif; font-weight:800; font-size:clamp(1.6rem,3vw,2.2rem); color:#0f172a; margin:0 0 12px; }
.ap-section-head p { color:#64748b; font-size:.95rem; font-weight:300; }
.ap-mv-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
.ap-mv-card { background:#fff; border-radius:20px; padding:32px 28px; border:1px solid #e8eef4; box-shadow:0 2px 12px rgba(0,0,0,.04); }
.ap-mv-icon { width:52px; height:52px; border-radius:14px; background:linear-gradient(135deg,#e0f7fa,#dbeafe); display:flex; align-items:center; justify-content:center; font-size:1.5rem; margin-bottom:20px; }
.ap-mv-card h3 { font-family:'Syne',sans-serif; font-weight:700; font-size:1.1rem; color:#0f172a; margin:0 0 10px; }
.ap-mv-card p  { font-size:.875rem; color:#64748b; line-height:1.75; margin:0; }

/* STATS BANNER */
.ap-stats { background:linear-gradient(135deg,#0c4a6e,#1e40af); padding:64px 24px; }
.ap-stats-inner { max-width:1200px; margin:0 auto; text-align:center; }
.ap-stats h2 { font-family:'Syne',sans-serif; font-weight:800; font-size:clamp(1.6rem,3vw,2.2rem); color:#fff; margin:0 0 48px; }
.ap-stats-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
.ap-stat-box { background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.15); border-radius:18px; padding:28px 20px; }
.ap-stat-icon { font-size:1.8rem; margin-bottom:10px; }
.ap-stat-val { font-family:'Syne',sans-serif; font-weight:800; font-size:2rem; color:#fff; margin:0 0 6px; }
.ap-stat-lbl { font-size:.8rem; color:rgba(255,255,255,.65); font-weight:400; }

/* TEAM */
.ap-team { background:#fff; padding:72px 24px; }
.ap-team-inner { max-width:1200px; margin:0 auto; }
.ap-team-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:28px; margin-top:0; }
.ap-member { text-align:center; }
.ap-member-img { width:120px; height:120px; border-radius:20px; overflow:hidden; margin:0 auto 14px; box-shadow:0 8px 28px rgba(0,0,0,.1); transition:transform .25s; }
.ap-member:hover .ap-member-img { transform:translateY(-5px); }
.ap-member-img img { width:100%; height:100%; object-fit:cover; }
.ap-member h3 { font-family:'Syne',sans-serif; font-weight:700; font-size:.95rem; color:#0f172a; margin:0 0 4px; }
.ap-member p  { font-size:.8rem; color:#64748b; margin:0; }

/* RESPONSIVE */
@media(max-width:960px){
  .ap-story-inner { grid-template-columns:1fr; gap:32px; }
  .ap-story img { height:280px; }
  .ap-mv-grid { grid-template-columns:1fr 1fr; }
  .ap-stats-grid { grid-template-columns:repeat(2,1fr); }
  .ap-team-grid { grid-template-columns:repeat(2,1fr); }
}
@media(max-width:600px){
  .ap-mv-grid,.ap-team-grid { grid-template-columns:1fr; }
  .ap-stats-grid { grid-template-columns:1fr 1fr; gap:14px; }
  .ap-hero,.ap-story,.ap-mission,.ap-stats,.ap-team { padding:52px 18px; }
}
`;

export default function AboutPage() {
  const team = [
    { name:"Rahul Sharma", role:"CEO & Founder",            img:"https://images.pexels.com/photos/29615996/pexels-photo-29615996.png?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200" },
    { name:"Priya Mehta",   role:"Operations Director",     img:"https://images.pexels.com/photos/16869444/pexels-photo-16869444.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200" },
    { name:"Amit Singh",    role:"Head of Training",        img:"https://images.pexels.com/photos/11579595/pexels-photo-11579595.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200" },
    { name:"Neha Gupta",    role:"Customer Success Lead",   img:"https://images.pexels.com/photos/16160801/pexels-photo-16160801.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200" },
  ];

  const mvCards = [
    { icon:"🎯", title:"Our Mission",  desc:"To make professional, eco-friendly cleaning services accessible and affordable for every home and business across Delhi NCR." },
    { icon:"👁️", title:"Our Vision",   desc:"To become the most trusted cleaning service brand in India, setting new standards of excellence and customer satisfaction." },
    { icon:"❤️", title:"Our Values",   desc:"Integrity, quality, sustainability, and customer-centricity form the foundation of everything we do every single day." },
  ];

  const stats = [
    { icon:"✅", val:"100%", lbl:"Quality Assured" },
    { icon:"👥", val:"50+",  lbl:"Expert Team" },
    { icon:"🏆", val:"12",   lbl:"Awards Won" },
    { icon:"🧹", val:"25K+", lbl:"Services Done" },
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="ap-root">

        {/* HERO */}
        <div className="ap-hero">
          <div className="ap-hero-inner">
            <h1>About Pearl Dusting<br/>Cleaning Service</h1>
            <p>Dedicated to delivering premium cleaning services since 2019 across Delhi NCR</p>
          </div>
        </div>

        {/* STORY */}
        <section className="ap-story">
          <div className="ap-story-inner">
            <img src="https://images.pexels.com/photos/6196677/pexels-photo-6196677.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800" alt="Our story" loading="lazy" />
            <div>
              <span className="ap-story-tag">Our Story</span>
              <h2>From a Small Team to a Trusted Brand in Delhi NCR</h2>
              <p>Pearl Dusting Cleaning Service started with just 3 passionate individuals who believed that everyone deserves a clean, healthy living space. Today, we've grown into a team of 50+ dedicated professionals serving clients across Delhi NCR.</p>
              <p>Our commitment to quality, eco-friendly practices, and customer satisfaction has earned us the trust of over 500 happy customers. We continue to innovate and expand, always putting our customers first.</p>
            </div>
          </div>
        </section>

        {/* MISSION / VISION / VALUES */}
        <section className="ap-mission">
          <div className="ap-mission-inner">
            <div className="ap-section-head">
              <h2>Our Mission, Vision & Values</h2>
              <p>The principles that guide every cleaning service we provide</p>
            </div>
            <div className="ap-mv-grid">
              {mvCards.map((c,i) => (
                <div className="ap-mv-card" key={i}>
                  <div className="ap-mv-icon">{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="ap-stats">
          <div className="ap-stats-inner">
            <h2>What Sets Us Apart</h2>
            <div className="ap-stats-grid">
              {stats.map((s,i) => (
                <div className="ap-stat-box" key={i}>
                  <div className="ap-stat-icon">{s.icon}</div>
                  <div className="ap-stat-val">{s.val}</div>
                  <div className="ap-stat-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="ap-team">
          <div className="ap-team-inner">
            <div className="ap-section-head">
              <span className="ap-story-tag">Our Team</span>
              <h2>Meet the Leadership</h2>
              <p>The passionate people behind Pearl Dusting Cleaning Service</p>
            </div>
            <div className="ap-team-grid">
              {team.map((m,i) => (
                <div className="ap-member" key={i}>
                  <div className="ap-member-img"><img src={m.img} alt={m.name} loading="lazy" /></div>
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
