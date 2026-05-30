import { useEffect, useState } from "react";
import useStore from "../../store/useStore";
import { FiMail, FiPhone, FiTrash2, FiCheckCircle, FiEye, FiRefreshCw, FiInbox } from "react-icons/fi";

/* ─────────────────────────── Styles ─────────────────────────── */
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

.ac-root { font-family:'DM Sans',sans-serif; }

/* Header */
.ac-head { display:flex; align-items:flex-start; justify-content:space-between; flex-wrap:wrap; gap:12px; margin-bottom:24px; }
.ac-head h1 { font-family:'Syne',sans-serif; font-weight:800; font-size:1.4rem; color:#0f172a; margin:0 0 4px; }
.ac-head p  { font-size:.875rem; color:#64748b; margin:0; }

/* Filter tabs */
.ac-filters { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:20px; }
.ac-filter-btn {
  padding:7px 16px; border-radius:50px; border:1.5px solid #e2e8f0;
  font-family:'Syne',sans-serif; font-weight:700; font-size:.76rem;
  cursor:pointer; background:#fff; color:#64748b; transition:all .15s;
}
.ac-filter-btn.active { background:#0f172a; color:#fff; border-color:#0f172a; }
.ac-filter-btn:not(.active):hover { background:#f1f5f9; }

/* Stats row */
.ac-stats { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:24px; }
.ac-stat { background:#fff; border:1px solid #e8eef4; border-radius:14px; padding:16px; text-align:center; }
.ac-stat-num { font-family:'Syne',sans-serif; font-weight:800; font-size:1.5rem; color:#0f172a; }
.ac-stat-label { font-size:.73rem; color:#94a3b8; margin-top:2px; }

/* Card list */
.ac-list { display:flex; flex-direction:column; gap:12px; }
.ac-card { background:#fff; border:1px solid #e8eef4; border-radius:18px; padding:20px; transition:box-shadow .2s; }
.ac-card:hover { box-shadow:0 6px 24px rgba(0,0,0,.07); }
.ac-card.new-msg { border-left:3px solid #06b6d4; }
.ac-card-top { display:flex; align-items:flex-start; justify-content:space-between; gap:12px; flex-wrap:wrap; }

.ac-user { display:flex; align-items:center; gap:10px; flex:1; min-width:0; }
.ac-avatar { width:42px; height:42px; border-radius:12px; background:linear-gradient(135deg,#e0f7fa,#dbeafe); color:#0891b2; display:flex; align-items:center; justify-content:center; font-family:'Syne',sans-serif; font-weight:700; font-size:.95rem; flex-shrink:0; }
.ac-user-name  { font-family:'Syne',sans-serif; font-weight:700; font-size:.88rem; color:#0f172a; margin:0 0 3px; }
.ac-user-meta  { display:flex; flex-wrap:wrap; gap:10px; }
.ac-user-meta span { font-size:.75rem; color:#64748b; display:flex; align-items:center; gap:4px; }

.ac-actions { display:flex; gap:6px; flex-shrink:0; flex-wrap:wrap; align-items:flex-start; }
.ac-action-btn {
  padding:7px 13px; border-radius:10px; border:none;
  font-family:'Syne',sans-serif; font-weight:600; font-size:.73rem;
  cursor:pointer; transition:background .15s;
  display:flex; align-items:center; gap:5px; white-space:nowrap;
}
.ac-action-btn.read    { background:#fef9c3; color:#92400e; }
.ac-action-btn.read:hover { background:#fde68a; }
.ac-action-btn.replied { background:#dcfce7; color:#166534; }
.ac-action-btn.replied:hover { background:#bbf7d0; }
.ac-action-btn.delete  { background:#fee2e2; color:#dc2626; }
.ac-action-btn.delete:hover { background:#fecaca; }

.ac-message { background:#f8fafc; border-left:3px solid #06b6d4; border-radius:0 10px 10px 0; padding:12px 14px; margin-top:14px; font-size:.85rem; color:#334155; line-height:1.7; }
.ac-footer { display:flex; align-items:center; justify-content:space-between; margin-top:10px; flex-wrap:wrap; gap:6px; }
.ac-date { font-size:.73rem; color:#94a3b8; }

/* Status pills */
.ac-pill { font-size:.68rem; font-weight:700; font-family:'Syne',sans-serif; padding:3px 10px; border-radius:50px; text-transform:capitalize; }
.pill-red    { background:#fee2e2; color:#991b1b; }
.pill-yellow { background:#fef9c3; color:#92400e; }
.pill-green  { background:#dcfce7; color:#166534; }

/* Empty */
.ac-empty { background:#fff; border:1px solid #e8eef4; border-radius:18px; padding:56px 24px; text-align:center; }
.ac-empty-icon { font-size:2.5rem; margin-bottom:10px; }
.ac-empty p { color:#94a3b8; font-size:.875rem; margin:0; }

/* Refresh button */
.ac-refresh-btn {
  display:flex; align-items:center; gap:6px;
  padding:9px 16px; border-radius:11px; border:1.5px solid #e2e8f0;
  background:#fff; color:#475569; font-family:'Syne',sans-serif; font-weight:600; font-size:.78rem;
  cursor:pointer; transition:background .15s;
}
.ac-refresh-btn:hover { background:#f1f5f9; }

@media(max-width:600px){
  .ac-stats { grid-template-columns:repeat(2,1fr); }
  .ac-card-top { flex-direction:column; }
  .ac-actions { flex-direction:row; }
}
`;

const STATUS_COLOR: Record<string, string> = {
  new: "pill-red",
  read: "pill-yellow",
  replied: "pill-green",
};

const STATUS_FILTERS = ["all", "new", "read", "replied"] as const;

export default function AdminContacts() {
  const { contacts, fetchContacts, updateContactStatus, deleteContact } = useStore() as any;
  const [filter, setFilter] = useState<"all" | "new" | "read" | "replied">("all");
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try { await fetchContacts(); } catch {} finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const filtered = filter === "all"
    ? contacts
    : contacts.filter((c: any) => c.status === filter);

  const countNew      = contacts.filter((c: any) => c.status === "new").length;
  const countRead     = contacts.filter((c: any) => c.status === "read").length;
  const countReplied  = contacts.filter((c: any) => c.status === "replied").length;

  const handleStatus = async (id: string, status: string) => {
    try { await updateContactStatus(id, status); } catch {}
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this message?")) return;
    try { await deleteContact(id); } catch {}
  };

  const fmtDate = (d: string) => {
    if (!d) return "";
    return new Date(d).toLocaleString("en-IN", {
      day: "2-digit", month: "short", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });
  };

  return (
    <>
      <style>{styles}</style>
      <div className="ac-root">

        {/* Header */}
        <div className="ac-head">
          <div>
            <h1>Contact Messages</h1>
            <p>{contacts.length} total messages · {countNew} new</p>
          </div>
          <button className="ac-refresh-btn" onClick={load} disabled={loading}>
            <FiRefreshCw size={14}/> {loading ? "Loading…" : "Refresh"}
          </button>
        </div>

        {/* Stats */}
        <div className="ac-stats">
          <div className="ac-stat">
            <div className="ac-stat-num" style={{ color: "#dc2626" }}>{countNew}</div>
            <div className="ac-stat-label">🔴 New</div>
          </div>
          <div className="ac-stat">
            <div className="ac-stat-num" style={{ color: "#92400e" }}>{countRead}</div>
            <div className="ac-stat-label">🟡 Read</div>
          </div>
          <div className="ac-stat">
            <div className="ac-stat-num" style={{ color: "#166534" }}>{countReplied}</div>
            <div className="ac-stat-label">🟢 Replied</div>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="ac-filters">
          {STATUS_FILTERS.map((f) => (
            <button
              key={f}
              className={`ac-filter-btn${filter === f ? " active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f === "all" ? `All (${contacts.length})` : `${f.charAt(0).toUpperCase() + f.slice(1)} (${contacts.filter((c: any) => c.status === f).length})`}
            </button>
          ))}
        </div>

        {/* Message cards */}
        {filtered.length === 0 ? (
          <div className="ac-empty">
            <div className="ac-empty-icon">📭</div>
            <p>{contacts.length === 0 ? "No messages from website visitors yet." : "No messages match this filter."}</p>
          </div>
        ) : (
          <div className="ac-list">
            {filtered.map((c: any) => (
              <div className={`ac-card${c.status === "new" ? " new-msg" : ""}`} key={c.id || c._id}>
                <div className="ac-card-top">
                  <div className="ac-user">
                    <div className="ac-avatar">{c.name?.[0]?.toUpperCase()}</div>
                    <div>
                      <div className="ac-user-name">{c.name}</div>
                      <div className="ac-user-meta">
                        <span><FiMail size={12} style={{display:'inline',marginRight:2}}/>{c.email}</span>
                        {c.phone && <span><FiPhone size={12} style={{display:'inline',marginRight:2}}/>{c.phone}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="ac-actions">
                    {c.status !== "read" && (
                      <button
                        className="ac-action-btn read"
                        onClick={() => handleStatus(c.id || c._id, "read")}
                      >
                        <FiEye size={13} style={{marginRight:4}}/> Mark Read
                      </button>
                    )}
                    {c.status !== "replied" && (
                      <button
                        className="ac-action-btn replied"
                        onClick={() => handleStatus(c.id || c._id, "replied")}
                      >
                        <FiCheckCircle size={13} style={{marginRight:4}}/> Replied
                      </button>
                    )}
                    <button
                      className="ac-action-btn delete"
                      onClick={() => handleDelete(c.id || c._id)}
                    >
                      <FiTrash2 size={13}/>
                    </button>
                  </div>
                </div>

                <div className="ac-message">{c.message}</div>

                <div className="ac-footer">
                  <span className="ac-date"><FiMail size={11} style={{display:'inline',marginRight:3}}/>{fmtDate(c.createdAt)}</span>
                  <span className={`ac-pill ${STATUS_COLOR[c.status] || "pill-red"}`}>
                    {c.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
