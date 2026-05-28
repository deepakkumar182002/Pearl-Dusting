// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiX, FiCalendar, FiClock, FiMapPin, FiUser, FiPhone, FiMail, FiFileText } from 'react-icons/fi';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import useStore from '../store/useStore';

// const timeSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
// const cleaningTypes = ['Standard', 'Deep', 'Premium', 'Move-in/Move-out'];

// export default function BookingModal() {
//   const { bookingModalOpen, closeBookingModal, selectedService, addBooking, isAuthenticated } = useStore();
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [form, setForm] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     address: '',
//     area: '',
//     date: '',
//     time: '',
//     cleaningType: 'Standard',
//     notes: '',
//     staffGender: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!isAuthenticated) {
//       toast.error('Please login to book a service');
//       closeBookingModal();
//       navigate('/login');
//       return;
//     }

//     if (!form.fullName || !form.email || !form.phone || !form.address || !form.date || !form.time) {
//       toast.error('Please fill in all required fields');
//       return;
//     }

//     setIsLoading(true);
//     try {
//       await addBooking({
//         serviceId: selectedService?.id || selectedService?._id || '',
//         serviceTitle: selectedService?.title || '',
//         bookingDate: form.date,
//         bookingTime: form.time,
//         address: form.address,
//         area: form.area,
//         phone: form.phone,
//         cleaningType: form.cleaningType,
//         notes: form.notes,
//         totalPrice: selectedService?.price || 0,
//         staffGender: form.staffGender,
//         userName: form.fullName,
//         userEmail: form.email,
//       } as Omit<import('../types').Booking, 'id' | 'userId' | 'createdAt' | 'status'>);
//       toast.success("Booking submitted! We'll confirm within 30 minutes.");
//       closeBookingModal();
//       setForm({ fullName: '', email: '', phone: '', address: '', area: '', date: '', time: '', cleaningType: 'Standard', notes: '', staffGender: '' });
//     } catch {
//       toast.error('Failed to submit booking. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <AnimatePresence>
//       {bookingModalOpen && selectedService && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
//           onClick={closeBookingModal}
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0, y: 20 }}
//             animate={{ scale: 1, opacity: 1, y: 0 }}
//             exit={{ scale: 0.9, opacity: 0, y: 20 }}
//             onClick={(e) => e.stopPropagation()}
//             className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
//           >
//             {/* Header */}
//             <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
//               <div>
//                 <h2 className="text-xl font-bold text-gray-900">Book Service</h2>
//                 <p className="text-sm text-gray-500">{selectedService.title} — Starting at ${selectedService.price}</p>
//               </div>
//               <button onClick={closeBookingModal} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//                 <FiX className="text-gray-500 text-xl" />
//               </button>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="p-6 space-y-4">
//               {!isAuthenticated && (
//                 <div className="bg-primary-50 border border-primary-100 rounded-xl p-3 text-sm text-primary-700">
//                   💡 <strong>Tip:</strong> Login to auto-fill your details and track bookings from your dashboard.
//                 </div>
//               )}

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
//                   <div className="relative">
//                     <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                     <input
//                       name="fullName"
//                       value={form.fullName}
//                       onChange={handleChange}
//                       placeholder="John Doe"
//                       className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
//                   <div className="relative">
//                     <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                     <input
//                       type="email"
//                       name="email"
//                       value={form.email}
//                       onChange={handleChange}
//                       placeholder="john@example.com"
//                       className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
//                   <div className="relative">
//                     <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                     <input
//                       name="phone"
//                       value={form.phone}
//                       onChange={handleChange}
//                       placeholder="+1 234 567 8900"
//                       className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Area/Location</label>
//                   <div className="relative">
//                     <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                     <input
//                       name="area"
//                       value={form.area}
//                       onChange={handleChange}
//                       placeholder="Downtown, NYC"
//                       className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Full Address *</label>
//                 <input
//                   name="address"
//                   value={form.address}
//                   onChange={handleChange}
//                   placeholder="123 Main Street, Apt 4B, New York, NY 10001"
//                   className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
//                   required
//                 />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
//                   <div className="relative">
//                     <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                     <input
//                       type="date"
//                       name="date"
//                       value={form.date}
//                       onChange={handleChange}
//                       min={new Date().toISOString().split('T')[0]}
//                       className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Time *</label>
//                   <div className="relative">
//                     <FiClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                     <select
//                       name="time"
//                       value={form.time}
//                       onChange={handleChange}
//                       className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm appearance-none"
//                       required
//                     >
//                       <option value="">Select time</option>
//                       {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Cleaning Type</label>
//                   <select
//                     name="cleaningType"
//                     value={form.cleaningType}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
//                   >
//                     {cleaningTypes.map(t => <option key={t} value={t}>{t}</option>)}
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Staff Gender</label>
//                   <select
//                     name="staffGender"
//                     value={form.staffGender}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
//                   >
//                     <option value="">No preference</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
//                 <div className="relative">
//                   <FiFileText className="absolute left-3 top-3 text-gray-400" />
//                   <textarea
//                     name="notes"
//                     value={form.notes}
//                     onChange={handleChange}
//                     rows={3}
//                     placeholder="Any special instructions or requirements..."
//                     className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm resize-none"
//                   />
//                 </div>
//               </div>

