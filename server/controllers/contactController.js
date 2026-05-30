import ContactMessage from '../models/ContactMessage.js';
import { sendContactConfirmation, sendContactAdminNotification } from '../config/mailer.js';

// GET /api/contacts - admin
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/contacts - public
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }
    const contact = await ContactMessage.create({ name, email, phone: phone || '', message });
    res.status(201).json(contact);

    // Send emails asynchronously
    Promise.all([
      sendContactConfirmation(contact),
      sendContactAdminNotification(contact),
    ]).catch(err => console.error('📧 Contact email error:', err.message));

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /api/contacts/:id/status - admin
export const updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const contact = await ContactMessage.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!contact) return res.status(404).json({ message: 'Message not found' });
    res.json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /api/contacts/:id - admin
export const deleteContact = async (req, res) => {
  try {
    const contact = await ContactMessage.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Message not found' });
    res.json({ message: 'Message deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
