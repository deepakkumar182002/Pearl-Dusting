import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import useStore from '../store/useStore';
import { bookingApi } from '../api/api';

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
];
const cleaningTypes = ['Standard', 'Deep', 'Premium', 'Move-in/Move-out'];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

.bp-root {
  font-family: 'DM Sans', sans-serif;
  min-height: 100vh;
  background: linear-gradient(145deg, #e0f7fa 0%, #e8f4fd 45%, #f0fdf4 100%);
  padding: 80px 24px 60px;
}

.bp-inner {
  max-width: 860px;
  margin: 0 auto;
}

.bp-header {
  text-align: center;
  margin-bottom: 40px;
}

.bp-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #e0f7fa;
  color: #0891b2;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: .75rem;
  padding: 6px 14px;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: .07em;
  margin-bottom: 14px;
}

.bp-header h1 {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  color: #0f172a;
  margin: 0 0 10px;
}

.bp-header p {
  color: #64748b;
  font-size: .95rem;
  font-weight: 300;
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.7;
}

.bp-card {
  background: #fff;
  border-radius: 24px;
  border: 1px solid #e8eef4;
  box-shadow: 0 24px 80px rgba(0,0,0,.1);
  padding: 40px;
}

.bp-section-title {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: .72rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: .09em;
  margin: 0 0 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f1f5f9;
}

.bp-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

.bp-grid-1 {
  margin-bottom: 16px;
}

.bp-section {
  margin-bottom: 28px;
}

.bp-label {
  display: block;
  font-size: .82rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 6px;
}

.bp-required {
  color: #f43f5e;
  margin-left: 2px;
}

.bp-input-wrap {
  position: relative;
}

.bp-input-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
  font-size: .95rem;
  pointer-events: none;
  z-index: 1;
}

.bp-input-icon-top {
  top: 14px;
  transform: none;
}

.bp-input {
  width: 100%;
  height: 48px;
  padding: 0 16px 0 42px;
  background: #f8fafc;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  font-family: 'DM Sans', sans-serif;
  font-size: .88rem;
  color: #1e293b;
  outline: none;
  transition: border-color .2s, box-shadow .2s, background .2s;
  box-sizing: border-box;
}

.bp-input:focus {
  border-color: #06b6d4;
  box-shadow: 0 0 0 3px rgba(6,182,212,.1);
  background: #fff;
}

.bp-textarea {
  width: 100%;
  padding: 14px 16px 14px 42px;
  background: #f8fafc;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  font-family: 'DM Sans', sans-serif;
  font-size: .88rem;
  color: #1e293b;
  outline: none;
  transition: border-color .2s, box-shadow .2s;
  resize: none;
  box-sizing: border-box;
}

.bp-textarea:focus {
  border-color: #06b6d4;
  box-shadow: 0 0 0 3px rgba(6,182,212,.1);
  background: #fff;
}

.bp-select {
  width: 100%;
  height: 48px;
  padding: 0 16px 0 42px;
  background: #f8fafc;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  font-family: 'DM Sans', sans-serif;
  font-size: .88rem;
  color: #1e293b;
  outline: none;
  transition: border-color .2s;
  appearance: none;
  box-sizing: border-box;
  cursor: pointer;
}

.bp-select:focus {
  border-color: #06b6d4;
  box-shadow: 0 0 0 3px rgba(6,182,212,.1);
  background: #fff;
}

.bp-select-no-icon {
  padding-left: 16px;
}

