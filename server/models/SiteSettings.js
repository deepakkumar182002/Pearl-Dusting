import mongoose from 'mongoose';

const siteSettingsSchema = new mongoose.Schema({
  siteName: { type: String, default: 'SparkleClean Pro' },
  phone: { type: String, default: '+1 (555) 123-4567' },
  email: { type: String, default: 'hello@sparkleclean.com' },
  address: { type: String, default: '123 Clean Street, Suite 100, New York, NY 10001' },
  heroTitle: { type: String, default: 'Premium Cleaning Services You Can Trust' },
  heroSubtitle: { type: String, default: 'Transform your space with our professional, eco-friendly cleaning services. Trusted by 10,000+ happy customers.' },
  heroImage: { type: String, default: '' },
  aboutImage: { type: String, default: '' },
  logo: { type: String, default: '' },
  workingHours: { type: String, default: 'Mon-Fri: 8AM - 8PM, Sat-Sun: 9AM - 6PM' },
}, { timestamps: true });

const SiteSettings = mongoose.model('SiteSettings', siteSettingsSchema);
export default SiteSettings;
