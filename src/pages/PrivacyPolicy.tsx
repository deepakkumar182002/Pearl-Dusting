import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl lg:text-5xl font-bold text-white mb-4">Privacy Policy</motion.h1>
          <p className="text-white/70">Last updated: January 2025</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12 prose prose-gray max-w-none">
          <h2 className="text-xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">We collect information you provide directly, including your name, email address, phone number, address, and payment information when you register, book services, or contact us. We also automatically collect usage data such as IP address, browser type, and device information.</p>
          <h2 className="text-xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">Your information is used to provide and improve our cleaning services, process bookings, send booking confirmations, communicate about our services, and ensure the security of our platform. We never sell your personal data to third parties.</p>
          <h2 className="text-xl font-bold text-gray-900 mb-4">3. Data Security</h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your personal information. All payment data is processed through PCI-compliant payment processors.</p>
          <h2 className="text-xl font-bold text-gray-900 mb-4">4. Cookies & Tracking</h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">We use cookies and similar technologies to improve your browsing experience, analyze site traffic, and personalize content. You can manage cookie preferences through your browser settings.</p>
          <h2 className="text-xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">You have the right to access, update, or delete your personal information at any time. You can also opt out of marketing communications. To exercise these rights, please contact us at privacy@sparkleclean.com.</p>
          <h2 className="text-xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
          <p className="text-gray-600 text-sm leading-relaxed">If you have questions about this Privacy Policy, please contact us at privacy@sparkleclean.com or call +1 (555) 123-4567.</p>
        </div>
      </div>
    </div>
  );
}
