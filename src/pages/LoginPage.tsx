// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
// import { MdCleaningServices } from 'react-icons/md';
// import toast from 'react-hot-toast';
// import useStore from '../store/useStore';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const { login } = useStore();
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email || !password) { toast.error('Please fill all fields'); return; }
//     setIsLoading(true);
//     try {
//       const success = await login(email, password);
//       if (success) {
//         toast.success('Welcome back!');
//         const store = useStore.getState();
//         if (store.user?.role === 'admin') navigate('/admin');
//         else navigate('/dashboard');
//       } else {
//         toast.error('Invalid email or password');
//       }
//     } catch {
//       toast.error('Login failed. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 py-10 sm:py-12 px-4 sm:px-6">
//       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
//         <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
//           <div className="text-center mb-8">
//             <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
//               <MdCleaningServices className="text-white text-2xl" />
//             </div>
//             <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
//             <p className="text-sm text-gray-500 mt-1">Sign in to your account</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//               <div className="relative">
//                 <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm" />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//               <div className="relative">
//                 <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm" />
//                 <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
//                   {showPassword ? <FiEyeOff /> : <FiEye />}
//                 </button>
//               </div>
//             </div>
//             <div className="flex items-center justify-between text-sm">
//               <label className="flex items-center gap-2 text-gray-600">
//                 <input type="checkbox" className="rounded border-gray-300" /> Remember me
//               </label>
//               <button type="button" className="text-primary-600 hover:text-primary-700 font-medium" onClick={() => toast.success('Password reset link sent!')}>
//                 Forgot Password?
//               </button>
//             </div>
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full py-3.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all text-sm disabled:opacity-70 disabled:cursor-not-allowed"
//             >
//               {isLoading ? 'Signing in...' : 'Sign In'}
//             </button>
//           </form>

//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-500">
//               Don't have an account? <Link to="/register" className="text-primary-600 font-semibold hover:text-primary-700">Sign Up</Link>
//             </p>
//           </div>

//           <div className="mt-6 p-4 bg-gray-50 rounded-xl">
//             <p className="text-xs text-gray-500 font-medium mb-2">Demo Credentials:</p>
//             <p className="text-xs text-gray-400">Admin: admin@sparkleclean.com / admin123</p>
//             <p className="text-xs text-gray-400">User: john@example.com / password123</p>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }


import { useState } from "react";

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

/* ROW */
.lp-row { display:flex; align-items:center; justify-content:space-between; margin-bottom:24px; }
.lp-remember { display:flex; align-items:center; gap:8px; font-size:.83rem; color:#64748b; cursor:pointer; }
.lp-remember input { accent-color:#06b6d4; width:15px; height:15px; }
.lp-forgot { background:none; border:none; font-size:.83rem; color:#0891b2; font-weight:600; cursor:pointer; font-family:'DM Sans',sans-serif; }
.lp-forgot:hover { color:#0e7490; }

/* SUBMIT */
.lp-submit { width:100%; height:52px; background:linear-gradient(135deg,#06b6d4,#3b82f6); color:#fff; border:none; border-radius:14px; font-family:'Syne',sans-serif; font-weight:700; font-size:1rem; cursor:pointer; transition:transform .2s,box-shadow .2s; box-shadow:0 4px 16px rgba(6,182,212,.28); }
.lp-submit:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(6,182,212,.42); }
.lp-submit:disabled { opacity:.65; cursor:not-allowed; transform:none; }

/* BOTTOM LINKS */
.lp-signup { text-align:center; margin-top:20px; font-size:.85rem; color:#64748b; }
.lp-signup a { color:#0891b2; font-weight:600; text-decoration:none; }
.lp-signup a:hover { text-decoration:underline; }

/* DEMO BOX */
.lp-demo { background:#f8fafc; border:1px solid #e8eef4; border-radius:12px; padding:16px 18px; margin-top:20px; }
.lp-demo-title { font-family:'Syne',sans-serif; font-size:.75rem; font-weight:700; color:#64748b; margin:0 0 8px; }
.lp-demo p { font-size:.77rem; color:#94a3b8; margin:0 0 3px; font-family:'DM Sans',sans-serif; }

/* DIVIDER */
.lp-divider { display:flex; align-items:center; gap:12px; margin:20px 0; }
.lp-divider::before,.lp-divider::after { content:''; flex:1; height:1px; background:#e8eef4; }
.lp-divider span { font-size:.78rem; color:#94a3b8; }

/* SUCCESS toast */
.lp-toast { background:#e0f7fa; border:1px solid #a5f3fc; border-radius:12px; padding:13px 18px; color:#0891b2; font-family:'Syne',sans-serif; font-weight:600; font-size:.875rem; text-align:center; margin-top:16px; }

@media(max-width:480px){
  .lp-card { padding:32px 22px; border-radius:22px; }
}
`;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="lp-root">
        <div className="lp-card">

          {/* Logo */}
          <div className="lp-logo">
            <div className="lp-logo-icon">🧹</div>
            <h1>Welcome Back</h1>
            <p>Sign in to your Pearl Dusting account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="lp-form-group">
              <label>Email Address</label>
              <div className="lp-input-wrap">
                <span className="lp-input-icon">✉️</span>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" required />
              </div>
            </div>

            <div className="lp-form-group">
              <label>Password</label>
              <div className="lp-input-wrap">
                <span className="lp-input-icon">🔒</span>
                <input type={showPw?"text":"password"} value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" required style={{paddingRight:"46px"}} />
                <button type="button" className="lp-eye-btn" onClick={()=>setShowPw(!showPw)}>
                  {showPw?"🙈":"👁️"}
                </button>
              </div>
            </div>

            <div className="lp-row">
              <label className="lp-remember">
                <input type="checkbox" checked={remember} onChange={e=>setRemember(e.target.checked)} />
                Remember me
              </label>
              <button type="button" className="lp-forgot">Forgot Password?</button>
            </div>

            <button type="submit" className="lp-submit" disabled={loading}>
              {loading ? "Signing in…" : "Sign In →"}
            </button>
          </form>

          {success && <div className="lp-toast">✅ Welcome back! Redirecting…</div>}

          <div className="lp-signup">
            Don't have an account? <a href="/register">Sign Up</a>
          </div>

          <div className="lp-demo">
            <p className="lp-demo-title">Demo Credentials</p>
            <p>Admin: admin@pearldusting.com / admin123</p>
            <p>User: user@pearldusting.com / password123</p>
          </div>
        </div>
      </div>
    </>
  );
}

