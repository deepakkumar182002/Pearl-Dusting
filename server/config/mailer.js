import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Send booking confirmation email to the customer.
 */
export const sendBookingConfirmation = async (booking) => {
  const mailOptions = {
    from: `"Pearl Dusting Cleaning" <${process.env.EMAIL_USER}>`,
    to: booking.userEmail,
    subject: `✅ Booking Confirmed – ${booking.serviceTitle}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;background:#f9fafb;border-radius:12px;">
        <div style="background:linear-gradient(135deg,#06b6d4,#3b82f6);border-radius:10px;padding:24px;text-align:center;margin-bottom:24px;">
          <h1 style="color:#fff;margin:0;font-size:24px;">🧹 Pearl Dusting</h1>
          <p style="color:#e0f7fa;margin:8px 0 0;font-size:14px;">Booking Confirmation</p>
        </div>

        <div style="background:#fff;border-radius:10px;padding:24px;border:1px solid #e5e7eb;">
          <h2 style="color:#111827;margin:0 0 16px;">Hi ${booking.userName},</h2>
          <p style="color:#4b5563;margin:0 0 20px;">
            Your booking has been received and is currently <strong>pending confirmation</strong>. 
            We'll reach out within 30 minutes to confirm.
          </p>

          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr style="background:#f0fdf4;">
              <td style="padding:10px 14px;border-radius:8px 0 0 8px;font-weight:600;color:#065f46;width:40%;">Service</td>
              <td style="padding:10px 14px;color:#1f2937;">${booking.serviceTitle}</td>
            </tr>
            <tr>
              <td style="padding:10px 14px;font-weight:600;color:#374151;">Date</td>
              <td style="padding:10px 14px;color:#1f2937;">${booking.bookingDate}</td>
            </tr>
            <tr style="background:#f9fafb;">
              <td style="padding:10px 14px;font-weight:600;color:#374151;">Time</td>
              <td style="padding:10px 14px;color:#1f2937;">${booking.bookingTime}</td>
            </tr>
            <tr>
              <td style="padding:10px 14px;font-weight:600;color:#374151;">Address</td>
              <td style="padding:10px 14px;color:#1f2937;">${booking.address}</td>
            </tr>
            <tr style="background:#f9fafb;">
              <td style="padding:10px 14px;font-weight:600;color:#374151;">Cleaning Type</td>
              <td style="padding:10px 14px;color:#1f2937;">${booking.cleaningType || 'Standard'}</td>
            </tr>
            <tr>
              <td style="padding:10px 14px;font-weight:600;color:#374151;">Total Price</td>
              <td style="padding:10px 14px;color:#059669;font-weight:700;font-size:18px;">$${booking.totalPrice}</td>
            </tr>
          </table>

          ${booking.notes ? `<p style="color:#6b7280;font-size:14px;"><strong>Notes:</strong> ${booking.notes}</p>` : ''}

          <div style="background:#eff6ff;border-left:4px solid #3b82f6;padding:14px;border-radius:0 8px 8px 0;margin-top:16px;">
            <p style="color:#1e40af;margin:0;font-size:13px;">
              📞 Need to make changes? Contact us at <a href="mailto:${process.env.EMAIL_USER}" style="color:#2563eb;">${process.env.EMAIL_USER}</a>
            </p>
          </div>
        </div>

        <p style="text-align:center;color:#9ca3af;font-size:12px;margin-top:20px;">
          © ${new Date().getFullYear()} Pearl Dusting Cleaning Services. All rights reserved.
        </p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

/**
 * Notify admin about a new booking.
 */
export const sendBookingAdminNotification = async (booking) => {
  const mailOptions = {
    from: `"Pearl Dusting System" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `🔔 New Booking: ${booking.serviceTitle} – ${booking.userName}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;">
        <h2 style="color:#1f2937;">New Booking Received</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px;font-weight:600;">Customer:</td><td style="padding:8px;">${booking.userName}</td></tr>
          <tr style="background:#f9fafb;"><td style="padding:8px;font-weight:600;">Email:</td><td style="padding:8px;">${booking.userEmail}</td></tr>
          <tr><td style="padding:8px;font-weight:600;">Phone:</td><td style="padding:8px;">${booking.phone}</td></tr>
          <tr style="background:#f9fafb;"><td style="padding:8px;font-weight:600;">Service:</td><td style="padding:8px;">${booking.serviceTitle}</td></tr>
          <tr><td style="padding:8px;font-weight:600;">Date:</td><td style="padding:8px;">${booking.bookingDate}</td></tr>
          <tr style="background:#f9fafb;"><td style="padding:8px;font-weight:600;">Time:</td><td style="padding:8px;">${booking.bookingTime}</td></tr>
          <tr><td style="padding:8px;font-weight:600;">Address:</td><td style="padding:8px;">${booking.address}</td></tr>
          <tr style="background:#f9fafb;"><td style="padding:8px;font-weight:600;">Cleaning Type:</td><td style="padding:8px;">${booking.cleaningType || 'Standard'}</td></tr>
          <tr><td style="padding:8px;font-weight:600;">Total Price:</td><td style="padding:8px;color:#059669;font-weight:700;">$${booking.totalPrice}</td></tr>
          ${booking.notes ? `<tr style="background:#f9fafb;"><td style="padding:8px;font-weight:600;">Notes:</td><td style="padding:8px;">${booking.notes}</td></tr>` : ''}
        </table>
        <p style="color:#6b7280;font-size:12px;margin-top:16px;">Login to the admin panel to update the booking status.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

/**
 * Send contact form acknowledgment to the user.
 */
export const sendContactConfirmation = async (contact) => {
  const mailOptions = {
    from: `"Pearl Dusting Cleaning" <${process.env.EMAIL_USER}>`,
    to: contact.email,
    subject: `✉️ We received your message – Pearl Dusting`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;background:#f9fafb;border-radius:12px;">
        <div style="background:linear-gradient(135deg,#06b6d4,#3b82f6);border-radius:10px;padding:24px;text-align:center;margin-bottom:24px;">
          <h1 style="color:#fff;margin:0;font-size:24px;">🧹 Pearl Dusting</h1>
        </div>
        <div style="background:#fff;border-radius:10px;padding:24px;border:1px solid #e5e7eb;">
          <h2 style="color:#111827;margin:0 0 12px;">Hi ${contact.name},</h2>
          <p style="color:#4b5563;">Thank you for reaching out! We've received your message and will get back to you within 24 hours.</p>
          <blockquote style="border-left:4px solid #06b6d4;margin:16px 0;padding:12px 16px;background:#f0fdf4;border-radius:0 8px 8px 0;color:#374151;font-style:italic;">
            "${contact.message}"
          </blockquote>
          <p style="color:#4b5563;">If you have any urgent queries, please call us directly.</p>
        </div>
        <p style="text-align:center;color:#9ca3af;font-size:12px;margin-top:20px;">© ${new Date().getFullYear()} Pearl Dusting Cleaning Services.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

/**
 * Forward contact form message to admin.
 */
export const sendContactAdminNotification = async (contact) => {
  const mailOptions = {
    from: `"Pearl Dusting System" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `📩 New Contact Message from ${contact.name}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;">
        <h2 style="color:#1f2937;">New Contact Form Submission</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px;font-weight:600;">Name:</td><td style="padding:8px;">${contact.name}</td></tr>
          <tr style="background:#f9fafb;"><td style="padding:8px;font-weight:600;">Email:</td><td style="padding:8px;">${contact.email}</td></tr>
          ${contact.phone ? `<tr><td style="padding:8px;font-weight:600;">Phone:</td><td style="padding:8px;">${contact.phone}</td></tr>` : ''}
        </table>
        <div style="margin-top:16px;padding:16px;background:#f0fdf4;border-radius:8px;border:1px solid #bbf7d0;">
          <strong>Message:</strong>
          <p style="color:#374151;margin-top:8px;">${contact.message}</p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};
