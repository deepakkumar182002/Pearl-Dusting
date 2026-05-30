import Booking from '../models/Booking.js';
import { sendBookingConfirmation, sendBookingAdminNotification } from '../config/mailer.js';

// GET /api/bookings - admin (all bookings)
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/bookings/user - protected (user's own bookings)
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/bookings/public - PUBLIC (no auth required)
export const createPublicBooking = async (req, res) => {
  try {
    const {
      userName, userEmail, phone, address, area,
      serviceId, serviceTitle, bookingDate, bookingTime,
      cleaningType, notes, totalPrice, staffGender,
    } = req.body;

    if (!userName || !userEmail || !phone || !address || !serviceTitle || !bookingDate || !bookingTime) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    const bookingData = {
      userId: null,
      userName,
      userEmail,
      phone,
      address,
      area: area || '',
      serviceId: serviceId || '',
      serviceTitle,
      bookingDate,
      bookingTime,
      cleaningType: cleaningType || 'Standard',
      notes: notes || '',
      totalPrice: totalPrice || 0,
      staffGender: staffGender || '',
      status: 'pending',
    };

    const booking = await Booking.create(bookingData);
    res.status(201).json({ success: true, booking });

    // Send confirmation emails asynchronously
    Promise.all([
      sendBookingConfirmation(booking),
      sendBookingAdminNotification(booking),
    ]).catch(err => console.error('📧 Email error:', err.message));

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// POST /api/bookings - protected
export const createBooking = async (req, res) => {
  try {
    const bookingData = {
      ...req.body,
      userId: req.user._id,
      userName: req.user.name,
      userEmail: req.user.email,
    };
    const booking = await Booking.create(bookingData);
    res.status(201).json(booking);

    // Send emails asynchronously (don't block the response)
    Promise.all([
      sendBookingConfirmation(booking),
      sendBookingAdminNotification(booking),
    ]).catch(err => console.error('📧 Email error:', err.message));

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /api/bookings/:id/status - admin
export const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /api/bookings/:id/cancel - protected (user cancels own booking)
export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    if (booking.userId && booking.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to cancel this booking' });
    }
    if (!['pending', 'accepted'].includes(booking.status)) {
      return res.status(400).json({ message: 'Cannot cancel a booking that is already in progress or completed' });
    }
    booking.status = 'cancelled';
    await booking.save();
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
