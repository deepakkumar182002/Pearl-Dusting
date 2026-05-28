import express from 'express';
import { getApprovedReviews, getAllReviews, createReview, toggleApproval, deleteReview } from '../controllers/reviewController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getApprovedReviews);
router.get('/all', protect, adminOnly, getAllReviews);
router.post('/', protect, createReview);
router.put('/:id/approve', protect, adminOnly, toggleApproval);
router.delete('/:id', protect, adminOnly, deleteReview);

export default router;
