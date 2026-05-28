export interface User {
  id: string;
  _id?: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  phone?: string;
  address?: string;
  profileImage?: string;
  createdAt: string;
  token?: string;
}

export interface Service {
  id: string;
  _id?: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  price: number;
  category: string;
  rating: number;
  reviewCount: number;
  duration: string;
  features: string[];
  popular?: boolean;
  isActive?: boolean;
}

export interface Booking {
  id: string;
  _id?: string;
  userId: string;
  userName: string;
  userEmail: string;
  serviceId: string;
  serviceTitle: string;
  bookingDate: string;
  bookingTime: string;
  address: string;
  area: string;
  phone: string;
  cleaningType: string;
  notes: string;
  status: 'pending' | 'accepted' | 'in-progress' | 'completed' | 'cancelled';
  totalPrice: number;
  createdAt: string;
  staffGender?: string;
}

export interface Review {
  id: string;
  _id?: string;
  userId: string;
  userName: string;
  userImage: string;
  serviceId: string;
  serviceTitle: string;
  rating: number;
  comment: string;
  createdAt: string;
  isApproved?: boolean;
}

export interface ContactMessage {
  id: string;
  _id?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: string;
}

export interface SiteSettings {
  _id?: string;
  siteName: string;
  phone: string;
  email: string;
  address: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: string;
  aboutImage?: string;
  logo?: string;
  workingHours?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  beforeImage: string;
  afterImage: string;
  title: string;
  category: string;
}
