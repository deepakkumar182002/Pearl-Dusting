import express from 'express';
import { getAllContacts, createContact, updateContactStatus, deleteContact } from '../controllers/contactController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, adminOnly, getAllContacts);
router.post('/', createContact);
router.put('/:id/status', protect, adminOnly, updateContactStatus);
router.delete('/:id', protect, adminOnly, deleteContact);

export default router;