//               {/* Summary */}
//               <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
//                 <h4 className="text-sm font-semibold text-gray-900 mb-2">Booking Summary</h4>
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-gray-500">{selectedService.title}</span>
//                   <span className="font-semibold text-gray-900">${selectedService.price}</span>
//                 </div>
//                 <div className="flex items-center justify-between text-sm mt-1">
//                   <span className="text-gray-500">Duration</span>
//                   <span className="text-gray-700">{selectedService.duration}</span>
//                 </div>
//                 <hr className="my-2 border-gray-200" />
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm font-semibold text-gray-900">Total</span>
//                   <span className="text-lg font-bold text-primary-600">${selectedService.price}</span>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full py-3.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all hover:-translate-y-0.5 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
//               >
//                 {isLoading ? 'Submitting...' : 'Confirm Booking'}
//               </button>
//             </form>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiX, FiCalendar, FiClock, FiMapPin, FiUser,
  FiPhone, FiMail, FiFileText, FiCheckCircle
} from 'react-icons/fi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];
const cleaningTypes = ['Standard', 'Deep', 'Premium', 'Move-in/Move-out'];

const inputClass =
  "w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent focus:bg-white text-sm text-gray-800 placeholder-gray-400 transition-all";

const selectClass =
  "w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent focus:bg-white text-sm text-gray-800 transition-all appearance-none";

