import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
});

// Attach JWT token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

// ── Services ──────────────────────────────────────────────────────────────────
export const serviceApi = {
  getAll: () => api.get('/services').then((r) => r.data),
  getById: (id: string) => api.get(`/services/${id}`).then((r) => r.data),
  create: (data: object) => api.post('/services', data).then((r) => r.data),
  update: (id: string, data: object) => api.put(`/services/${id}`, data).then((r) => r.data),
  delete: (id: string) => api.delete(`/services/${id}`).then((r) => r.data),
};

// ── Users ─────────────────────────────────────────────────────────────────────
export const userApi = {
  login: (email: string, password: string) =>
    api.post('/users/login', { email, password }).then((r) => r.data),
  register: (name: string, email: string, password: string, phone?: string) =>
    api.post('/users/register', { name, email, password, phone }).then((r) => r.data),
  getProfile: () => api.get('/users/profile').then((r) => r.data),
  getAll: () => api.get('/users').then((r) => r.data),
  delete: (id: string) => api.delete(`/users/${id}`).then((r) => r.data),
};

// ── Bookings ──────────────────────────────────────────────────────────────────
export const bookingApi = {
  getAll: () => api.get('/bookings').then((r) => r.data),
  getUserBookings: () => api.get('/bookings/user').then((r) => r.data),
  create: (data: object) => api.post('/bookings', data).then((r) => r.data),
  updateStatus: (id: string, status: string) =>
    api.put(`/bookings/${id}/status`, { status }).then((r) => r.data),
  cancel: (id: string) => api.put(`/bookings/${id}/cancel`).then((r) => r.data),
};

// ── Reviews ───────────────────────────────────────────────────────────────────
export const reviewApi = {
  getApproved: () => api.get('/reviews').then((r) => r.data),
  getAll: () => api.get('/reviews/all').then((r) => r.data),
  create: (data: object) => api.post('/reviews', data).then((r) => r.data),
  toggleApproval: (id: string) => api.put(`/reviews/${id}/approve`).then((r) => r.data),
  delete: (id: string) => api.delete(`/reviews/${id}`).then((r) => r.data),
};

// ── Contacts ──────────────────────────────────────────────────────────────────
export const contactApi = {
  getAll: () => api.get('/contacts').then((r) => r.data),
  create: (data: object) => api.post('/contacts', data).then((r) => r.data),
  updateStatus: (id: string, status: string) =>
    api.put(`/contacts/${id}/status`, { status }).then((r) => r.data),
  delete: (id: string) => api.delete(`/contacts/${id}`).then((r) => r.data),
};

// ── Settings ──────────────────────────────────────────────────────────────────
export const settingsApi = {
  get: () => api.get('/settings').then((r) => r.data),
  update: (data: object) => api.put('/settings', data).then((r) => r.data),
};

// ── Upload ────────────────────────────────────────────────────────────────────
export const uploadApi = {
  uploadImage: (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    return api
      .post('/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then((r) => r.data);
  },
};

export default api;