.bp-summary {
  background: linear-gradient(135deg, #e0f7fa, #dbeafe);
  border-radius: 16px;
  padding: 20px 24px;
  margin-bottom: 24px;
  border: 1px solid #bae6fd;
}

.bp-summary-title {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: .88rem;
  color: #0c4a6e;
  margin: 0 0 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.bp-summary-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: .84rem;
  margin-bottom: 6px;
}

.bp-summary-row .label { color: #64748b; }
.bp-summary-row .value { font-weight: 600; color: #0f172a; }
.bp-summary-divider { height: 1px; background: #bae6fd; margin: 10px 0; }

.bp-submit {
  width: 100%;
  height: 54px;
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  color: #fff;
  border: none;
  border-radius: 14px;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: transform .2s, box-shadow .2s;
  box-shadow: 0 4px 18px rgba(6,182,212,.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.bp-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(6,182,212,.42);
}

.bp-submit:disabled {
  opacity: .65;
  cursor: not-allowed;
  transform: none;
}

.bp-success {
  text-align: center;
  padding: 60px 24px;
}

.bp-success-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 2rem;
  box-shadow: 0 12px 40px rgba(6,182,212,.35);
}

.bp-success h2 {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.7rem;
  color: #0f172a;
  margin: 0 0 10px;
}

.bp-success p {
  color: #64748b;
  font-size: .95rem;
  margin: 0 0 24px;
  line-height: 1.7;
}

.bp-back-btn {
  display: inline-block;
  padding: 12px 28px;
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  color: #fff;
  border-radius: 12px;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: .88rem;
  text-decoration: none;
  transition: transform .2s;
}

.bp-back-btn:hover { transform: translateY(-2px); }

@media(max-width:640px) {
  .bp-grid-2 { grid-template-columns: 1fr; }
  .bp-card { padding: 24px 18px; }
  .bp-root { padding: 70px 16px 40px; }
}
`;

export default function BookingPage() {
  const { services, fetchServices } = useStore();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    area: '',
    serviceTitle: '',
    bookingDate: '',
    bookingTime: '',
    cleaningType: 'Standard',
    notes: '',
    staffGender: '',
  });

  useEffect(() => {
    fetchServices();
  }, []);

  const selectedService = services.find(
    (s) => s.title === form.serviceTitle
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.fullName || !form.email || !form.phone ||
      !form.address || !form.serviceTitle ||
      !form.bookingDate || !form.bookingTime
    ) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      await bookingApi.createPublic({
        userName: form.fullName,
        userEmail: form.email,
        phone: form.phone,
        address: form.address,
        area: form.area,
        serviceId: selectedService?.id || selectedService?._id || '',
        serviceTitle: form.serviceTitle,
        bookingDate: form.bookingDate,
        bookingTime: form.bookingTime,
        cleaningType: form.cleaningType,
        notes: form.notes,
        totalPrice: selectedService?.price || 0,
        staffGender: form.staffGender,
      });
      setSubmitted(true);
      toast.success("Booking submitted! We'll confirm within 30 minutes.");
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : 'Failed to submit booking.';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <>
        <style>{styles}</style>
        <div className="bp-root">
          <div className="bp-inner">
            <motion.div
              className="bp-card bp-success"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <div className="bp-success-icon">✅</div>
              <h2>Booking Received!</h2>
              <p>
                Thank you <strong>{form.fullName}</strong>! Your booking for{' '}
                <strong>{form.serviceTitle}</strong> on{' '}
                <strong>{form.bookingDate}</strong> at{' '}
                <strong>{form.bookingTime}</strong> has been submitted.
                <br />
                We'll send a confirmation to <strong>{form.email}</strong> and
                contact you within 30 minutes.
              </p>
              <a href="/" className="bp-back-btn">
                ← Back to Home
              </a>
            </motion.div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>
      <div className="bp-root">
        <div className="bp-inner">
          {/* Header */}
          <motion.div
            className="bp-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bp-badge">🗓 Book a Service</div>
            <h1>Schedule Your Cleaning</h1>
            <p>
              Fill in the form below and we'll confirm your booking within 30
              minutes. No account required.
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            className="bp-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <form onSubmit={handleSubmit}>
              {/* Personal Info */}
              <div className="bp-section">
                <div className="bp-section-title">👤 Personal Information</div>
                <div className="bp-grid-2">
                  <div>
                    <label className="bp-label">
                      Full Name <span className="bp-required">*</span>
                    </label>
                    <div className="bp-input-wrap">
                      <span className="bp-input-icon">👤</span>
                      <input
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bp-input"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="bp-label">
                      Email <span className="bp-required">*</span>
                    </label>
                    <div className="bp-input-wrap">
                      <span className="bp-input-icon">✉️</span>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="bp-input"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="bp-label">
                      Phone <span className="bp-required">*</span>
                    </label>
                    <div className="bp-input-wrap">
                      <span className="bp-input-icon">📱</span>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 9458606691"
                        className="bp-input"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="bp-label">Area / Locality</label>
                    <div className="bp-input-wrap">
                      <span className="bp-input-icon">📍</span>
                      <input
                        name="area"
                        value={form.area}
                        onChange={handleChange}
                        placeholder="Rohini, Delhi"
                        className="bp-input"
                      />
                    </div>
                  </div>
                </div>
                <div className="bp-grid-1">
                  <label className="bp-label">
                    Full Address <span className="bp-required">*</span>
                  </label>
                  <div className="bp-input-wrap">
                    <span className="bp-input-icon">🏠</span>
                    <input
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="House No., Street, Colony, City, PIN"
                      className="bp-input"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Service */}
              <div className="bp-section">
                <div className="bp-section-title">🧹 Service Details</div>
                <div className="bp-grid-2">
                  <div>
                    <label className="bp-label">
                      Select Service <span className="bp-required">*</span>
                    </label>
                    <select
                      name="serviceTitle"
                      value={form.serviceTitle}
                      onChange={handleChange}
                      className="bp-select bp-select-no-icon"
                      required
                    >
                      <option value="">-- Choose a service --</option>
                      {services.length > 0
                        ? services.map((s) => (
                            <option key={s.id || s._id} value={s.title}>
                              {s.title}{' '}
                              {s.price ? `— ₹${s.price}` : ''}
                            </option>
                          ))
                        : [
                            'Home Deep Cleaning',
                            'Office Cleaning',
                            'Sofa Steam Cleaning',
                            'Bathroom Cleaning',
                            'Kitchen Cleaning',
                            'Window Cleaning',
                          ].map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                    </select>
                  </div>
                  <div>
                    <label className="bp-label">Cleaning Type</label>
                    <select
                      name="cleaningType"
                      value={form.cleaningType}
                      onChange={handleChange}
                      className="bp-select bp-select-no-icon"
                    >
                      {cleaningTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="bp-section">
                <div className="bp-section-title">📅 Schedule</div>
                <div className="bp-grid-2">
                  <div>
                    <label className="bp-label">
                      Preferred Date <span className="bp-required">*</span>
                    </label>
                    <div className="bp-input-wrap">
                      <span className="bp-input-icon">📅</span>
                      <input
                        type="date"
                        name="bookingDate"
                        value={form.bookingDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="bp-input"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="bp-label">
                      Preferred Time <span className="bp-required">*</span>
                    </label>
                    <div className="bp-input-wrap">
                      <span className="bp-input-icon">🕐</span>
                      <select
                        name="bookingTime"
                        value={form.bookingTime}
                        onChange={handleChange}
                        className="bp-select"
                        required
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="bp-label">Staff Gender Preference</label>
                    <select
                      name="staffGender"
                      value={form.staffGender}
                      onChange={handleChange}
                      className="bp-select bp-select-no-icon"
                    >
                      <option value="">No preference</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="bp-section">
                <div className="bp-section-title">📝 Additional Notes</div>
                <div className="bp-input-wrap">
                  <span className="bp-input-icon bp-input-icon-top">📝</span>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any special instructions, access info, specific areas to focus on..."
                    className="bp-textarea"
                  />
                </div>
              </div>

              {/* Summary */}
              {form.serviceTitle && (
                <div className="bp-summary">
                  <div className="bp-summary-title">✅ Booking Summary</div>
                  <div className="bp-summary-row">
                    <span className="label">Service</span>
                    <span className="value">{form.serviceTitle}</span>
                  </div>
                  {form.bookingDate && (
                    <div className="bp-summary-row">
                      <span className="label">Date</span>
                      <span className="value">{form.bookingDate}</span>
                    </div>
                  )}
                  {form.bookingTime && (
                    <div className="bp-summary-row">
                      <span className="label">Time</span>
                      <span className="value">{form.bookingTime}</span>
                    </div>
                  )}
                  <div className="bp-summary-row">
                    <span className="label">Type</span>
                    <span className="value">{form.cleaningType}</span>
                  </div>
                  {selectedService?.price && (
                    <>
                      <div className="bp-summary-divider" />
                      <div className="bp-summary-row">
                        <span className="label" style={{ fontWeight: 700 }}>
                          Total
                        </span>
                        <span
                          className="value"
                          style={{ color: '#0891b2', fontSize: '1.1rem' }}
                        >
                          ₹{selectedService.price}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              )}

              <button type="submit" className="bp-submit" disabled={loading}>
                {loading ? (
                  <>
                    <svg
                      className="animate-spin"
                      style={{ width: 18, height: 18 }}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  '🗓 Confirm Booking'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}