export default function BookingModal() {
  const { bookingModalOpen, closeBookingModal, selectedService, addBooking, isAuthenticated } = useStore();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    area: '',
    date: '',
    time: '',
    cleaningType: 'Standard',
    notes: '',
    staffGender: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAuthenticated) {
      toast.error('Please login to book a service');
      closeBookingModal();
      navigate('/login');
      return;
    }

    if (!form.fullName || !form.email || !form.phone || !form.address || !form.date || !form.time) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    try {
      await addBooking({
        serviceId: selectedService?.id || selectedService?._id || '',
        serviceTitle: selectedService?.title || '',
        bookingDate: form.date,
        bookingTime: form.time,
        address: form.address,
        area: form.area,
        phone: form.phone,
        cleaningType: form.cleaningType,
        notes: form.notes,
        totalPrice: selectedService?.price || 0,
        staffGender: form.staffGender,
        userName: form.fullName,
        userEmail: form.email,
      } as Omit<import('../types').Booking, 'id' | 'userId' | 'createdAt' | 'status'>);
      toast.success("Booking submitted! We'll confirm within 30 minutes.");
      closeBookingModal();
      setForm({
        fullName: '', email: '', phone: '', address: '', area: '',
        date: '', time: '', cleaningType: 'Standard', notes: '', staffGender: ''
      });
    } catch {
      toast.error('Failed to submit booking. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {bookingModalOpen && selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeBookingModal}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Book a Service</h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  {selectedService.title}
                  <span className="ml-2 text-cyan-600 font-semibold">${selectedService.price}</span>
                </p>
              </div>
              <button
                onClick={closeBookingModal}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-400 hover:text-gray-600"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">

              {!isAuthenticated && (
                <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-3.5 text-sm text-cyan-700 flex items-start gap-2.5">
                  <span className="text-lg">💡</span>
                  <p><strong>Tip:</strong> Login to auto-fill your details and track bookings from your dashboard.</p>
                </div>
              )}

              {/* Personal Info */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Personal Info</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name <span className="text-red-400">*</span></label>
                    <div className="relative">
                      <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                      <input name="fullName" value={form.fullName} onChange={handleChange}
                        placeholder="John Doe" className={inputClass} required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email <span className="text-red-400">*</span></label>
                    <div className="relative">
                      <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="john@example.com" className={inputClass} required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone <span className="text-red-400">*</span></label>
                    <div className="relative">
                      <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                      <input name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+1 234 567 8900" className={inputClass} required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Area / Locality</label>
                    <div className="relative">
                      <FiMapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                      <input name="area" value={form.area} onChange={handleChange}
                        placeholder="Downtown, NYC" className={inputClass} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Address <span className="text-red-400">*</span></label>
                <div className="relative">
                  <FiMapPin className="absolute left-3.5 top-3.5 text-gray-400 text-sm" />
                  <input
                    name="address" value={form.address} onChange={handleChange}
                    placeholder="123 Main Street, Apt 4B, New York, NY 10001"
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent focus:bg-white text-sm text-gray-800 placeholder-gray-400 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Schedule */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Schedule</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Date <span className="text-red-400">*</span></label>
                    <div className="relative">
                      <FiCalendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                      <input
                        type="date" name="date" value={form.date} onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={inputClass} required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Time <span className="text-red-400">*</span></label>
                    <div className="relative">
                      <FiClock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                      <select name="time" value={form.time} onChange={handleChange}
                        className={selectClass} required>
                        <option value="">Select time</option>
                        {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Preferences</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Cleaning Type</label>
                    <select name="cleaningType" value={form.cleaningType} onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm text-gray-800 transition-all">
                      {cleaningTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Staff Gender Preference</label>
                    <select name="staffGender" value={form.staffGender} onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm text-gray-800 transition-all">
                      <option value="">No preference</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Notes</label>
                <div className="relative">
                  <FiFileText className="absolute left-3.5 top-3.5 text-gray-400 text-sm" />
                  <textarea
                    name="notes" value={form.notes} onChange={handleChange}
                    rows={3}
                    placeholder="Any special instructions or requirements..."
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent focus:bg-white text-sm text-gray-800 placeholder-gray-400 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Booking Summary */}
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-100">
                <div className="flex items-center gap-2 mb-3">
                  <FiCheckCircle className="text-cyan-500" />
                  <h4 className="text-sm font-semibold text-gray-900">Booking Summary</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{selectedService.title}</span>
                    <span className="font-semibold text-gray-900">${selectedService.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Duration</span>
                    <span className="text-gray-700">{selectedService.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Type</span>
                    <span className="text-gray-700">{form.cleaningType}</span>
                  </div>
                  <div className="h-px bg-cyan-200 my-1" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">Total</span>
                    <span className="text-xl font-bold text-cyan-600">${selectedService.price}</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 hover:shadow-lg hover:shadow-cyan-500/30 transition-all hover:-translate-y-0.5 text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </span>
                ) : 'Confirm Booking'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
