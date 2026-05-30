import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import useStore from '../store/useStore';

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

.lp-root { font-family:'DM Sans',sans-serif; min-height:100vh; display:flex; align-items:center; justify-content:center; background:linear-gradient(145deg,#e0f7fa 0%,#e8f4fd 45%,#f0fdf4 100%); padding:24px; }
.lp-root::before { content:''; position:fixed; top:-200px; right:-200px; width:500px; height:500px; border-radius:50%; background:radial-gradient(circle,rgba(6,182,212,.12) 0%,transparent 70%); pointer-events:none; z-index:0; }

/* CARD */
.lp-card { background:#fff; border-radius:28px; border:1px solid #e8eef4; box-shadow:0 24px 80px rgba(0,0,0,.1); padding:44px 40px; width:100%; max-width:440px; position:relative; z-index:1; }

/* LOGO TOP */
.lp-logo { text-align:center; margin-bottom:32px; }
.lp-logo-icon { width:60px; height:60px; background:linear-gradient(135deg,#06b6d4,#3b82f6); border-radius:18px; display:flex; align-items:center; justify-content:center; font-size:1.6rem; margin:0 auto 14px; box-shadow:0 8px 24px rgba(6,182,212,.3); }
.lp-logo h1 { font-family:'Syne',sans-serif; font-weight:800; font-size:1.5rem; color:#0f172a; margin:0 0 4px; }
.lp-logo p  { font-size:.875rem; color:#64748b; margin:0; font-weight:300; }

/* FORM */
.lp-form-group { display:flex; flex-direction:column; gap:6px; margin-bottom:18px; }
.lp-form-group label { font-family:'Syne',sans-serif; font-size:.78rem; font-weight:700; color:#334155; }
.lp-input-wrap { position:relative; }
.lp-input-icon { position:absolute; left:16px; top:50%; transform:translateY(-50%); font-size:1rem; color:#94a3b8; pointer-events:none; }
.lp-input-wrap input { width:100%; height:52px; padding:0 16px 0 46px; border:1.5px solid #e2e8f0; border-radius:14px; font-family:'DM Sans',sans-serif; font-size:.9rem; color:#1e293b; outline:none; transition:border-color .2s; box-sizing:border-box; }
.lp-input-wrap input:focus { border-color:#06b6d4; box-shadow:0 0 0 3px rgba(6,182,212,.1); }
.lp-eye-btn { position:absolute; right:16px; top:50%; transform:translateY(-50%); background:none; border:none; cursor:pointer; color:#94a3b8; font-size:1rem; padding:0; line-height:1; }
.lp-eye-btn:hover { color:#475569; }

/* SUBMIT */
.lp-submit { width:100%; height:52px; background:linear-gradient(135deg,#06b6d4,#3b82f6); color:#fff; border:none; border-radius:14px; font-family:'Syne',sans-serif; font-weight:700; font-size:1rem; cursor:pointer; transition:transform .2s,box-shadow .2s; box-shadow:0 4px 16px rgba(6,182,212,.28); }
.lp-submit:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(6,182,212,.42); }
.lp-submit:disabled { opacity:.65; cursor:not-allowed; transform:none; }

/* HINT */
.lp-hint { background:#f0fdf4; border:1px solid #bbf7d0; border-radius:12px; padding:14px 16px; margin-top:20px; font-size:.82rem; color:#166534; text-align:center; }

@media(max-width:480px){
  .lp-card { padding:32px 22px; border-radius:22px; }
}
`;

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill all fields');
      return;
    }
    setLoading(true);
    try {
      const success = await login(email, password);
      if (success) {
        const store = useStore.getState();
        if (store.user?.role === 'admin') {
          toast.success('Welcome, Admin!');
          navigate('/admin');
        } else {
          // Not an admin – log them out
          useStore.getState().logout();
          toast.error('Access denied. Admin credentials required.');
        }
      } else {
        toast.error('Invalid email or password');
      }
    } catch {
      toast.error('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{styles}</style>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="lp-root"
      >
        <div className="lp-card">
          {/* Logo */}
          <div className="lp-logo">
            <div className="lp-logo-icon">🔐</div>
            <h1>Admin Login</h1>
            <p>Pearl Dusting Admin Panel</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="lp-form-group">
              <label>Email Address</label>
              <div className="lp-input-wrap">
                <span className="lp-input-icon">✉️</span>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                />
              </div>
            </div>

            <div className="lp-form-group" style={{ marginBottom: 28 }}>
              <label>Password</label>
              <div className="lp-input-wrap">
                <span className="lp-input-icon">🔒</span>
                <input
                  type={showPw ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                  style={{ paddingRight: '46px' }}
                />
                <button type="button" className="lp-eye-btn" onClick={() => setShowPw(!showPw)}>
                  {showPw ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <button type="submit" className="lp-submit" disabled={loading}>
              {loading ? 'Signing in…' : '🔐 Sign In to Admin Panel'}
            </button>
          </form>

          <div className="lp-hint">
            🔒 This page is restricted to admin users only.
          </div>
        </div>
      </motion.div>
    </>
  );
}
