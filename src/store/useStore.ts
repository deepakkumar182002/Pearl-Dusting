import { create } from 'zustand';
import { User, Booking, ContactMessage, Review, Service, SiteSettings } from '../types';
import { serviceApi, userApi, bookingApi, reviewApi, contactApi, settingsApi } from '../api/api';

// Helper to normalize MongoDB docs (map _id to id)
const normalize = <T extends { _id?: string; id?: string }>(doc: T): T & { id: string } => ({
  ...doc,
  id: doc._id || doc.id || '',
});

interface AppState {
  // Auth
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;

  // Services
  services: Service[];
  loading: boolean;
  error: string | null;
  fetchServices: () => Promise<void>;
  addService: (service: Omit<Service, 'id'>) => Promise<void>;
  updateService: (id: string, updates: Partial<Service>) => Promise<void>;
  deleteService: (id: string) => Promise<void>;

  // Bookings
  bookings: Booking[];
  fetchBookings: () => Promise<void>;
  fetchUserBookings: () => Promise<void>;
  addBooking: (booking: Omit<Booking, 'id' | 'userId' | 'userName' | 'userEmail' | 'createdAt' | 'status'>) => Promise<void>;
  updateBookingStatus: (id: string, status: Booking['status']) => Promise<void>;
  cancelBooking: (id: string) => Promise<void>;

  // Reviews
  reviews: Review[];
  fetchReviews: () => Promise<void>;
  fetchAllReviews: () => Promise<void>;
  addReview: (review: object) => Promise<void>;
  toggleReviewApproval: (id: string) => Promise<void>;
  deleteReview: (id: string) => Promise<void>;

  // Contacts
  contacts: ContactMessage[];
  fetchContacts: () => Promise<void>;
  addContact: (contact: { name: string; email: string; phone?: string; message: string }) => Promise<void>;
  updateContactStatus: (id: string, status: ContactMessage['status']) => Promise<void>;
  deleteContact: (id: string) => Promise<void>;

  // Users (admin)
  users: User[];
  fetchUsers: () => Promise<void>;

  // Settings
  settings: SiteSettings | null;
  fetchSettings: () => Promise<void>;
  updateSettings: (data: Partial<SiteSettings>) => Promise<void>;

  // UI
  bookingModalOpen: boolean;
  selectedService: Service | null;
  openBookingModal: (service: Service) => void;
  closeBookingModal: () => void;

  // App Init
  initializeApp: () => Promise<void>;
}

