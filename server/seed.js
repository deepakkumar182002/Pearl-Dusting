import 'dotenv/config';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import User from './models/User.js';
import Service from './models/Service.js';
import Review from './models/Review.js';
import ContactMessage from './models/ContactMessage.js';
import SiteSettings from './models/SiteSettings.js';

await connectDB();

// Seed data
const servicesData = [
  { title: 'Home Cleaning', description: 'Complete home cleaning service including dusting, mopping, vacuuming, and sanitization of all rooms. Our professionals use eco-friendly products to ensure a safe and spotless home.', shortDescription: 'Complete home cleaning with eco-friendly products', image: 'https://images.pexels.com/photos/6197108/pexels-photo-6197108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', price: 99, category: 'Residential', rating: 4.9, reviewCount: 234, duration: '2-3 hrs', features: ['All rooms cleaned', 'Eco-friendly products', 'Dusting & mopping', 'Bathroom sanitization'], popular: true },
  { title: 'Bathroom Cleaning', description: 'Deep bathroom cleaning including tile scrubbing, fixture polishing, grout cleaning, and complete disinfection.', shortDescription: 'Deep bathroom sanitization and scrubbing', image: 'https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', price: 49, category: 'Specialized', rating: 4.8, reviewCount: 189, duration: '1-2 hrs', features: ['Tile & grout cleaning', 'Fixture polishing', 'Disinfection', 'Mirror cleaning'] },
  { title: 'Sofa Cleaning', description: 'Professional sofa and upholstery cleaning using advanced steam cleaning technology. Removes stains, odors, and allergens effectively.', shortDescription: 'Professional steam cleaning for sofas', image: 'https://images.pexels.com/photos/7546322/pexels-photo-7546322.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', price: 79, category: 'Specialized', rating: 4.7, reviewCount: 156, duration: '1-2 hrs', features: ['Steam cleaning', 'Stain removal', 'Odor elimination', 'Allergen removal'], popular: true },
  { title: 'Kitchen Cleaning', description: 'Thorough kitchen cleaning including appliance cleaning, counter sanitization, floor mopping, and grease removal.', shortDescription: 'Complete kitchen deep cleaning & degreasing', image: 'https://images.pexels.com/photos/7046002/pexels-photo-7046002.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', price: 69, category: 'Residential', rating: 4.8, reviewCount: 203, duration: '2-3 hrs', features: ['Appliance cleaning', 'Degreasing', 'Counter sanitization', 'Floor mopping'] },
  { title: 'Office Cleaning', description: 'Professional office cleaning services for a productive workspace. Desks, floors, restrooms, and common areas.', shortDescription: 'Professional workspace cleaning solutions', image: 'https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', price: 149, category: 'Commercial', rating: 4.9, reviewCount: 178, duration: '3-4 hrs', features: ['Desk sanitization', 'Floor cleaning', 'Restroom cleaning', 'Trash removal'], popular: true },
  { title: 'Carpet Cleaning', description: 'Advanced carpet cleaning using hot water extraction and eco-friendly solutions. Removes deep stains, dirt, and allergens.', shortDescription: 'Deep carpet cleaning & stain removal', image: 'https://images.pexels.com/photos/6196677/pexels-photo-6196677.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', price: 89, category: 'Specialized', rating: 4.6, reviewCount: 142, duration: '2-3 hrs', features: ['Hot water extraction', 'Stain treatment', 'Deodorizing', 'Quick drying'] },
  { title: 'Deep Cleaning', description: 'Comprehensive deep cleaning service covering every corner of your space. Includes behind appliances, inside cabinets, baseboards, and more.', shortDescription: 'Thorough top-to-bottom deep cleaning', image: 'https://images.pexels.com/photos/6195895/pexels-photo-6195895.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', price: 199, category: 'Premium', rating: 4.9, reviewCount: 267, duration: '4-6 hrs', features: ['Every corner cleaned', 'Behind appliances', 'Inside cabinets', 'Baseboards & vents'], popular: true },
  { title: 'Water Tank Cleaning', description: 'Professional water tank cleaning and sanitization service. Ensures clean, safe drinking water.', shortDescription: 'Tank sanitization for clean water supply', image: 'https://images.pexels.com/photos/10567360/pexels-photo-10567360.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', price: 129, category: 'Specialized', rating: 4.7, reviewCount: 98, duration: '2-3 hrs', features: ['Sediment removal', 'Sanitization', 'UV treatment', 'Water testing'] },
  { title: 'AC Cleaning', description: 'Complete AC cleaning service including filter cleaning, coil washing, and drain pan sanitization.', shortDescription: 'Complete AC maintenance & cleaning', image: 'https://images.pexels.com/photos/28586197/pexels-photo-28586197.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', price: 59, category: 'Specialized', rating: 4.8, reviewCount: 176, duration: '1-2 hrs', features: ['Filter cleaning', 'Coil washing', 'Drain cleaning', 'Performance check'] },
  { title: 'Pest Control', description: 'Safe and effective pest control services for homes and offices. Eco-friendly solutions for all pest types.', shortDescription: 'Safe & effective pest elimination', image: 'https://images.pexels.com/photos/6195121/pexels-photo-6195121.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', price: 119, category: 'Specialized', rating: 4.7, reviewCount: 134, duration: '2-3 hrs', features: ['Eco-friendly solutions', 'All pest types', 'Long-lasting protection', 'Safety certified'] },
];

