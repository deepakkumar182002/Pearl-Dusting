import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  shortDescription: { type: String, required: true },
  image: {
    type: String,
    default: 'https://images.pexels.com/photos/6197108/pexels-photo-6197108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  price: { type: Number, required: true, min: 0 },
  category: {
    type: String,
    enum: ['Residential', 'Commercial', 'Specialized', 'Premium'],
    default: 'Residential',
  },
  rating: { type: Number, default: 4.5, min: 0, max: 5 },
  reviewCount: { type: Number, default: 0 },
  duration: { type: String, default: '2-3 hrs' },
  features: [{ type: String }],
  popular: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);
export default Service;
