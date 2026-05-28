import { useMemo, useState } from "react";

const categories = ["All", "Residential", "Commercial", "Specialized", "Premium"];

// Demo services data - replace with your useStore() hook
const demoServices = [
  { id: 1, title: "Home Deep Cleaning", category: "Residential", description: "Complete deep cleaning for your home", shortDescription: "Thorough top-to-bottom cleaning of your entire home with eco-friendly products.", features: ["All rooms covered", "Eco-friendly products", "Trained professionals"], price: 49, rating: 4.9, reviewCount: 189, duration: "3-4 hrs", popular: true, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { id: 2, title: "Office Cleaning", category: "Commercial", description: "Professional office cleaning", shortDescription: "Keep your workspace spotless and hygienic with our expert commercial cleaning team.", features: ["Desks & workstations", "Pantry & restrooms", "Glass & windows"], price: 79, rating: 4.8, reviewCount: 203, duration: "2-3 hrs", popular: false, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  { id: 3, title: "Bathroom Cleaning", category: "Specialized", description: "Deep bathroom sanitization", shortDescription: "Deep bathroom sanitization and scrubbing with germ removal treatment.", features: ["Germ & stain removal", "Tiles & grout cleaning", "Fixture polishing"], price: 29, rating: 4.7, reviewCount: 176, duration: "1-2 hrs", popular: true, image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80" },
  { id: 4, title: "Kitchen Cleaning", category: "Specialized", description: "Complete kitchen degreasing", shortDescription: "Complete kitchen deep cleaning & degreasing including appliances and cabinets.", features: ["Oil & grease removal", "Appliance cleaning", "Cabinet wipe-down"], price: 39, rating: 4.8, reviewCount: 142, duration: "2-3 hrs", popular: false, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" },
  { id: 5, title: "Sofa Steam Cleaning", category: "Specialized", description: "Steam cleaning for sofas", shortDescription: "Professional steam cleaning for sofas and upholstery to restore like-new freshness.", features: ["Steam deep clean", "Stain removal", "Odor elimination"], price: 59, rating: 4.9, reviewCount: 98, duration: "2-3 hrs", popular: true, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80" },
  { id: 6, title: "Premium Villa Cleaning", category: "Premium", description: "Luxury villa complete cleaning", shortDescription: "White-glove full-service cleaning for luxury villas and large residential properties.", features: ["Full property coverage", "Premium products", "Dedicated team"], price: 149, rating: 5.0, reviewCount: 54, duration: "5-8 hrs", popular: false, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

  .sp-root {
    font-family: 'DM Sans', sans-serif;
    background: #f8fafc;
    min-height: 100vh;
    color: #1e293b;
    padding-top: 80px;
  }

  /* HERO */
  .sp-hero {
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #0c4a6e 0%, #1e40af 50%, #0f172a 100%);
    padding: 64px 24px;
  }
  .sp-hero::before {
    content: '';
    position: absolute;
    top: -120px; left: -120px;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%);
    pointer-events: none;
  }
  .sp-hero::after {
    content: '';
    position: absolute;
    bottom: -100px; right: -100px;
    width: 350px; height: 350px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%);
    pointer-events: none;
  }
  .sp-hero-inner {
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 1;
  }
  .sp-hero h1 {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: clamp(2rem, 5vw, 3.5rem);
    color: #fff;
    line-height: 1.15;
    margin: 0 0 16px;
  }
  .sp-hero h1 span {
    background: linear-gradient(135deg, #67e8f9, #93c5fd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .sp-hero p {
    color: rgba(255,255,255,0.75);
    font-size: clamp(0.95rem, 2vw, 1.1rem);
    max-width: 560px;
    margin: 0 auto 36px;
    line-height: 1.7;
    font-weight: 300;
  }
  .sp-search-wrap {
    max-width: 600px;
    margin: 0 auto;
    position: relative;
  }
  .sp-search-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255,255,255,0.5);
    font-size: 18px;
    pointer-events: none;
  }
  .sp-search {
    width: 100%;
    height: 58px;
    padding: 0 20px 0 54px;
    border-radius: 16px;
    background: rgba(255,255,255,0.12);
    border: 1.5px solid rgba(255,255,255,0.2);
    color: #fff;
    font-size: 0.95rem;
    font-family: 'DM Sans', sans-serif;
    outline: none;
    transition: border-color 0.2s, background 0.2s;
    box-sizing: border-box;
  }
  .sp-search::placeholder { color: rgba(255,255,255,0.5); }
  .sp-search:focus { border-color: #67e8f9; background: rgba(255,255,255,0.18); }

  /* CONTENT */
  .sp-content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px 24px 80px;
  }

  /* FILTERS */
  .sp-filters {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 36px;
  }
  .sp-cats {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .sp-cat-btn {
    padding: 10px 20px;
    border-radius: 50px;
    border: 1.5px solid #e2e8f0;
    background: #fff;
    color: #64748b;
    font-family: 'Syne', sans-serif;
    font-weight: 600;
    font-size: 0.82rem;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
  }
  .sp-cat-btn:hover { border-color: #06b6d4; color: #0891b2; }
  .sp-cat-btn.active {
    background: linear-gradient(135deg, #06b6d4, #3b82f6);
    border-color: transparent;
    color: #fff;
    box-shadow: 0 4px 16px rgba(6,182,212,0.3);
  }
  .sp-sort-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #fff;
    border: 1.5px solid #e2e8f0;
    border-radius: 14px;
    padding: 0 16px;
    height: 48px;
    min-width: 200px;
  }
  .sp-sort-icon { color: #94a3b8; font-size: 16px; }
  .sp-sort {
    background: transparent;
    border: none;
    outline: none;
    color: #334155;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    font-weight: 500;
    width: 100%;
    cursor: pointer;
  }

  /* RESULTS COUNT */
  .sp-results-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
  }
  .sp-results-count {
    font-size: 0.88rem;
    color: #64748b;
    font-weight: 500;
  }
  .sp-results-count strong {
    color: #0891b2;
    font-family: 'Syne', sans-serif;
    font-weight: 700;
  }

  /* GRID */
  .sp-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
  @media (max-width: 1100px) { .sp-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 680px) { .sp-grid { grid-template-columns: 1fr; } }

  /* CARD */
  .sp-card {
    background: #fff;
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid #e8eef4;
    box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
  }
  .sp-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 60px rgba(8,145,178,0.14);
    border-color: #bae6fd;
  }

  /* IMAGE */
  .sp-img-wrap {
    position: relative;
    overflow: hidden;
    height: 220px;
    flex-shrink: 0;
  }
  .sp-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
  .sp-card:hover .sp-img-wrap img { transform: scale(1.08); }
  .sp-img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%);
  }
  .sp-badge-popular {
    position: absolute;
    top: 14px; left: 14px;
    background: linear-gradient(135deg, #06b6d4, #3b82f6);
    color: #fff;
    font-family: 'Syne', sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    padding: 5px 12px;
    border-radius: 50px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    box-shadow: 0 2px 12px rgba(6,182,212,0.4);
  }
  .sp-badge-rating {
    position: absolute;
    top: 14px; right: 14px;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(8px);
    padding: 6px 12px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.82rem;
    font-weight: 700;
    color: #1e293b;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
  .sp-badge-rating .star { color: #f59e0b; }
  .sp-badge-rating .count { color: #94a3b8; font-weight: 400; font-size: 0.75rem; }
  .sp-badge-duration {
    position: absolute;
    bottom: 14px; right: 14px;
    background: rgba(0,0,0,0.65);
    backdrop-filter: blur(8px);
    color: rgba(255,255,255,0.9);
    font-size: 0.75rem;
    padding: 5px 12px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  /* CARD BODY */
  .sp-card-body {
    padding: 22px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .sp-cat-tag {
    display: inline-flex;
    align-items: center;
    background: #e0f7fa;
    color: #0891b2;
    font-family: 'Syne', sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 50px;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .sp-card-title {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.25rem;
    color: #0f172a;
    margin: 0 0 8px;
    line-height: 1.25;
  }
  .sp-card-desc {
    font-size: 0.875rem;
    color: #64748b;
    line-height: 1.65;
    margin-bottom: 16px;
    flex: 0;
  }
  .sp-features {
    list-style: none;
    padding: 0; margin: 0 0 20px;
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .sp-feature {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.83rem;
    color: #475569;
  }
  .sp-feature-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: linear-gradient(135deg, #06b6d4, #3b82f6);
    flex-shrink: 0;
  }
  .sp-card-footer {
    margin-top: auto;
    padding-top: 18px;
    border-top: 1px solid #f1f5f9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .sp-price-num {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.8rem;
    line-height: 1;
    background: linear-gradient(135deg, #0891b2, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .sp-price-label {
    font-size: 0.75rem;
    color: #94a3b8;
    margin-top: 3px;
  }
  .sp-book-btn {
    padding: 12px 22px;
    border-radius: 14px;
    background: linear-gradient(135deg, #06b6d4, #3b82f6);
    color: #fff;
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 0.85rem;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 16px rgba(6,182,212,0.25);
  }
  .sp-book-btn:hover {
    transform: scale(1.04);
    box-shadow: 0 8px 24px rgba(6,182,212,0.4);
  }

  /* EMPTY */
  .sp-empty {
    text-align: center;
    padding: 80px 24px;
  }
  .sp-empty-icon { font-size: 3rem; margin-bottom: 16px; }
  .sp-empty h3 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 1.3rem;
    color: #334155;
    margin-bottom: 8px;
  }
  .sp-empty p { color: #94a3b8; font-size: 0.9rem; }

  /* RESPONSIVE FILTERS */
  @media (max-width: 768px) {
    .sp-filters { flex-direction: column; align-items: stretch; }
    .sp-sort-wrap { min-width: unset; }
    .sp-hero { padding: 48px 20px; }
  }
  @media (max-width: 480px) {
    .sp-content { padding: 28px 16px 60px; }
    .sp-card-body { padding: 18px; }
  }
`;

export default function ServicesPage() {
  // Replace demoServices with: const { services, openBookingModal } = useStore();
  const services = demoServices;
  const openBookingModal = (service) => alert(`Booking: ${service.title}`);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filtered = useMemo(() => {
    let result = services.filter((s) => {
      const matchSearch =
        s.title.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "All" || s.category === category;
      return matchSearch && matchCategory;
    });

    if (sortBy === "price-low") result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === "rating") result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
  }, [services, search, category, sortBy]);

  return (
    <>
      <style>{styles}</style>
      <div className="sp-root">

        {/* ── HERO ── */}
        <section className="sp-hero">
          <div className="sp-hero-inner">
            <h1>Professional <span>Cleaning</span> Services</h1>
            <p>Premium home, office, bathroom, kitchen and deep cleaning solutions by trusted professionals.</p>
            <div className="sp-search-wrap">
              <span className="sp-search-icon">🔍</span>
              <input
                className="sp-search"
                type="text"
                placeholder="Search cleaning services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* ── CONTENT ── */}
        <div className="sp-content">

          {/* Filters */}
          <div className="sp-filters">
            <div className="sp-cats">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`sp-cat-btn${category === cat ? " active" : ""}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="sp-sort-wrap">
              <span className="sp-sort-icon">⇅</span>
              <select
                className="sp-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Sort By</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Results bar */}
          <div className="sp-results-bar">
            <p className="sp-results-count">
              <strong>{filtered.length}</strong> services available
            </p>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="sp-grid">
              {filtered.map((service) => (
                <div
                  key={service.id}
                  className="sp-card"
                  onClick={() => openBookingModal(service)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && openBookingModal(service)}
                >
                  {/* Image */}
                  <div className="sp-img-wrap">
                    <img src={service.image} alt={service.title} loading="lazy" />
                    <div className="sp-img-overlay" />
                    {service.popular && (
                      <span className="sp-badge-popular">⭐ Popular</span>
                    )}
                    <div className="sp-badge-rating">
                      <span className="star">★</span>
                      <span>{service.rating}</span>
                      <span className="count">({service.reviewCount})</span>
                    </div>
                    <div className="sp-badge-duration">
                      <span>⏱</span>
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="sp-card-body">
                    <span className="sp-cat-tag">{service.category}</span>
                    <h2 className="sp-card-title">{service.title}</h2>
                    <p className="sp-card-desc">{service.shortDescription}</p>
                    <ul className="sp-features">
                      {service.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="sp-feature">
                          <span className="sp-feature-dot" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="sp-card-footer">
                      <div>
                        <div className="sp-price-num">₹{service.price * 80}</div>
                        <div className="sp-price-label">Starting price</div>
                      </div>
                      <button
                        className="sp-book-btn"
                        onClick={(e) => { e.stopPropagation(); openBookingModal(service); }}
                      >
                        Book Now →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="sp-empty">
              <div className="sp-empty-icon">🔍</div>
              <h3>No Services Found</h3>
              <p>Try searching with different keywords or clear the filters.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
