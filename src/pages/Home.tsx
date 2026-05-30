import { useMemo, useEffect } from "react";
import useStore from "../store/useStore";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

.hp-root { font-family:'DM Sans',sans-serif; color:#1e293b; background:#fff; overflow-x:hidden; }

/* ── HERO ── */
.hp-hero { min-height:100vh; display:flex; align-items:center; background:linear-gradient(145deg,#e0f7fa 0%,#e8f4fd 42%,#f0fdf4 100%); padding:100px 24px 60px; position:relative; overflow:hidden; }
.hp-hero::before { content:''; position:absolute; top:-200px; right:-180px; width:600px; height:600px; border-radius:50%; background:radial-gradient(circle,rgba(6,182,212,.12) 0%,transparent 70%); pointer-events:none; }
.hp-hero-inner { max-width:1260px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:56px; align-items:center; position:relative; z-index:1; }
.hp-badge { display:inline-flex; align-items:center; gap:6px; background:#e0f7fa; color:#0891b2; font-family:'Syne',sans-serif; font-weight:700; font-size:.78rem; padding:6px 14px; border-radius:50px; text-transform:uppercase; letter-spacing:.07em; margin-bottom:18px; }
.hp-hero h1 { font-family:'Syne',sans-serif; font-weight:800; font-size:clamp(2.2rem,4.5vw,3.5rem); color:#0f172a; line-height:1.12; margin:0 0 18px; }
.hp-hero h1 span { background:linear-gradient(135deg,#06b6d4,#3b82f6); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.hp-sub { font-size:1.05rem; color:#64748b; line-height:1.75; margin:0 0 28px; font-weight:300; max-width:480px; }
.hp-btns { display:flex; gap:14px; flex-wrap:wrap; margin-bottom:32px; }
.hp-btn-primary { background:linear-gradient(135deg,#06b6d4,#3b82f6); color:#fff; border:none; padding:14px 28px; border-radius:14px; font-family:'Syne',sans-serif; font-weight:700; font-size:.92rem; cursor:pointer; text-decoration:none; display:inline-block; transition:transform .2s,box-shadow .2s; box-shadow:0 4px 18px rgba(6,182,212,.3); }
.hp-btn-primary:hover { transform:translateY(-2px); box-shadow:0 10px 30px rgba(6,182,212,.42); }
.hp-btn-outline { background:transparent; color:#0891b2; border:2px solid #06b6d4; padding:12px 28px; border-radius:14px; font-family:'Syne',sans-serif; font-weight:700; font-size:.92rem; cursor:pointer; text-decoration:none; display:inline-block; transition:all .2s; }
.hp-btn-outline:hover { background:#e0f7fa; }
.hp-pills { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
.hp-pill { display:flex; align-items:center; gap:8px; background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:10px 14px; font-size:.84rem; font-weight:500; color:#334155; box-shadow:0 2px 8px rgba(0,0,0,.04); }
.hp-pill-check { width:20px; height:20px; border-radius:50%; background:linear-gradient(135deg,#06b6d4,#3b82f6); display:flex; align-items:center; justify-content:center; color:#fff; font-size:.7rem; flex-shrink:0; }

/* HERO VISUAL */
.hp-visual { display:flex; flex-direction:column; gap:16px; }
.hp-visual-card { background:#fff; border-radius:22px; padding:22px; box-shadow:0 16px 50px rgba(0,0,0,.09); border:1px solid rgba(255,255,255,.7); }
.hp-visual-card-blue { background:linear-gradient(145deg,#e0f7fa,#dbeafe); }
.hp-chips { display:flex; flex-wrap:wrap; gap:8px; margin-top:8px; }
.hp-chip { background:linear-gradient(135deg,#e0f7fa,#dbeafe); color:#0891b2; font-family:'Syne',sans-serif; font-size:.76rem; font-weight:700; padding:5px 14px; border-radius:50px; }
.hp-stats-row { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
.hp-stat { background:#fff; border-radius:16px; padding:16px 12px; text-align:center; box-shadow:0 4px 16px rgba(0,0,0,.07); }
.hp-stat-num { font-family:'Syne',sans-serif; font-weight:800; font-size:1.6rem; background:linear-gradient(135deg,#06b6d4,#3b82f6); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.hp-stat-lbl { font-size:.72rem; color:#94a3b8; margin-top:3px; }
.hp-visual-title { font-family:'Syne',sans-serif; font-weight:700; font-size:1rem; color:#0f172a; margin-bottom:6px; }

/* ── STATS BAND ── */
.hp-band { background:#fff; border-top:1px solid #e8eef4; border-bottom:1px solid #e8eef4; padding:48px 24px; }
.hp-band-inner { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
.hp-band-item { background:#f8fafc; border:1px solid #e8eef4; border-radius:18px; padding:22px; text-align:center; }
.hp-band-val { font-family:'Syne',sans-serif; font-weight:800; font-size:1.9rem; color:#0f172a; }
.hp-band-lbl { font-size:.75rem; color:#94a3b8; margin-top:5px; text-transform:uppercase; letter-spacing:.08em; font-weight:500; }

/* ── SERVICES ── */
.hp-services { padding:72px 24px; background:#f8fafc; }
.hp-sec-inner { max-width:1200px; margin:0 auto; }
.hp-sec-head { text-align:center; margin-bottom:48px; }
.hp-sec-label { display:inline-block; background:#e0f7fa; color:#0891b2; font-family:'Syne',sans-serif; font-weight:700; font-size:.76rem; padding:5px 14px; border-radius:50px; text-transform:uppercase; letter-spacing:.07em; margin-bottom:12px; }
.hp-sec-head h2 { font-family:'Syne',sans-serif; font-weight:800; font-size:clamp(1.7rem,3vw,2.4rem); color:#0f172a; margin:0 0 10px; }
.hp-sec-head p { color:#64748b; font-size:.95rem; font-weight:300; max-width:520px; margin:0 auto; line-height:1.7; }
.hp-svc-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
.hp-svc-card { background:#fff; border-radius:20px; overflow:hidden; border:1px solid #e8eef4; box-shadow:0 2px 12px rgba(0,0,0,.05); transition:transform .25s,box-shadow .25s; }
.hp-svc-card:hover { transform:translateY(-6px); box-shadow:0 20px 50px rgba(8,145,178,.13); border-color:#bae6fd; }
.hp-svc-img { height:180px; object-fit:cover; width:100%; display:block; transition:transform .5s; }
.hp-svc-card:hover .hp-svc-img { transform:scale(1.06); }
.hp-svc-img-wrap { overflow:hidden; position:relative; }
.hp-svc-price { position:absolute; top:12px; right:12px; background:#fff; border-radius:10px; padding:4px 12px; font-family:'Syne',sans-serif; font-weight:700; font-size:.78rem; color:#0f172a; box-shadow:0 2px 8px rgba(0,0,0,.12); }
.hp-svc-body { padding:20px; }
.hp-svc-top { display:flex; align-items:flex-start; justify-content:space-between; margin-bottom:8px; }
.hp-svc-name { font-family:'Syne',sans-serif; font-weight:700; font-size:1.05rem; color:#0f172a; }
.hp-svc-rating { display:flex; align-items:center; gap:4px; background:#fefce8; border-radius:8px; padding:3px 8px; }
.hp-svc-rating span { font-size:.78rem; font-weight:700; color:#92400e; }
.hp-svc-desc { font-size:.84rem; color:#64748b; line-height:1.65; margin-bottom:16px; }
.hp-svc-btn { width:100%; border:1.5px solid #e2e8f0; background:#f8fafc; border-radius:10px; padding:10px; font-family:'Syne',sans-serif; font-weight:600; font-size:.83rem; color:#334155; cursor:pointer; transition:all .2s; text-decoration:none; display:block; text-align:center; }
.hp-svc-btn:hover { background:#e0f7fa; border-color:#06b6d4; color:#0891b2; }

/* ── REVIEWS ── */
.hp-reviews { padding:72px 24px; background:#fff; }
.hp-rev-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
.hp-rev-card { background:#f8fafc; border:1px solid #e8eef4; border-radius:20px; padding:24px; }
.hp-rev-stars { color:#f59e0b; font-size:1rem; margin-bottom:10px; letter-spacing:2px; }
.hp-rev-text { font-size:.87rem; color:#475569; line-height:1.7; margin-bottom:14px; font-style:italic; }
.hp-rev-author { font-family:'Syne',sans-serif; font-weight:700; font-size:.85rem; color:#0f172a; }
.hp-rev-service { font-size:.75rem; color:#94a3b8; margin-top:2px; }

/* ── FEATURES ── */
.hp-features { background:#0f172a; padding:72px 24px; }
.hp-feat-inner { max-width:1200px; margin:0 auto; }
.hp-feat-inner .hp-sec-label { background:rgba(6,182,212,.15); color:#67e8f9; }
.hp-feat-inner .hp-sec-head h2 { color:#fff; }
.hp-feat-inner .hp-sec-head p { color:#94a3b8; }
.hp-feat-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
.hp-feat-card { background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.08); border-radius:20px; padding:28px; }
.hp-feat-icon { font-size:1.8rem; margin-bottom:16px; }
.hp-feat-card h3 { font-family:'Syne',sans-serif; font-weight:700; font-size:1rem; color:#e2e8f0; margin:0 0 8px; }
.hp-feat-card p  { font-size:.84rem; color:#94a3b8; line-height:1.7; margin:0; }
.hp-feat-cta { grid-column:1/-1; background:linear-gradient(135deg,#0c4a6e,#1e40af); border:none; border-radius:20px; padding:0; overflow:hidden; display:grid; grid-template-columns:1fr 1fr; }
.hp-feat-cta-text { padding:36px; }
.hp-feat-cta-text h3 { font-family:'Syne',sans-serif; font-weight:800; font-size:1.4rem; color:#fff; margin:0 0 10px; }
.hp-feat-cta-text p  { font-size:.88rem; color:rgba(255,255,255,.7); margin:0 0 20px; line-height:1.65; }
.hp-feat-cta-btn { background:#fff; color:#1e40af; border:none; padding:12px 22px; border-radius:12px; font-family:'Syne',sans-serif; font-weight:700; font-size:.85rem; cursor:pointer; text-decoration:none; display:inline-block; }
.hp-feat-cta-img { height:200px; }
.hp-feat-cta-img img { width:100%; height:100%; object-fit:cover; }

/* ── FAQ ── */
.hp-faq { padding:72px 24px; background:#fff; }
.hp-faq-inner { max-width:720px; margin:0 auto; }
.hp-faq-list { display:flex; flex-direction:column; gap:14px; margin-top:0; }
.hp-faq-item { background:#f8fafc; border:1px solid #e8eef4; border-radius:16px; overflow:hidden; }
.hp-faq-item summary { list-style:none; padding:18px 22px; font-family:'Syne',sans-serif; font-weight:700; font-size:.92rem; color:#0f172a; cursor:pointer; display:flex; align-items:center; justify-content:space-between; }
.hp-faq-item summary::-webkit-details-marker { display:none; }
.hp-faq-item summary::after { content:'＋'; color:#06b6d4; font-size:1.1rem; transition:transform .2s; }
.hp-faq-item[open] summary::after { content:'－'; }
.hp-faq-item p { padding:0 22px 18px; font-size:.88rem; color:#64748b; line-height:1.75; margin:0; }

/* ── CTA ── */
.hp-cta { background:linear-gradient(135deg,#0c4a6e,#1e40af); padding:72px 24px; text-align:center; }
.hp-cta-inner { max-width:640px; margin:0 auto; }
.hp-cta h2 { font-family:'Syne',sans-serif; font-weight:800; font-size:clamp(1.8rem,4vw,2.8rem); color:#fff; margin:0 0 14px; }
.hp-cta p  { color:rgba(255,255,255,.72); font-size:1rem; font-weight:300; margin:0 0 32px; line-height:1.7; }
.hp-cta-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
.hp-cta-btn-white { background:#fff; color:#1e40af; border:none; padding:14px 32px; border-radius:14px; font-family:'Syne',sans-serif; font-weight:700; font-size:.92rem; cursor:pointer; text-decoration:none; display:inline-block; transition:transform .2s; box-shadow:0 4px 18px rgba(0,0,0,.15); }
.hp-cta-btn-white:hover { transform:translateY(-2px); }
.hp-cta-btn-border { background:transparent; color:#fff; border:2px solid rgba(255,255,255,.5); padding:12px 32px; border-radius:14px; font-family:'Syne',sans-serif; font-weight:700; font-size:.92rem; cursor:pointer; text-decoration:none; display:inline-block; transition:all .2s; }
.hp-cta-btn-border:hover { background:rgba(255,255,255,.1); }

/* RESPONSIVE */
@media(max-width:1024px){
  .hp-hero-inner { grid-template-columns:1fr; }
  .hp-visual,.hp-stats-row { display:none; }
  .hp-svc-grid { grid-template-columns:1fr 1fr; }
  .hp-feat-grid { grid-template-columns:1fr 1fr; }
  .hp-feat-cta { grid-column:1/-1; }
  .hp-rev-grid { grid-template-columns:1fr 1fr; }
}
@media(max-width:768px){
  .hp-band-inner { grid-template-columns:repeat(2,1fr); }
  .hp-svc-grid  { grid-template-columns:1fr; }
  .hp-feat-grid { grid-template-columns:1fr; }
  .hp-feat-cta  { grid-template-columns:1fr; }
  .hp-feat-cta-img { height:160px; }
  .hp-pills { grid-template-columns:1fr; }
  .hp-rev-grid { grid-template-columns:1fr; }
}
@media(max-width:480px){
  .hp-band-inner { grid-template-columns:1fr 1fr; gap:12px; }
  .hp-hero,.hp-services,.hp-features,.hp-faq,.hp-cta { padding:52px 18px; }
}
`;

const FALLBACK_SERVICES = [
  { id:'1', title:"Home Deep Cleaning", price:3999, description:"Complete top-to-bottom home cleaning with eco-friendly products and trained staff.", image:"https://images.pexels.com/photos/6195124/pexels-photo-6195124.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600" },
  { id:'2', title:"Office Cleaning",     price:6499, description:"Professional workspace cleaning to maintain a hygienic and productive environment.", image:"https://images.pexels.com/photos/6197108/pexels-photo-6197108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600" },
  { id:'3', title:"Sofa Steam Cleaning", price:2499, description:"Deep steam cleaning for sofas and upholstery to restore like-new freshness.", image:"https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600" },
];

const bandStats = [
  { val:"500+",  lbl:"Happy Clients" },
  { val:"8+",    lbl:"Services" },
  { val:"50+",   lbl:"Expert Cleaners" },
  { val:"99%",   lbl:"Satisfaction" },
];

const faqs = [
  { q:"How can I book a cleaning service?",   a:"You can book online through our website booking form, or call us directly on +91 9458606691 or +91 8796026236." },
  { q:"Do you provide same day service?",     a:"Yes, same-day service is available depending on your location and slot availability." },
  { q:"Are your cleaners verified?",          a:"All staff are trained, background-checked, and verified before joining our team." },
  { q:"What areas do you serve?",             a:"We serve across Delhi NCR including Rohini, Pitampura, Mangol Puri, and surrounding areas." },
  { q:"Do you use eco-friendly products?",    a:"Yes, we use non-toxic, eco-friendly cleaning solutions that are safe for families and pets." },
];

export default function HomePage() {
  const highlights = useMemo(() => ["Verified Staff","Same Day Service","Eco-Friendly Products","Affordable Pricing"], []);
  const { services: dbServices, reviews: dbReviews, fetchServices, fetchReviews } = useStore();

  useEffect(() => {
    fetchServices();
    fetchReviews();
  }, []);

  // Use DB services if available, otherwise use fallback
  const displayServices = dbServices.length > 0
    ? dbServices.slice(0, 6).map(s => ({
        id: s.id || s._id || '',
        title: s.title,
        price: s.price,
        description: s.description,
        image: (s as { image?: string }).image || 'https://images.pexels.com/photos/6195124/pexels-photo-6195124.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
      }))
    : FALLBACK_SERVICES;

  // Approved reviews from DB
  const displayReviews = dbReviews.filter(r => (r as { approved?: boolean }).approved !== false).slice(0, 3);

  return (
    <>
      <style>{styles}</style>
      <div className="hp-root">

        {/* HERO */}
        <section className="hp-hero">
          <div className="hp-hero-inner">
            <div>
              <div className="hp-badge">⭐ Trusted by 500+ customers in Delhi NCR</div>
              <h1>Professional <span>Cleaning Services</span> You Can Trust</h1>
              <p className="hp-sub">Pearl Dusting provides premium home, office, bathroom, sofa, deep cleaning and sanitization services with trusted professionals across Delhi NCR.</p>
              <div className="hp-btns">
                <a href="/booking" className="hp-btn-primary">🗓 Book Cleaning</a>
                <a href="/services" className="hp-btn-outline">Explore Services →</a>
              </div>
              <div className="hp-pills">
                {highlights.map((h,i) => (
                  <div className="hp-pill" key={i}>
                    <div className="hp-pill-check">✓</div>
                    {h}
                  </div>
                ))}
              </div>
            </div>
            <div className="hp-visual">
              <div className="hp-visual-card hp-visual-card-blue">
                <div className="hp-visual-title">✨ Services We Offer</div>
                <div className="hp-chips">
                  {["🏠 Home","🏢 Office","🚿 Bathroom","🛋 Sofa","🍳 Kitchen","🪟 Windows"].map((c,i)=>(
                    <span className="hp-chip" key={i}>{c}</span>
                  ))}
                </div>
              </div>
              <div className="hp-stats-row">
                {[{n:"500+",l:"Happy Clients"},{n:"8+",l:"Services"},{n:"24/7",l:"Support"}].map((s,i)=>(
                  <div className="hp-stat" key={i}>
                    <div className="hp-stat-num">{s.n}</div>
                    <div className="hp-stat-lbl">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAND */}
        <div className="hp-band">
          <div className="hp-band-inner">
            {bandStats.map((s,i) => (
              <div className="hp-band-item" key={i}>
                <div className="hp-band-val">{s.val}</div>
                <div className="hp-band-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES — Dynamic from DB */}
        <section className="hp-services">
          <div className="hp-sec-inner">
            <div className="hp-sec-head">
              <span className="hp-sec-label">Our Services</span>
              <h2>Premium Cleaning Solutions</h2>
              <p>From regular home cleaning to specialized deep cleaning — we've got every corner covered.</p>
            </div>
            <div className="hp-svc-grid">
              {displayServices.map((s,i) => (
                <div className="hp-svc-card" key={s.id || i}>
                  <div className="hp-svc-img-wrap">
                    <img className="hp-svc-img" src={s.image} alt={s.title} loading="lazy" />
                    <div className="hp-svc-price">₹{s.price?.toLocaleString()}</div>
                  </div>
                  <div className="hp-svc-body">
                    <div className="hp-svc-top">
                      <div className="hp-svc-name">{s.title}</div>
                      <div className="hp-svc-rating"><span>★</span><span>4.9</span></div>
                    </div>
                    <div className="hp-svc-desc">{s.description}</div>
                    <a href="/booking" className="hp-svc-btn">Book Now →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS — Dynamic from DB */}
        {displayReviews.length > 0 && (
          <section className="hp-reviews">
            <div className="hp-sec-inner">
              <div className="hp-sec-head">
                <span className="hp-sec-label">Reviews</span>
                <h2>What Our Customers Say</h2>
                <p>Real feedback from real customers across Delhi NCR.</p>
              </div>
              <div className="hp-rev-grid">
                {displayReviews.map((r, i) => (
                  <div className="hp-rev-card" key={(r as { id?: string }).id || i}>
                    <div className="hp-rev-stars">
                      {"★".repeat(Math.min(5, (r as { rating?: number }).rating || 5))}
                    </div>
                    <div className="hp-rev-text">"{(r as { comment?: string; text?: string }).comment || (r as { comment?: string; text?: string }).text}"</div>
                    <div className="hp-rev-author">{(r as { name?: string; userName?: string }).name || (r as { name?: string; userName?: string }).userName}</div>
                    <div className="hp-rev-service">{(r as { service?: string; serviceTitle?: string }).service || (r as { service?: string; serviceTitle?: string }).serviceTitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FEATURES */}
        <section className="hp-features">
          <div className="hp-feat-inner">
            <div className="hp-sec-head">
              <span className="hp-sec-label">Why Choose Us</span>
              <h2>The Pearl Dusting Difference</h2>
              <p>We go beyond surface-level cleaning to deliver peace of mind.</p>
            </div>
            <div className="hp-feat-grid">
              {[
                {icon:"🌿",title:"Eco-Friendly Products",    desc:"Non-toxic, biodegradable solutions safe for your family, pets, and the planet."},
                {icon:"✅",title:"Verified Professionals",   desc:"Every cleaner undergoes background checks and extensive training before joining us."},
                {icon:"⚡",title:"Fast Booking Process",     desc:"Book online in minutes and get same-day confirmation from our team."},
              ].map((f,i)=>(
                <div className="hp-feat-card" key={i}>
                  <div className="hp-feat-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
              <div className="hp-feat-cta">
                <div className="hp-feat-cta-text">
                  <h3>Ready to Book a Cleaning?</h3>
                  <p>Get your space spotless today. Quick booking, transparent pricing, trusted professionals.</p>
                  <a href="/booking" className="hp-feat-cta-btn">Book Now →</a>
                </div>
                <div className="hp-feat-cta-img">
                  <img src="https://images.pexels.com/photos/6195072/pexels-photo-6195072.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600" alt="Cleaning team" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="hp-faq">
          <div className="hp-faq-inner">
            <div className="hp-sec-head">
              <span className="hp-sec-label">FAQ</span>
              <h2>Frequently Asked Questions</h2>
              <p>Quick answers to the most common questions we receive.</p>
            </div>
            <div className="hp-faq-list">
              {faqs.map((f,i) => (
                <details className="hp-faq-item" key={i}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="hp-cta">
          <div className="hp-cta-inner">
            <h2>Ready for a Spotless Space?</h2>
            <p>Book your cleaning in a few clicks and let our team handle the rest. Fast, affordable, and eco-friendly.</p>
            <div className="hp-cta-btns">
              <a href="/booking" className="hp-cta-btn-white">Book Now</a>
              <a href="/contact" className="hp-cta-btn-border">Get a Quote</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
