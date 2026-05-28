import { motion } from 'framer-motion';

export default function TermsConditions() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl lg:text-5xl font-bold text-white mb-4">Terms & Conditions</motion.h1>
          <p className="text-white/70">Last updated: January 2025</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12 prose prose-gray max-w-none">
          <h2 className="text-xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">By accessing and using SparkleClean Pro's services, you agree to be bound by these terms and conditions. If you do not agree, please do not use our services.</p>
          <h2 className="text-xl font-bold text-gray-900 mb-4">2. Service Booking</h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">All bookings are subject to availability. We reserve the right to decline any booking. Booking confirmations are sent via email within 30 minutes of submission. Prices shown are starting prices; final pricing may vary based on requirements.</p>
          <h2 className="text-xl font-bold text-gray-900 mb-4">3. Cancellation Policy</h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">You may cancel or reschedule a booking up to 4 hours before the scheduled time at no charge. Cancellations within 4 hours may incur a fee of up to 25% of the service cost.</p>
          <h2 className="text-xl font-bold text-gray-900 mb-4">4. Satisfaction Guarantee</h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">We offer a 100% satisfaction guarantee. If you are not satisfied with the cleaning, contact us within 24 hours and we will re-clean the unsatisfactory areas at no additional cost.</p>
          <h2 className="text-xl font-bold text-gray-900 mb-4">5. Liability</h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">SparkleClean Pro carries comprehensive insurance. In the unlikely event of damage during cleaning, we will repair or replace affected items up to the insured value. All claims must be reported within 48 hours.</p>
          <h2 className="text-xl font-bold text-gray-900 mb-4">6. Payment Terms</h2>
          <p className="text-gray-600 text-sm leading-relaxed">Payment is due upon completion of services unless otherwise agreed. We accept all major credit cards, debit cards, and digital payment methods. All prices are in USD and inclusive of applicable taxes.</p>
        </div>
      </div>
    </div>
  );
}
