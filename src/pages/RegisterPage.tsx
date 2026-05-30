import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import useStore from '../store/useStore';

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

.rp-root { font-family:'DM Sans',sans-serif; min-height:100vh; display:flex; align-items:center; justify-content:center; background:linear-gradient(145deg,#e0f7fa 0%,#e8f4fd 45%,#f0fdf4 100%); padding:24px; }
.rp-root::before { content:''; position:fixed; top:-180px; left:-180px; width:480px; height:480px; border-radius:50%; background:radial-gradient(circle,rgba(6,182,212,.12) 0%,transparent 70%); pointer-events:none; z-index:0; }
.rp-root::after  { content:''; position:fixed; bottom:-150px; right:-150px; width:400px; height:400px; border-radius:50%; background:radial-gradient(circle,rgba(59,130,246,.1) 0%,transparent 70%); pointer-events:none; z-index:0; }

.rp-card { background:#fff; border-radius:28px; border:1px solid #e8eef4; box-shadow:0 24px 80px rgba(0,0,0,.1); padding:44px 40px; width:100%; max-width:460px; position:relative; z-index:1; }

/* LOGO */
.rp-logo { text-align:center; margin-bottom:32px; }
.rp-logo-icon { width:60px; height:60px; background:linear-gradient(135deg,#06b6d4,#3b82f6); border-radius:18px; display:flex; align-items:center; justify-content:center; font-size:1.6rem; margin:0 auto 14px; box-shadow:0 8px 24px rgba(6,182,212,.3); }
.rp-logo h1 { font-family:'Syne',sans-serif; font-weight:800; font-size:1.5rem; color:#0f172a; margin:0 0 4px; }
.rp-logo p  { font-size:.875rem; color:#64748b; margin:0; font-weight:300; }

/* FORM */
.rp-form-group { display:flex; flex-direction:column; gap:6px; margin-bottom:14px; }
.rp-form-group label { font-family:'Syne',sans-serif; font-size:.77rem; font-weight:700; color:#334155; }
.rp-input-wrap { position:relative; }
.rp-input-icon { position:absolute; left:16px; top:50%; transform:translateY(-50%); font-size:.95rem; color:#94a3b8; pointer-events:none; }
.rp-input-wrap input { width:100%; height:50px; padding:0 16px 0 44px; border:1.5px solid #e2e8f0; border-radius:13px; font-family:'DM Sans',sans-serif; font-size:.875rem; color:#1e293b; outline:none; transition:border-color .2s,box-shadow .2s; box-sizing:border-box; background:#fff; }
.rp-input-wrap input:focus { border-color:#06b6d4; box-shadow:0 0 0 3px rgba(6,182,212,.1); }
.rp-input-wrap input.error { border-color:#ef4444; }
.rp-eye-btn { position:absolute; right:14px; top:50%; transform:translateY(-50%); background:none; border:none; cursor:pointer; color:#94a3b8; font-size:.95rem; padding:0; line-height:1; }
.rp-eye-btn:hover { color:#475569; }

/* STRENGTH BAR */
.rp-strength { margin-top:6px; }
.rp-strength-bar { display:flex; gap:4px; margin-bottom:4px; }
.rp-strength-seg { height:3px; flex:1; border-radius:2px; background:#e2e8f0; transition:background .3s; }
.rp-strength-seg.weak   { background:#ef4444; }
.rp-strength-seg.medium { background:#f59e0b; }
.rp-strength-seg.strong { background:#22c55e; }
.rp-strength-lbl { font-size:.72rem; color:#94a3b8; }

/* ERROR */
.rp-field-err { font-size:.73rem; color:#ef4444; margin-top:3px; font-family:'DM Sans',sans-serif; }

/* SUBMIT */
.rp-submit { width:100%; height:52px; background:linear-gradient(135deg,#06b6d4,#3b82f6); color:#fff; border:none; border-radius:14px; font-family:'Syne',sans-serif; font-weight:700; font-size:1rem; cursor:pointer; transition:transform .2s,box-shadow .2s; box-shadow:0 4px 16px rgba(6,182,212,.28); margin-top:4px; }
.rp-submit:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(6,182,212,.42); }
.rp-submit:disabled { opacity:.65; cursor:not-allowed; transform:none; }

/* TERMS */
.rp-terms { display:flex; align-items:flex-start; gap:8px; margin-bottom:18px; font-size:.8rem; color:#64748b; }
.rp-terms input { accent-color:#06b6d4; margin-top:2px; width:14px; height:14px; flex-shrink:0; }
.rp-terms a { color:#0891b2; font-weight:600; text-decoration:none; }
.rp-terms a:hover { text-decoration:underline; }

/* BOTTOM */
.rp-signin { text-align:center; margin-top:20px; font-size:.85rem; color:#64748b; }
.rp-signin a { color:#0891b2; font-weight:600; text-decoration:none; }
.rp-signin a:hover { text-decoration:underline; }

/* BENEFITS */
.rp-benefits { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:24px; justify-content:center; }
.rp-benefit { display:flex; align-items:center; gap:5px; font-size:.76rem; color:#64748b; background:#f8fafc; border:1px solid #e8eef4; border-radius:50px; padding:4px 12px; }

@media(max-width:520px){
  .rp-card { padding:32px 20px; border-radius:22px; }
}
`;

function getStrength(pw: string) {
  if (!pw) return 0;
  let score = 0;
  if (pw.length >= 6)  score++;
  if (pw.length >= 10) score++;
  if (/[A-Z]/.test(pw) && /[0-9]/.test(pw)) score++;
  return score;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [showPw, setShowPw] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { register } = useStore();
  const navigate = useNavigate();

  const setField = (k: string, v: string) => {
    setFormData(f => ({ ...f, [k]: v }));
    setErrors(e => ({ ...e, [k]: '' }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim())                          e.name = 'Name is required';
    if (!formData.email.trim())                         e.email = 'Email is required';
    if (formData.password.length < 6)                   e.password = 'At least 6 characters';
    if (formData.password !== formData.confirmPassword) e.confirmPassword = 'Passwords do not match';
    if (!agreed)                                        e.terms = 'Please accept the terms';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    try {
      const success = await register(formData.name, formData.email, formData.password);
      if (success) {
        toast.success('Account created successfully!');
        navigate('/dashboard');
      } else {
        toast.error('Registration failed. Email may already be in use.');
      }
    } catch {
      toast.error('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const strength = getStrength(formData.password);
  const strengthLabel = ['', 'Weak', 'Medium', 'Strong'][strength];
  const strengthClass = ['', 'weak', 'medium', 'strong'][strength];

  return (
    <>
      <style>{styles}</style>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rp-root"
      >
        <div className="rp-card">

          {/* Logo */}
          <div className="rp-logo">
            <div className="rp-logo-icon">🧹</div>
            <h1>Create Account</h1>
            <p>Join Pearl Dusting Cleaning Service today</p>
          </div>

          {/* Benefits */}
          <div className="rp-benefits">
            {['✅ Free first booking', '🌿 Eco-friendly', '⚡ Same-day service'].map((b, i) => (
              <span className="rp-benefit" key={i}>{b}</span>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="rp-form-group">
              <label>Full Name</label>
              <div className="rp-input-wrap">
                <span className="rp-input-icon">👤</span>
                <input
                  className={errors.name ? 'error' : ''}
                  value={formData.name}
                  onChange={e => setField('name', e.target.value)}
                  placeholder="Rahul Sharma"
                />
              </div>
              {errors.name && <div className="rp-field-err">{errors.name}</div>}
            </div>

            <div className="rp-form-group">
              <label>Email Address</label>
              <div className="rp-input-wrap">
                <span className="rp-input-icon">✉️</span>
                <input
                  type="email"
                  className={errors.email ? 'error' : ''}
                  value={formData.email}
                  onChange={e => setField('email', e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && <div className="rp-field-err">{errors.email}</div>}
            </div>

            <div className="rp-form-group">
              <label>Password</label>
              <div className="rp-input-wrap">
                <span className="rp-input-icon">🔒</span>
                <input
                  type={showPw ? 'text' : 'password'}
                  className={errors.password ? 'error' : ''}
                  value={formData.password}
                  onChange={e => setField('password', e.target.value)}
                  placeholder="Min. 6 characters"
                  style={{ paddingRight: '42px' }}
                />
                <button type="button" className="rp-eye-btn" onClick={() => setShowPw(!showPw)}>
                  {showPw ? '🙈' : '👁️'}
                </button>
              </div>
              {formData.password && (
                <div className="rp-strength">
                  <div className="rp-strength-bar">
                    {[0, 1, 2].map(i => (
                      <div key={i} className={`rp-strength-seg${i < strength ? ' ' + strengthClass : ''}`} />
                    ))}
                  </div>
                  <div className="rp-strength-lbl">{strengthLabel} password</div>
                </div>
              )}
              {errors.password && <div className="rp-field-err">{errors.password}</div>}
            </div>

            <div className="rp-form-group" style={{ marginBottom: '18px' }}>
              <label>Confirm Password</label>
              <div className="rp-input-wrap">
                <span className="rp-input-icon">🔒</span>
                <input
                  type="password"
                  className={errors.confirmPassword ? 'error' : ''}
                  value={formData.confirmPassword}
                  onChange={e => setField('confirmPassword', e.target.value)}
                  placeholder="Repeat password"
                />
              </div>
              {errors.confirmPassword && <div className="rp-field-err">{errors.confirmPassword}</div>}
            </div>

            <label className="rp-terms">
              <input
                type="checkbox"
                checked={agreed}
                onChange={e => { setAgreed(e.target.checked); setErrors(er => ({ ...er, terms: '' })); }}
              />
              <span>I agree to the <Link to="/terms">Terms &amp; Conditions</Link> and <Link to="/privacy">Privacy Policy</Link></span>
            </label>
            {errors.terms && <div className="rp-field-err" style={{ marginTop: '-10px', marginBottom: '10px' }}>{errors.terms}</div>}

            <button type="submit" className="rp-submit" disabled={loading}>
              {loading ? 'Creating Account…' : 'Create Account →'}
            </button>
          </form>

          <div className="rp-signin">
            Already have an account? <Link to="/login">Sign In</Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
