import express from 'express';
import { getAllBookings, getUserBookings, createBooking, updateBookingStatus, cancelBooking } from '../controllers/bookingController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, adminOnly, getAllBookings);
router.get('/user', protect, getUserBookings);
router.post('/', protect, createBooking);
router.put('/:id/status', protect, adminOnly, updateBookingStatus);
router.put('/:id/cancel', protect, cancelBooking);

export default router;