const useStore = create<AppState>((set, get) => ({
  // ── Auth ──────────────────────────────────────────────────────────────────
  user: null,
  isAuthenticated: false,
  token: localStorage.getItem('token'),

  login: async (email, password) => {
    try {
      const data = await userApi.login(email, password);
      const user: User = {
        id: data._id,
        _id: data._id,
        name: data.name,
        email: data.email,
        role: data.role,
        phone: data.phone,
        address: data.address,
        createdAt: data.createdAt || new Date().toISOString(),
      };
      localStorage.setItem('token', data.token);
      set({ user, isAuthenticated: true, token: data.token });
      return true;
    } catch {
      return false;
    }
  },

  register: async (name, email, password) => {
    try {
      const data = await userApi.register(name, email, password);
      const user: User = {
        id: data._id,
        _id: data._id,
        name: data.name,
        email: data.email,
        role: data.role,
        phone: data.phone || '',
        createdAt: data.createdAt || new Date().toISOString(),
      };
      localStorage.setItem('token', data.token);
      set({ user, isAuthenticated: true, token: data.token });
      return true;
    } catch {
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, isAuthenticated: false, token: null });
  },

  // ── Services ──────────────────────────────────────────────────────────────
  services: [],
  loading: false,
  error: null,

  fetchServices: async () => {
    try {
      set({ loading: true });
      const data = await serviceApi.getAll();
      const services = data.map(normalize);
      set({ services, loading: false });
    } catch (err: unknown) {
      set({ loading: false, error: err instanceof Error ? err.message : 'Failed to fetch services' });
    }
  },

  addService: async (serviceData) => {
    const data = await serviceApi.create(serviceData);
    set((state) => ({ services: [normalize(data), ...state.services] }));
  },

  updateService: async (id, updates) => {
    const data = await serviceApi.update(id, updates);
    set((state) => ({
      services: state.services.map((s) => (s.id === id || s._id === id) ? normalize(data) : s),
    }));
  },

  deleteService: async (id) => {
    await serviceApi.delete(id);
    set((state) => ({
      services: state.services.filter((s) => s.id !== id && s._id !== id),
    }));
  },

  // ── Bookings ──────────────────────────────────────────────────────────────
  bookings: [],

  fetchBookings: async () => {
    try {
      const data = await bookingApi.getAll();
      set({ bookings: data.map(normalize) });
    } catch { /* admin only */ }
  },

  fetchUserBookings: async () => {
    try {
      const data = await bookingApi.getUserBookings();
      set({ bookings: data.map(normalize) });
    } catch { /* ignore */ }
  },

  addBooking: async (bookingData) => {
    const data = await bookingApi.create(bookingData);
    set((state) => ({ bookings: [normalize(data), ...state.bookings] }));
  },

  updateBookingStatus: async (id, status) => {
    const data = await bookingApi.updateStatus(id, status);
    set((state) => ({
      bookings: state.bookings.map((b) => (b.id === id || b._id === id) ? normalize(data) : b),
    }));
  },

  cancelBooking: async (id) => {
    const data = await bookingApi.cancel(id);
    set((state) => ({
      bookings: state.bookings.map((b) => (b.id === id || b._id === id) ? normalize(data) : b),
    }));
  },

  // ── Reviews ───────────────────────────────────────────────────────────────
  reviews: [],

  fetchReviews: async () => {
    try {
      const data = await reviewApi.getApproved();
      set({ reviews: data.map(normalize) });
    } catch { /* ignore */ }
  },

  fetchAllReviews: async () => {
    try {
      const data = await reviewApi.getAll();
      set({ reviews: data.map(normalize) });
    } catch { /* admin only */ }
  },

  addReview: async (reviewData) => {
    const data = await reviewApi.create(reviewData);
    set((state) => ({ reviews: [normalize(data), ...state.reviews] }));
  },

  toggleReviewApproval: async (id) => {
    const data = await reviewApi.toggleApproval(id);
    set((state) => ({
      reviews: state.reviews.map((r) => (r.id === id || r._id === id) ? normalize(data) : r),
    }));
  },

  deleteReview: async (id) => {
    await reviewApi.delete(id);
    set((state) => ({
      reviews: state.reviews.filter((r) => r.id !== id && r._id !== id),
    }));
  },

  // ── Contacts ──────────────────────────────────────────────────────────────
  contacts: [],

  fetchContacts: async () => {
    try {
      const data = await contactApi.getAll();
      set({ contacts: data.map(normalize) });
    } catch { /* admin only */ }
  },

  addContact: async (contactData) => {
    await contactApi.create(contactData);
    // No need to update local state for public submission
  },

  updateContactStatus: async (id, status) => {
    const data = await contactApi.updateStatus(id, status);
    set((state) => ({
      contacts: state.contacts.map((c) => (c.id === id || c._id === id) ? normalize(data) : c),
    }));
  },

  deleteContact: async (id) => {
    await contactApi.delete(id);
    set((state) => ({
      contacts: state.contacts.filter((c) => c.id !== id && c._id !== id),
    }));
  },

  // ── Users ─────────────────────────────────────────────────────────────────
  users: [],

  fetchUsers: async () => {
    try {
      const data = await userApi.getAll();
      const users = data.map((u: User & { _id?: string }) => normalize({ ...u, id: u._id || u.id || '' }));
      set({ users });
    } catch { /* admin only */ }
  },

  // ── Settings ──────────────────────────────────────────────────────────────
  settings: null,

  fetchSettings: async () => {
    try {
      const data = await settingsApi.get();
      set({ settings: data });
    } catch { /* ignore */ }
  },

  updateSettings: async (settingsData) => {
    const data = await settingsApi.update(settingsData);
    set({ settings: data });
  },

  // ── UI ─────────────────────────────────────────────────────────────────────
  bookingModalOpen: false,
  selectedService: null,
  openBookingModal: (service) => set({ bookingModalOpen: true, selectedService: service }),
  closeBookingModal: () => set({ bookingModalOpen: false, selectedService: null }),

  // ── App Init ──────────────────────────────────────────────────────────────
  initializeApp: async () => {
    const { fetchServices, fetchReviews, fetchSettings } = get();
    await Promise.allSettled([fetchServices(), fetchReviews(), fetchSettings()]);
  },
}));

export default useStore;