const reviewsData = [
  { userName: 'Sarah Johnson', userImage: 'https://images.pexels.com/photos/16869444/pexels-photo-16869444.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=100&w=100', serviceTitle: 'Home Cleaning', rating: 5, comment: 'Absolutely amazing service! The team was professional, thorough, and left my home spotless. Will definitely book again!', isApproved: true },
  { userName: 'Michael Chen', userImage: 'https://images.pexels.com/photos/29615996/pexels-photo-29615996.png?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=100&w=100', serviceTitle: 'Deep Cleaning', rating: 5, comment: "The deep cleaning service exceeded my expectations. They cleaned areas I didn't even think about. Highly recommend!", isApproved: true },
  { userName: 'Emily Rodriguez', userImage: 'https://images.pexels.com/photos/11579595/pexels-photo-11579595.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=100&w=100', serviceTitle: 'Office Cleaning', rating: 4, comment: 'Great office cleaning service. The team was punctual and efficient. Our workspace looks brand new every time.', isApproved: true },
  { userName: 'David Thompson', userImage: 'https://images.pexels.com/photos/16160801/pexels-photo-16160801.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=100&w=100', serviceTitle: 'Sofa Cleaning', rating: 5, comment: 'My sofa looks brand new after their cleaning! They removed stains I thought were permanent. Outstanding work!', isApproved: true },
  { userName: 'Lisa Martinez', userImage: 'https://images.pexels.com/photos/35490806/pexels-photo-35490806.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=100&w=100', serviceTitle: 'Kitchen Cleaning', rating: 5, comment: "Best kitchen cleaning service ever! They removed all the grease and grime. My kitchen hasn't looked this good in years.", isApproved: true },
  { userName: 'Robert Kim', userImage: 'https://images.pexels.com/photos/35490803/pexels-photo-35490803.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=100&w=100', serviceTitle: 'AC Cleaning', rating: 4, comment: 'Professional AC cleaning service. The technician was knowledgeable and now our AC runs much more efficiently.', isApproved: true },
];

const contactsData = [
  { name: 'Tom Wilson', email: 'tom@email.com', phone: '+1 555 0101', message: "I'd like to know about commercial cleaning packages for my restaurant.", status: 'new' },
  { name: 'Mary Johnson', email: 'mary@email.com', phone: '+1 555 0102', message: 'Do you offer recurring weekly cleaning services?', status: 'read' },
  { name: 'James Lee', email: 'james@email.com', phone: '+1 555 0103', message: 'Great service! I wanted to ask about your franchise opportunities.', status: 'replied' },
];

try {
  // Clear existing data
  await Promise.all([
    User.deleteMany({}),
    Service.deleteMany({}),
    Review.deleteMany({}),
    ContactMessage.deleteMany({}),
    SiteSettings.deleteMany({}),
  ]);
  console.log('🗑️  Cleared existing data');

  // Create admin user
  const admin = await User.create({
    name: 'Admin User',
    email: 'admin@sparkleclean.com',
    password: 'admin123',
    role: 'admin',
    phone: '+1 234 567 0000',
    address: 'HQ Office',
  });
  console.log(`✅ Admin user created: ${admin.email}`);

  // Create sample user
  const user = await User.create({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    role: 'user',
    phone: '+1 234 567 8900',
    address: '123 Main St',
  });
  console.log(`✅ Sample user created: ${user.email}`);

  // Seed services
  const services = await Service.insertMany(servicesData);
  console.log(`✅ ${services.length} services seeded`);

  // Seed reviews
  const reviews = await Review.insertMany(reviewsData);
  console.log(`✅ ${reviews.length} reviews seeded`);

  // Seed contacts
  const contacts = await ContactMessage.insertMany(contactsData);
  console.log(`✅ ${contacts.length} contact messages seeded`);

  // Seed site settings
  await SiteSettings.create({
    siteName: 'SparkleClean Pro',
    phone: '+1 (555) 123-4567',
    email: 'hello@sparkleclean.com',
    address: '123 Clean Street, Suite 100, New York, NY 10001',
    heroTitle: 'Premium Cleaning Services You Can Trust',
    heroSubtitle: 'Transform your space with our professional, eco-friendly cleaning services. Trusted by 10,000+ happy customers with a 98% satisfaction rate.',
    workingHours: 'Mon-Fri: 8AM - 8PM, Sat-Sun: 9AM - 6PM',
  });
  console.log('✅ Site settings seeded');

  console.log('\n🎉 Database seeded successfully!');
  console.log('📧 Admin: admin@sparkleclean.com / admin123');
  console.log('📧 User:  john@example.com / password123');
} catch (error) {
  console.error('❌ Seeding error:', error.message);
} finally {
  await mongoose.connection.close();
  console.log('🔌 Database connection closed');
  process.exit(0);
}
