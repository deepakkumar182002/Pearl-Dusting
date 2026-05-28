import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  userId: { type: String, default: '' },
  userName: { type: String, required: true },
  userImage: {
    type: String,
    default: 'https://images.pexels.com/photos/16869444/pexels-photo-16869444.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=100&w=100',
  },
  serviceId: { type: String, default: '' },
  serviceTitle: { type: String, default: '' },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  isApproved: { type: Boolean, default: false },
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);
export default Review;
