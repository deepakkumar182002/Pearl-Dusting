// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { FiSearch } from 'react-icons/fi';
// import useStore from '../../store/useStore';

// export default function AdminUsers() {
//   const { users, fetchUsers } = useStore();
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const filtered = users.filter(u =>
//     u.name.toLowerCase().includes(search.toLowerCase()) ||
//     u.email.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900">Manage Users</h1>
//           <p className="text-sm text-gray-500">{users.length} registered users</p>
//         </div>
//       </div>

//       <div className="relative mb-6 max-w-md">
//         <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//         <input
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search users..."
//           className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
//         />
//       </div>

//       <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="bg-gray-50 border-b border-gray-100">
//                 <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">User</th>
//                 <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Email</th>
//                 <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Phone</th>
//                 <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Role</th>
//                 <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Joined</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filtered.map((user, i) => (
//                 <motion.tr
//                   key={user.id || user._id}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: i * 0.03 }}
//                   className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
//                 >
//                   <td className="px-5 py-4">
//                     <div className="flex items-center gap-3">
//                       <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white text-sm font-bold">
//                         {user.name[0]}
//                       </div>
//                       <span className="text-sm font-medium text-gray-900">{user.name}</span>
//                     </div>
//                   </td>
//                   <td className="px-5 py-4 text-sm text-gray-500">{user.email}</td>
//                   <td className="px-5 py-4 text-sm text-gray-500">{user.phone || 'N/A'}</td>
//                   <td className="px-5 py-4">
//                     <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
//                       user.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'
//                     }`}>
//                       {user.role}
//                     </span>
//                   </td>
//                   <td className="px-5 py-4 text-sm text-gray-400">{user.createdAt?.split('T')[0] || user.createdAt}</td>
//                 </motion.tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {filtered.length === 0 && (
//         <div className="text-center py-16">
//           <p className="text-gray-400">No users found</p>
//         </div>
//       )}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import useStore from "../../store/useStore";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
.au-root { font-family:'DM Sans',sans-serif; }
.au-head { margin-bottom:24px; }
.au-head h1 { font-family:'Syne',sans-serif; font-weight:800; font-size:1.4rem; color:#0f172a; margin:0 0 4px; }
.au-head p  { font-size:.875rem; color:#64748b; margin:0; }
.au-toolbar { display:flex; flex-wrap:wrap; gap:12px; align-items:center; margin-bottom:20px; }
.au-search-wrap { position:relative; min-width:200px; max-width:360px; flex:1; }
.au-search-icon { position:absolute; left:14px; top:50%; transform:translateY(-50%); font-size:.9rem; color:#94a3b8; pointer-events:none; }
.au-search { width:100%; height:42px; padding:0 14px 0 40px; border:1.5px solid #e2e8f0; border-radius:12px; font-family:'DM Sans',sans-serif; font-size:.875rem; color:#1e293b; outline:none; box-sizing:border-box; transition:border-color .2s; background:#fff; }
.au-search:focus { border-color:#06b6d4; box-shadow:0 0 0 3px rgba(6,182,212,.1); }
.au-count { font-size:.83rem; color:#64748b; margin-left:auto; white-space:nowrap; }
.au-count strong { color:#0891b2; font-family:'Syne',sans-serif; }

/* TABLE WRAPPER */
.au-table-wrap { background:#fff; border:1px solid #e8eef4; border-radius:18px; overflow:hidden; box-shadow:0 2px 12px rgba(0,0,0,.05); }
.au-table { width:100%; border-collapse:collapse; }
.au-thead tr { background:#f8fafc; }
.au-th { padding:12px 16px; text-align:left; font-family:'Syne',sans-serif; font-size:.7rem; font-weight:700; color:#94a3b8; text-transform:uppercase; letter-spacing:.08em; border-bottom:1px solid #e8eef4; white-space:nowrap; }
.au-tr { border-bottom:1px solid #f1f5f9; transition:background .15s; }
.au-tr:last-child { border-bottom:none; }
.au-tr:hover { background:#f8fafc; }
.au-td { padding:14px 16px; font-size:.85rem; color:#475569; vertical-align:middle; }
.au-user-cell { display:flex; align-items:center; gap:10px; }
.au-avatar { width:36px; height:36px; border-radius:11px; background:linear-gradient(135deg,#e0f7fa,#dbeafe); color:#0891b2; display:flex; align-items:center; justify-content:center; font-family:'Syne',sans-serif; font-weight:700; font-size:.88rem; flex-shrink:0; }
.au-avatar.admin { background:linear-gradient(135deg,#ede9fe,#e0f7fa); color:#7c3aed; }
.au-name { font-family:'Syne',sans-serif; font-weight:600; font-size:.85rem; color:#0f172a; }
.au-role-pill { font-size:.7rem; font-weight:700; font-family:'Syne',sans-serif; padding:3px 10px; border-radius:50px; text-transform:capitalize; }
.au-role-pill.admin { background:#ede9fe; color:#6d28d9; }
.au-role-pill.user  { background:#f1f5f9; color:#475569; }
.au-date { font-size:.78rem; color:#94a3b8; }

/* MOBILE CARDS (< 680px) */
.au-card-list { display:none; flex-direction:column; gap:10px; }
.au-card { background:#fff; border:1px solid #e8eef4; border-radius:16px; padding:16px; box-shadow:0 1px 6px rgba(0,0,0,.04); }
.au-card-top { display:flex; align-items:center; gap:10px; margin-bottom:10px; }
.au-card-info h3 { font-family:'Syne',sans-serif; font-weight:700; font-size:.88rem; color:#0f172a; margin:0 0 2px; }
.au-card-info p  { font-size:.77rem; color:#94a3b8; margin:0; }
.au-card-meta { display:flex; flex-wrap:wrap; gap:8px; }
.au-meta-tag { font-size:.75rem; color:#64748b; background:#f1f5f9; padding:3px 10px; border-radius:6px; }

.au-empty { padding:48px; text-align:center; }
.au-empty p { color:#94a3b8; font-size:.875rem; }

@media(max-width:680px){
  .au-table-wrap { display:none; }
  .au-card-list { display:flex; }
  .au-toolbar { flex-direction:column; align-items:stretch; }
  .au-search-wrap { max-width:100%; }
}
`;

export default function AdminUsers() {
  const { users, fetchUsers } = useStore();
  const [search, setSearch] = useState("");

  useEffect(() => { fetchUsers(); }, []);

  const filtered = users.filter(u =>
    u.name?.toLowerCase().includes(search.toLowerCase()) ||
    u.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <style>{styles}</style>
      <div className="au-root">
        <div className="au-head">
          <h1>Manage Users</h1>
          <p>{users.length} registered users</p>
        </div>

        <div className="au-toolbar">
          <div className="au-search-wrap">
            <span className="au-search-icon">🔍</span>
            <input className="au-search" placeholder="Search by name or email…" value={search} onChange={e=>setSearch(e.target.value)} />
          </div>
          <span className="au-count"><strong>{filtered.length}</strong> users found</span>
        </div>

        {/* Desktop Table */}
        <div className="au-table-wrap">
          <table className="au-table">
            <thead className="au-thead">
              <tr>
                <th className="au-th">User</th>
                <th className="au-th">Email</th>
                <th className="au-th">Phone</th>
                <th className="au-th">Role</th>
                <th className="au-th">Joined</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0
                ? <tr><td colSpan={5} className="au-empty"><p>No users found</p></td></tr>
                : filtered.map((u,i) => (
                  <tr className="au-tr" key={u.id || u._id}>
                    <td className="au-td">
                      <div className="au-user-cell">
                        <div className={`au-avatar${u.role==="admin"?" admin":""}`}>{u.name?.[0]}</div>
                        <span className="au-name">{u.name}</span>
                      </div>
                    </td>
                    <td className="au-td">{u.email}</td>
                    <td className="au-td">{u.phone || "—"}</td>
                    <td className="au-td"><span className={`au-role-pill ${u.role}`}>{u.role}</span></td>
                    <td className="au-td au-date">{u.createdAt?.split("T")[0] || u.createdAt || "—"}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="au-card-list">
          {filtered.length === 0
            ? <div className="au-empty"><p>No users found</p></div>
            : filtered.map(u => (
              <div className="au-card" key={u.id || u._id}>
                <div className="au-card-top">
                  <div className={`au-avatar${u.role==="admin"?" admin":""}`}>{u.name?.[0]}</div>
                  <div className="au-card-info">
                    <h3>{u.name}</h3>
                    <p>{u.email}</p>
                  </div>
                  <span className={`au-role-pill ${u.role}`} style={{marginLeft:"auto"}}>{u.role}</span>
                </div>
                <div className="au-card-meta">
                  {u.phone && <span className="au-meta-tag">📞 {u.phone}</span>}
                  <span className="au-meta-tag">📅 {u.createdAt?.split("T")[0] || "—"}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
