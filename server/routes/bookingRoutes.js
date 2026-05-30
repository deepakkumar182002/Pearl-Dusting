import express from 'express';
import {
  getAllBookings,
  getUserBookings,
  createBooking,
  createPublicBooking,
  updateBookingStatus,
  cancelBooking,
} from '../controllers/bookingController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();

// Public – no auth required (from booking page)
router.post('/public', createPublicBooking);

// Protected routes
router.get('/', protect, adminOnly, getAllBookings);
router.get('/user', protect, getUserBookings);
router.post('/', protect, createBooking);
router.put('/:id/status', protect, adminOnly, updateBookingStatus);
router.put('/:id/cancel', protect, cancelBooking);

export default router;
