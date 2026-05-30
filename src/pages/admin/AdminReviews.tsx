import { useEffect, useState } from "react";
import useStore from "../../store/useStore";
import { FiPlus, FiEdit2, FiTrash2, FiX, FiCheck, FiEyeOff } from "react-icons/fi";

/* ─────────────────────────── Styles ─────────────────────────── */
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

.ar-root { font-family:'DM Sans',sans-serif; }

/* Header */
.ar-head { display:flex; align-items:flex-start; justify-content:space-between; flex-wrap:wrap; gap:12px; margin-bottom:24px; }
.ar-head h1 { font-family:'Syne',sans-serif; font-weight:800; font-size:1.4rem; color:#0f172a; margin:0 0 4px; }
.ar-head p  { font-size:.875rem; color:#64748b; margin:0; }
.ar-add-btn {
  display:flex; align-items:center; gap:7px;
  padding:10px 20px; border-radius:12px; border:none; cursor:pointer;
  background:linear-gradient(135deg,#06b6d4,#3b82f6);
  color:#fff; font-family:'Syne',sans-serif; font-weight:700; font-size:.84rem;
  box-shadow:0 4px 14px rgba(6,182,212,.3); transition:opacity .2s;
}
.ar-add-btn:hover { opacity:.9; }

/* Star distribution */
.ar-stars-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:12px; margin-bottom:24px; }
.ar-star-box { background:#fff; border:1px solid #e8eef4; border-radius:14px; padding:14px; text-align:center; box-shadow:0 1px 6px rgba(0,0,0,.04); }
.ar-star-row { font-size:1.1rem; margin-bottom:6px; line-height:1; }
.ar-star-count { font-family:'Syne',sans-serif; font-weight:800; font-size:1.4rem; color:#0f172a; }
.ar-star-pct  { font-size:.73rem; color:#94a3b8; margin-top:2px; }

/* Review list */
.ar-list { display:flex; flex-direction:column; gap:12px; }
.ar-card { background:#fff; border:1px solid #e8eef4; border-radius:18px; padding:20px; transition:box-shadow .2s; }
.ar-card:hover { box-shadow:0 6px 24px rgba(0,0,0,.07); }
.ar-card-top { display:flex; align-items:flex-start; gap:12px; }
.ar-user-img { width:42px; height:42px; border-radius:50%; object-fit:cover; flex-shrink:0; }
.ar-user-img-fallback { width:42px; height:42px; border-radius:50%; background:linear-gradient(135deg,#e0f7fa,#dbeafe); color:#0891b2; display:flex; align-items:center; justify-content:center; font-family:'Syne',sans-serif; font-weight:700; font-size:.95rem; flex-shrink:0; }
.ar-user-info { flex:1; min-width:0; }
.ar-user-row { display:flex; flex-wrap:wrap; align-items:center; gap:8px; margin-bottom:4px; }
.ar-user-name { font-family:'Syne',sans-serif; font-weight:700; font-size:.88rem; color:#0f172a; }
.ar-service    { font-size:.75rem; color:#94a3b8; }
.ar-pill-approved { background:#dcfce7; color:#166534; font-size:.68rem; font-weight:700; font-family:'Syne',sans-serif; padding:2px 9px; border-radius:50px; }
.ar-pill-pending  { background:#fef9c3; color:#92400e; font-size:.68rem; font-weight:700; font-family:'Syne',sans-serif; padding:2px 9px; border-radius:50px; }
.ar-stars { display:flex; align-items:center; gap:2px; margin-bottom:6px; font-size:.85rem; }
.ar-star-filled { color:#f59e0b; }
.ar-star-empty  { color:#e2e8f0; }
.ar-date { font-size:.72rem; color:#94a3b8; margin-left:6px; }
.ar-comment { font-size:.875rem; color:#475569; line-height:1.7; }

.ar-actions { display:flex; gap:6px; flex-shrink:0; }
.ar-action-btn { width:34px; height:34px; border-radius:10px; border:none; cursor:pointer; font-size:1rem; display:flex; align-items:center; justify-content:center; transition:background .15s; background:#f1f5f9; color:#475569; }
.ar-action-btn.approve { color:#16a34a; }
.ar-action-btn.approve:hover { background:#dcfce7; }
.ar-action-btn.hide    { color:#ea580c; }
.ar-action-btn.hide:hover { background:#ffedd5; }
.ar-action-btn.edit    { color:#3b82f6; }
.ar-action-btn.edit:hover { background:#dbeafe; }
.ar-action-btn.delete  { color:#dc2626; }
.ar-action-btn.delete:hover { background:#fee2e2; }

/* Empty */
.ar-empty { background:#fff; border:1px solid #e8eef4; border-radius:18px; padding:56px 24px; text-align:center; }
.ar-empty-icon { font-size:2.5rem; margin-bottom:10px; }
.ar-empty p { color:#94a3b8; font-size:.875rem; margin:0; }

/* ─── MODAL ─── */
.ar-modal-backdrop {
  position:fixed; inset:0; background:rgba(15,23,42,.45); backdrop-filter:blur(6px);
  z-index:999; display:flex; align-items:center; justify-content:center; padding:20px;
}
.ar-modal {
  background:#fff; border-radius:22px; width:100%; max-width:520px;
  box-shadow:0 24px 60px rgba(0,0,0,.18); overflow:hidden; animation:ar-modal-in .2s ease;
}
@keyframes ar-modal-in { from { opacity:0; transform:translateY(12px) scale(.97); } to { opacity:1; transform:none; } }

.ar-modal-header {
  display:flex; align-items:center; justify-content:space-between;
  padding:22px 24px 18px; border-bottom:1px solid #e8eef4;
}
.ar-modal-title { font-family:'Syne',sans-serif; font-weight:800; font-size:1.05rem; color:#0f172a; margin:0; }
.ar-modal-close {
  width:32px; height:32px; border-radius:8px; border:none; background:#f1f5f9;
  color:#475569; cursor:pointer; font-size:1rem; display:flex; align-items:center; justify-content:center;
  transition:background .15s;
}
.ar-modal-close:hover { background:#e2e8f0; }

.ar-modal-body { padding:20px 24px 24px; display:flex; flex-direction:column; gap:16px; }

.ar-form-group { display:flex; flex-direction:column; gap:5px; }
.ar-form-label { font-family:'Syne',sans-serif; font-weight:700; font-size:.78rem; color:#475569; text-transform:uppercase; letter-spacing:.06em; }
.ar-form-input {
  padding:10px 14px; border:1.5px solid #e2e8f0; border-radius:11px;
  font-family:'DM Sans',sans-serif; font-size:.9rem; color:#0f172a;
  transition:border-color .15s; background:#fff; outline:none;
}
.ar-form-input:focus { border-color:#06b6d4; box-shadow:0 0 0 3px rgba(6,182,212,.12); }
textarea.ar-form-input { resize:vertical; min-height:90px; }
.ar-form-row { display:grid; grid-template-columns:1fr 1fr; gap:12px; }

/* Star picker */
.ar-star-picker { display:flex; gap:6px; }
.ar-star-pick { font-size:1.6rem; cursor:pointer; transition:transform .12s; line-height:1; }
.ar-star-pick:hover { transform:scale(1.2); }
.ar-star-pick.filled { color:#f59e0b; }
.ar-star-pick.empty  { color:#e2e8f0; }

.ar-modal-footer { display:flex; gap:10px; justify-content:flex-end; padding:0 24px 22px; }
.ar-btn-cancel {
  padding:10px 20px; border-radius:11px; border:1.5px solid #e2e8f0;
  background:#fff; color:#475569; font-family:'Syne',sans-serif; font-weight:600; font-size:.84rem;
  cursor:pointer; transition:background .15s;
}
.ar-btn-cancel:hover { background:#f1f5f9; }
.ar-btn-save {
  padding:10px 24px; border-radius:11px; border:none;
  background:linear-gradient(135deg,#06b6d4,#3b82f6); color:#fff;
  font-family:'Syne',sans-serif; font-weight:700; font-size:.84rem;
  cursor:pointer; box-shadow:0 4px 14px rgba(6,182,212,.28); transition:opacity .15s;
}
.ar-btn-save:hover { opacity:.9; }
.ar-btn-save:disabled { opacity:.5; cursor:not-allowed; }

/* Responsive */
@media(max-width:640px){
  .ar-stars-grid { grid-template-columns:repeat(3,1fr); }
  .ar-card-top { flex-wrap:wrap; }
  .ar-actions { margin-left:auto; }
  .ar-form-row { grid-template-columns:1fr; }
}
@media(max-width:380px){ .ar-stars-grid { grid-template-columns:repeat(2,1fr); } }
`;

/* ─────────────────────── Default form state ─────────────────────── */
const defaultForm = {
  userName: "",
  serviceTitle: "",
  rating: 5,
  comment: "",
  isApproved: false,
};

/* ─────────────────────────── Component ─────────────────────────── */
export default function AdminReviews() {
  const { reviews, fetchAllReviews, addReview, updateReview, deleteReview, toggleReviewApproval } =
    useStore() as any;

  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ ...defaultForm });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchAllReviews();
  }, []);

  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((s: number, r: any) => s + r.rating, 0) / reviews.length).toFixed(1)
      : "0";

  /* ── Modal helpers ── */
  const openAdd = () => {
    setEditingId(null);
    setForm({ ...defaultForm });
    setModalOpen(true);
  };

  const openEdit = (r: any) => {
    setEditingId(r.id || r._id);
    setForm({
      userName: r.userName || "",
      serviceTitle: r.serviceTitle || "",
      rating: r.rating || 5,
      comment: r.comment || "",
      isApproved: r.isApproved || false,
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingId(null);
    setForm({ ...defaultForm });
  };

  /* ── Save (add or edit) ── */
  const handleSave = async () => {
    if (!form.userName.trim() || !form.comment.trim()) return;
    setSaving(true);
    try {
      if (editingId) {
        await updateReview(editingId, {
          userName: form.userName,
          serviceTitle: form.serviceTitle,
          rating: form.rating,
          comment: form.comment,
          isApproved: form.isApproved,
        });
      } else {
        await addReview({
          userName: form.userName,
          serviceTitle: form.serviceTitle,
          rating: form.rating,
          comment: form.comment,
          isApproved: form.isApproved,
        });
      }
      closeModal();
      fetchAllReviews();
    } catch {
      // silently ignore
    } finally {
      setSaving(false);
    }
  };

  /* ── Delete ── */
  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this review?")) return;
    try {
      await deleteReview(id);
    } catch {}
  };

  /* ── Toggle approval ── */
  const handleToggle = async (id: string) => {
    try {
      await toggleReviewApproval(id);
    } catch {}
  };

  return (
    <>
      <style>{styles}</style>
      <div className="ar-root">

        {/* Header */}
        <div className="ar-head">
          <div>
            <h1>Manage Reviews</h1>
            <p>{reviews.length} reviews · Average: {avgRating} ⭐</p>
          </div>
          <button className="ar-add-btn" onClick={openAdd}>
            <FiPlus style={{marginRight:4}}/> Add Review
          </button>
        </div>

        {/* Star distribution */}
        <div className="ar-stars-grid">
          {[5, 4, 3, 2, 1].map((n) => {
            const count = reviews.filter((r: any) => r.rating === n).length;
            const pct = reviews.length > 0 ? Math.round((count / reviews.length) * 100) : 0;
            return (
              <div className="ar-star-box" key={n}>
                <div className="ar-star-row">{"★".repeat(n)}</div>
                <div className="ar-star-count">{count}</div>
                <div className="ar-star-pct">{pct}%</div>
              </div>
            );
          })}
        </div>

        {/* Review cards */}
        {reviews.length === 0 ? (
          <div className="ar-empty">
            <div className="ar-empty-icon">⭐</div>
            <p>No reviews yet. Click "Add Review" to create one.</p>
          </div>
        ) : (
          <div className="ar-list">
            {reviews.map((r: any) => (
              <div className="ar-card" key={r.id || r._id}>
                <div className="ar-card-top">
                  {r.userImage ? (
                    <img className="ar-user-img" src={r.userImage} alt={r.userName} loading="lazy" />
                  ) : (
                    <div className="ar-user-img-fallback">{r.userName?.[0]?.toUpperCase()}</div>
                  )}
                  <div className="ar-user-info">
                    <div className="ar-user-row">
                      <span className="ar-user-name">{r.userName}</span>
                      {r.serviceTitle && <span className="ar-service">· {r.serviceTitle}</span>}
                      {r.isApproved ? (
                        <span className="ar-pill-approved">Approved</span>
                      ) : (
                        <span className="ar-pill-pending">Pending</span>
                      )}
                    </div>
                    <div className="ar-stars">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i} className={i <= r.rating ? "ar-star-filled" : "ar-star-empty"}>★</span>
                      ))}
                      <span className="ar-date">
                        {r.createdAt ? new Date(r.createdAt).toLocaleDateString("en-IN", { day:"2-digit", month:"short", year:"numeric" }) : ""}
                      </span>
                    </div>
                    <p className="ar-comment">{r.comment}</p>
                  </div>
                  <div className="ar-actions">
                    <button
                      className={`ar-action-btn ${r.isApproved ? "hide" : "approve"}`}
                      title={r.isApproved ? "Hide review" : "Approve review"}
                      onClick={() => handleToggle(r.id || r._id)}
                    >
                      {r.isApproved ? <FiEyeOff size={15}/> : <FiCheck size={15}/>}
                    </button>
                    <button
                      className="ar-action-btn edit"
                      title="Edit review"
                      onClick={() => openEdit(r)}
                    >
                      <FiEdit2 size={15}/>
                    </button>
                    <button
                      className="ar-action-btn delete"
                      title="Delete review"
                      onClick={() => handleDelete(r.id || r._id)}
                    >
                      <FiTrash2 size={15}/>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ─── Add / Edit Modal ─── */}
      {modalOpen && (
        <div className="ar-modal-backdrop" onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <div className="ar-modal">
            <div className="ar-modal-header">
              <p className="ar-modal-title">{editingId ? "Edit Review" : "Add Review"}</p>
              <button className="ar-modal-close" onClick={closeModal}><FiX/></button>
            </div>

            <div className="ar-modal-body">
              <div className="ar-form-row">
                <div className="ar-form-group">
                  <label className="ar-form-label">Customer Name *</label>
                  <input
                    className="ar-form-input"
                    placeholder="e.g. Priya Sharma"
                    value={form.userName}
                    onChange={(e) => setForm({ ...form, userName: e.target.value })}
                  />
                </div>
                <div className="ar-form-group">
                  <label className="ar-form-label">Service</label>
                  <input
                    className="ar-form-input"
                    placeholder="e.g. Deep Cleaning"
                    value={form.serviceTitle}
                    onChange={(e) => setForm({ ...form, serviceTitle: e.target.value })}
                  />
                </div>
              </div>

              <div className="ar-form-group">
                <label className="ar-form-label">Rating *</label>
                <div className="ar-star-picker">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      className={`ar-star-pick ${n <= form.rating ? "filled" : "empty"}`}
                      onClick={() => setForm({ ...form, rating: n })}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div className="ar-form-group">
                <label className="ar-form-label">Review Comment *</label>
                <textarea
                  className="ar-form-input"
                  placeholder="Write the customer's review here..."
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                />
              </div>

              <div className="ar-form-group" style={{ flexDirection: "row", alignItems: "center", gap: "10px" }}>
                <input
                  type="checkbox"
                  id="ar-approved"
                  checked={form.isApproved}
                  onChange={(e) => setForm({ ...form, isApproved: e.target.checked })}
                  style={{ width: "16px", height: "16px", accentColor: "#06b6d4", cursor: "pointer" }}
                />
                <label htmlFor="ar-approved" className="ar-form-label" style={{ textTransform: "none", cursor: "pointer", marginBottom: 0 }}>
                  Approve immediately (show on website)
                </label>
              </div>
            </div>

            <div className="ar-modal-footer">
              <button className="ar-btn-cancel" onClick={closeModal}>Cancel</button>
              <button
                className="ar-btn-save"
                onClick={handleSave}
                disabled={saving || !form.userName.trim() || !form.comment.trim()}
              >
                {saving ? "Saving…" : editingId ? "Save Changes" : "Add Review"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
