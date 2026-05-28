import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  serviceId: { type: String, default: '' },
  serviceTitle: { type: String, required: true },
  bookingDate: { type: String, required: true },
  bookingTime: { type: String, required: true },
  address: { type: String, required: true },
  area: { type: String, default: '' },
  phone: { type: String, required: true },
  cleaningType: { type: String, default: 'Standard' },
  notes: { type: String, default: '' },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'in-progress', 'completed', 'cancelled'],
    default: 'pending',
  },
  totalPrice: { type: Number, required: true, min: 0 },
  staffGender: { type: String, default: '' },
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
