// import { motion } from 'framer-motion';

// export default function PrivacyPolicy() {
//   return (
//     <div className="pt-20 min-h-screen bg-gray-50">
//       <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-12 sm:py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl lg:text-5xl font-bold text-white mb-4">Privacy Policy</motion.h1>
//           <p className="text-white/70">Last updated: January 2025</p>
//         </div>
//       </div>
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12 prose prose-gray max-w-none">
//           <h2 className="text-xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
//           <p className="text-gray-600 mb-6 text-sm leading-relaxed">We collect information you provide directly, including your name, email address, phone number, address, and payment information when you register, book services, or contact us. We also automatically collect usage data such as IP address, browser type, and device information.</p>
//           <h2 className="text-xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
//           <p className="text-gray-600 mb-6 text-sm leading-relaxed">Your information is used to provide and improve our cleaning services, process bookings, send booking confirmations, communicate about our services, and ensure the security of our platform. We never sell your personal data to third parties.</p>
//           <h2 className="text-xl font-bold text-gray-900 mb-4">3. Data Security</h2>
//           <p className="text-gray-600 mb-6 text-sm leading-relaxed">We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your personal information. All payment data is processed through PCI-compliant payment processors.</p>
//           <h2 className="text-xl font-bold text-gray-900 mb-4">4. Cookies & Tracking</h2>
//           <p className="text-gray-600 mb-6 text-sm leading-relaxed">We use cookies and similar technologies to improve your browsing experience, analyze site traffic, and personalize content. You can manage cookie preferences through your browser settings.</p>
//           <h2 className="text-xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
//           <p className="text-gray-600 mb-6 text-sm leading-relaxed">You have the right to access, update, or delete your personal information at any time. You can also opt out of marketing communications. To exercise these rights, please contact us at privacy@sparkleclean.com.</p>
//           <h2 className="text-xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
//           <p className="text-gray-600 text-sm leading-relaxed">If you have questions about this Privacy Policy, please contact us at privacy@sparkleclean.com or call +1 (555) 123-4567.</p>
//         </div>
//       </div>
//     </div>
//   );
// }


// ─── PrivacyPolicy.jsx ───────────────────────────────────────────────────────
const legalStyles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
.legal-root { font-family:'DM Sans',sans-serif; background:#f8fafc; }
.legal-hero { background:linear-gradient(135deg,#0c4a6e,#1e40af); padding:64px 24px; text-align:center; }
.legal-hero h1 { font-family:'Syne',sans-serif; font-weight:800; font-size:clamp(1.8rem,4vw,2.8rem); color:#fff; margin:0 0 8px; }
.legal-hero p  { color:rgba(255,255,255,.65); font-size:.88rem; margin:0; }
.legal-body { max-width:860px; margin:0 auto; padding:48px 24px 80px; }
.legal-card { background:#fff; border:1px solid #e8eef4; border-radius:20px; padding:40px 44px; box-shadow:0 2px 16px rgba(0,0,0,.05); }
.legal-section { margin-bottom:32px; }
.legal-section:last-child { margin-bottom:0; }
.legal-section-num { display:inline-flex; align-items:center; justify-content:center; width:28px; height:28px; border-radius:8px; background:linear-gradient(135deg,#e0f7fa,#dbeafe); color:#0891b2; font-family:'Syne',sans-serif; font-weight:800; font-size:.8rem; margin-right:10px; flex-shrink:0; }
.legal-section h2 { font-family:'Syne',sans-serif; font-weight:800; font-size:1.05rem; color:#0f172a; margin:0 0 10px; display:flex; align-items:center; }
.legal-section p  { font-size:.9rem; color:#64748b; line-height:1.8; margin:0; font-weight:300; }
.legal-divider { height:1px; background:#f1f5f9; margin:24px 0; }
@media(max-width:600px){ .legal-card { padding:28px 20px; } .legal-hero { padding:48px 18px; } }
`;

export function PrivacyPolicy() {
  const sections = [
    { title:"Information We Collect",   body:"We collect information you provide directly — your name, email, phone number, address, and payment info when you register, book services, or contact us. We also automatically collect usage data such as IP address, browser type, and device information." },
    { title:"How We Use Your Information", body:"Your information is used to provide and improve our cleaning services, process bookings, send booking confirmations, communicate about our services, and ensure platform security. We never sell your personal data to third parties." },
    { title:"Data Security",            body:"We implement industry-standard security measures including encryption, secure servers, and regular security audits. All payment data is processed through PCI-compliant payment processors to protect your financial information." },
    { title:"Cookies & Tracking",       body:"We use cookies and similar technologies to improve your browsing experience, analyse site traffic, and personalise content. You can manage cookie preferences through your browser settings at any time." },
    { title:"Your Rights",              body:"You have the right to access, update, or delete your personal information at any time. You can also opt out of marketing communications. To exercise these rights, please contact us at pearldustingcleaningservicepv@gmail.com." },
    { title:"Contact Us",               body:"For questions about this Privacy Policy, contact us at pearldustingcleaningservicepv@gmail.com or call +91 9458606691." },
  ];
  return (
    <>
      <style>{legalStyles}</style>
      <div className="legal-root">
        <div className="legal-hero">
          <h1>Privacy Policy</h1>
          <p>Last updated: January 2025</p>
        </div>
        <div className="legal-body">
          <div className="legal-card">
            {sections.map((s,i) => (
              <div key={i}>
                <div className="legal-section">
                  <h2><span className="legal-section-num">{i+1}</span>{s.title}</h2>
                  <p>{s.body}</p>
                </div>
                {i < sections.length-1 && <div className="legal-divider" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── TermsConditions.jsx ─────────────────────────────────────────────────────
export function TermsConditions() {
  const sections = [
    { title:"Acceptance of Terms",   body:"By accessing and using Pearl Dusting Cleaning Service, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our services." },
    { title:"Service Booking",       body:"All bookings are subject to availability. We reserve the right to decline any booking. Confirmations are sent within 30 minutes of submission. Prices shown are starting prices; final pricing may vary based on property size and requirements." },
    { title:"Cancellation Policy",   body:"You may cancel or reschedule a booking up to 4 hours before the scheduled time at no charge. Cancellations within 4 hours may incur a fee of up to 25% of the service cost to cover team preparation costs." },
    { title:"Satisfaction Guarantee",body:"We offer a 100% satisfaction guarantee. If you are not satisfied, contact us within 24 hours and we will re-clean the unsatisfactory areas at no additional cost." },
    { title:"Liability",             body:"Pearl Dusting Cleaning Service carries comprehensive insurance. In the unlikely event of damage during cleaning, we will repair or replace affected items. All claims must be reported within 48 hours of service completion." },
    { title:"Payment Terms",         body:"Payment is due upon completion of services unless otherwise agreed. We accept all major payment methods including UPI, cards, and net banking. All prices are in Indian Rupees and inclusive of applicable taxes." },
  ];
  return (
    <>
      <style>{legalStyles}</style>
      <div className="legal-root">
        <div className="legal-hero">
          <h1>Terms & Conditions</h1>
          <p>Last updated: January 2025</p>
        </div>
        <div className="legal-body">
          <div className="legal-card">
            {sections.map((s,i) => (
              <div key={i}>
                <div className="legal-section">
                  <h2><span className="legal-section-num">{i+1}</span>{s.title}</h2>
                  <p>{s.body}</p>
                </div>
                {i < sections.length-1 && <div className="legal-divider" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
