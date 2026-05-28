// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
// import { MdCleaningServices } from 'react-icons/md';
// import toast from 'react-hot-toast';
// import useStore from '../store/useStore';

// export default function RegisterPage() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const { register } = useStore();
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!name || !email || !password) { toast.error('Please fill all fields'); return; }
//     if (password !== confirmPassword) { toast.error('Passwords do not match'); return; }
//     if (password.length < 6) { toast.error('Password must be at least 6 characters'); return; }
//     setIsLoading(true);
//     try {
//       const success = await register(name, email, password);
//       if (success) {
//         toast.success('Account created successfully!');
//         navigate('/dashboard');
//       } else {
//         toast.error('Registration failed. Email may already be in use.');
//       }
//     } catch {
//       toast.error('Registration failed. Please try again.');
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
//             <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
//             <p className="text-sm text-gray-500 mt-1">Join SparkleClean Pro today</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//               <div className="relative">
//                 <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm" />
//               </div>
//             </div>
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
//                 <input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="Min. 6 characters" className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm" />
//                 <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//                   {showPassword ? <FiEyeOff /> : <FiEye />}
//                 </button>
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
//               <div className="relative">
//                 <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm password" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm" />
//               </div>
//             </div>
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full py-3.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all text-sm disabled:opacity-70 disabled:cursor-not-allowed"
//             >
//               {isLoading ? 'Creating Account...' : 'Create Account'}
//             </button>
//           </form>

//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-500">
//               Already have an account? <Link to="/login" className="text-primary-600 font-semibold hover:text-primary-700">Sign In</Link>
//             </p>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }




// at > /mnt/user-data/outputs/RegisterPage.jsx << 'EOF'
import { useState } from "react";

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
.rp-form-row { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:14px; }
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

/* DIVIDER */
.rp-divider { display:flex; align-items:center; gap:10px; margin:18px 0; }
.rp-divider::before,.rp-divider::after { content:''; flex:1; height:1px; background:#e8eef4; }
.rp-divider span { font-size:.75rem; color:#94a3b8; white-space:nowrap; }

/* SUCCESS */
.rp-success { background:#e0f7fa; border:1px solid #a5f3fc; border-radius:12px; padding:14px 18px; color:#0891b2; font-family:'Syne',sans-serif; font-weight:600; font-size:.875rem; text-align:center; margin-top:14px; }

/* BENEFITS */
.rp-benefits { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:24px; justify-content:center; }
.rp-benefit { display:flex; align-items:center; gap:5px; font-size:.76rem; color:#64748b; background:#f8fafc; border:1px solid #e8eef4; border-radius:50px; padding:4px 12px; }

@media(max-width:520px){
  .rp-card { padding:32px 20px; border-radius:22px; }
  .rp-form-row { grid-template-columns:1fr; }
}
`;

function getStrength(pw) {
  if (!pw) return 0;
  let score = 0;
  if (pw.length >= 6)  score++;
  if (pw.length >= 10) score++;
  if (/[A-Z]/.test(pw) && /[0-9]/.test(pw)) score++;
  return score;
}

export default function RegisterPage() {
  const [form, setForm] = useState({ name:"", email:"", password:"", confirmPassword:"" });
  const [showPw, setShowPw] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const set = (k, v) => { setForm(f=>({...f,[k]:v})); setErrors(e=>({...e,[k]:""})); };

  const validate = () => {
    const e = {};
    if (!form.name.trim())            e.name = "Name is required";
    if (!form.email.trim())           e.email = "Email is required";
    if (form.password.length < 6)     e.password = "At least 6 characters";
    if (form.password !== form.confirmPassword) e.confirmPassword = "Passwords do not match";
    if (!agreed)                      e.terms = "Please accept the terms";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    setSuccess(true);
  };

  const strength = getStrength(form.password);
  const strengthLabel = ["","Weak","Medium","Strong"][strength];
  const strengthClass = ["","weak","medium","strong"][strength];

  return (
    <>
      <style>{styles}</style>
      <div className="rp-root">
        <div className="rp-card">

          {/* Logo */}
          <div className="rp-logo">
            <div className="rp-logo-icon">🧹</div>
            <h1>Create Account</h1>
            <p>Join Pearl Dusting Cleaning Service today</p>
          </div>

          {/* Benefits */}
          <div className="rp-benefits">
            {["✅ Free first booking","🌿 Eco-friendly","⚡ Same-day service"].map((b,i)=>(
              <span className="rp-benefit" key={i}>{b}</span>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="rp-form-group">
              <label>Full Name</label>
              <div className="rp-input-wrap">
                <span className="rp-input-icon">👤</span>
                <input className={errors.name?"error":""} value={form.name} onChange={e=>set("name",e.target.value)} placeholder="Rahul Sharma" />
              </div>
              {errors.name && <div className="rp-field-err">{errors.name}</div>}
            </div>

            <div className="rp-form-group">
              <label>Email Address</label>
              <div className="rp-input-wrap">
                <span className="rp-input-icon">✉️</span>
                <input type="email" className={errors.email?"error":""} value={form.email} onChange={e=>set("email",e.target.value)} placeholder="you@example.com" />
              </div>
              {errors.email && <div className="rp-field-err">{errors.email}</div>}
            </div>

            <div className="rp-form-group">
              <label>Password</label>
              <div className="rp-input-wrap">
                <span className="rp-input-icon">🔒</span>
                <input type={showPw?"text":"password"} className={errors.password?"error":""} value={form.password} onChange={e=>set("password",e.target.value)} placeholder="Min. 6 characters" style={{paddingRight:"42px"}} />
                <button type="button" className="rp-eye-btn" onClick={()=>setShowPw(!showPw)}>{showPw?"🙈":"👁️"}</button>
              </div>
              {form.password && (
                <div className="rp-strength">
                  <div className="rp-strength-bar">
                    {[0,1,2].map(i=>(
                      <div key={i} className={`rp-strength-seg${i < strength ? " "+strengthClass : ""}`} />
                    ))}
                  </div>
                  <div className="rp-strength-lbl">{strengthLabel} password</div>
                </div>
              )}
              {errors.password && <div className="rp-field-err">{errors.password}</div>}
            </div>

            <div className="rp-form-group" style={{marginBottom:"18px"}}>
              <label>Confirm Password</label>
              <div className="rp-input-wrap">
                <span className="rp-input-icon">🔒</span>
                <input type="password" className={errors.confirmPassword?"error":""} value={form.confirmPassword} onChange={e=>set("confirmPassword",e.target.value)} placeholder="Repeat password" />
              </div>
              {errors.confirmPassword && <div className="rp-field-err">{errors.confirmPassword}</div>}
            </div>

            <label className="rp-terms">
              <input type="checkbox" checked={agreed} onChange={e=>{ setAgreed(e.target.checked); setErrors(er=>({...er,terms:""})); }} />
              <span>I agree to the <a href="/terms">Terms & Conditions</a> and <a href="/privacy">Privacy Policy</a></span>
            </label>
            {errors.terms && <div className="rp-field-err" style={{marginTop:"-10px",marginBottom:"10px"}}>{errors.terms}</div>}

            <button type="submit" className="rp-submit" disabled={loading}>
              {loading ? "Creating Account…" : "Create Account →"}
            </button>
          </form>

          {success && <div className="rp-success">🎉 Account created! Welcome to Pearl Dusting!</div>}

          <div className="rp-signin">
            Already have an account? <a href="/login">Sign In</a>
          </div>
        </div>
      </div>
    </>
  );
}

