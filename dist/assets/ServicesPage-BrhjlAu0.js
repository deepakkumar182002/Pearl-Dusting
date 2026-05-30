import{u as n,s as e}from"./index-MpKE8Scx.js";const f=["All","Residential","Commercial","Specialized","Premium"],h=[{id:1,title:"Home Deep Cleaning",category:"Residential",description:"Complete deep cleaning for your home",shortDescription:"Thorough top-to-bottom cleaning of your entire home with eco-friendly products.",features:["All rooms covered","Eco-friendly products","Trained professionals"],price:49,rating:4.9,reviewCount:189,duration:"3-4 hrs",popular:!0,image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"},{id:2,title:"Office Cleaning",category:"Commercial",description:"Professional office cleaning",shortDescription:"Keep your workspace spotless and hygienic with our expert commercial cleaning team.",features:["Desks & workstations","Pantry & restrooms","Glass & windows"],price:79,rating:4.8,reviewCount:203,duration:"2-3 hrs",popular:!1,image:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"},{id:3,title:"Bathroom Cleaning",category:"Specialized",description:"Deep bathroom sanitization",shortDescription:"Deep bathroom sanitization and scrubbing with germ removal treatment.",features:["Germ & stain removal","Tiles & grout cleaning","Fixture polishing"],price:29,rating:4.7,reviewCount:176,duration:"1-2 hrs",popular:!0,image:"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80"},{id:4,title:"Kitchen Cleaning",category:"Specialized",description:"Complete kitchen degreasing",shortDescription:"Complete kitchen deep cleaning & degreasing including appliances and cabinets.",features:["Oil & grease removal","Appliance cleaning","Cabinet wipe-down"],price:39,rating:4.8,reviewCount:142,duration:"2-3 hrs",popular:!1,image:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"},{id:5,title:"Sofa Steam Cleaning",category:"Specialized",description:"Steam cleaning for sofas",shortDescription:"Professional steam cleaning for sofas and upholstery to restore like-new freshness.",features:["Steam deep clean","Stain removal","Odor elimination"],price:59,rating:4.9,reviewCount:98,duration:"2-3 hrs",popular:!0,image:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"},{id:6,title:"Premium Villa Cleaning",category:"Premium",description:"Luxury villa complete cleaning",shortDescription:"White-glove full-service cleaning for luxury villas and large residential properties.",features:["Full property coverage","Premium products","Dedicated team"],price:149,rating:5,reviewCount:54,duration:"5-8 hrs",popular:!1,image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"}],x=`
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
`;function N(){const c=h,d=s=>alert(`Booking: ${s.title}`),[o,p]=n.useState(""),[t,m]=n.useState("All"),[a,u]=n.useState("default"),l=n.useMemo(()=>{let s=c.filter(r=>{const i=r.title.toLowerCase().includes(o.toLowerCase())||r.description.toLowerCase().includes(o.toLowerCase()),g=t==="All"||r.category===t;return i&&g});return a==="price-low"&&(s=[...s].sort((r,i)=>r.price-i.price)),a==="price-high"&&(s=[...s].sort((r,i)=>i.price-r.price)),a==="rating"&&(s=[...s].sort((r,i)=>i.rating-r.rating)),s},[c,o,t,a]);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("style",{children:x},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:500,columnNumber:7},this),e.jsxDEV("div",{className:"sp-root",children:[e.jsxDEV("section",{className:"sp-hero",children:e.jsxDEV("div",{className:"sp-hero-inner",children:[e.jsxDEV("h1",{children:["Professional ",e.jsxDEV("span",{children:"Cleaning"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:506,columnNumber:30},this)," Services"]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:506,columnNumber:13},this),e.jsxDEV("p",{children:"Premium home, office, bathroom, kitchen and deep cleaning solutions by trusted professionals."},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:507,columnNumber:13},this),e.jsxDEV("div",{className:"sp-search-wrap",children:[e.jsxDEV("span",{className:"sp-search-icon",children:"🔍"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:509,columnNumber:15},this),e.jsxDEV("input",{className:"sp-search",type:"text",placeholder:"Search cleaning services...",value:o,onChange:s=>p(s.target.value)},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:510,columnNumber:15},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:508,columnNumber:13},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:505,columnNumber:11},this)},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:504,columnNumber:9},this),e.jsxDEV("div",{className:"sp-content",children:[e.jsxDEV("div",{className:"sp-filters",children:[e.jsxDEV("div",{className:"sp-cats",children:f.map(s=>e.jsxDEV("button",{className:`sp-cat-btn${t===s?" active":""}`,onClick:()=>m(s),children:s},s,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:528,columnNumber:17},this))},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:526,columnNumber:13},this),e.jsxDEV("div",{className:"sp-sort-wrap",children:[e.jsxDEV("span",{className:"sp-sort-icon",children:"⇅"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:538,columnNumber:15},this),e.jsxDEV("select",{className:"sp-sort",value:a,onChange:s=>u(s.target.value),children:[e.jsxDEV("option",{value:"default",children:"Sort By"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:544,columnNumber:17},this),e.jsxDEV("option",{value:"price-low",children:"Price: Low to High"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:545,columnNumber:17},this),e.jsxDEV("option",{value:"price-high",children:"Price: High to Low"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:546,columnNumber:17},this),e.jsxDEV("option",{value:"rating",children:"Top Rated"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:547,columnNumber:17},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:539,columnNumber:15},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:537,columnNumber:13},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:525,columnNumber:11},this),e.jsxDEV("div",{className:"sp-results-bar",children:e.jsxDEV("p",{className:"sp-results-count",children:[e.jsxDEV("strong",{children:l.length},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:555,columnNumber:15},this)," services available"]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:554,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:553,columnNumber:11},this),l.length>0?e.jsxDEV("div",{className:"sp-grid",children:l.map(s=>e.jsxDEV("div",{className:"sp-card",onClick:()=>d(s),role:"button",tabIndex:0,onKeyDown:r=>r.key==="Enter"&&d(s),children:[e.jsxDEV("div",{className:"sp-img-wrap",children:[e.jsxDEV("img",{src:s.image,alt:s.title,loading:"lazy"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:573,columnNumber:21},this),e.jsxDEV("div",{className:"sp-img-overlay"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:574,columnNumber:21},this),s.popular&&e.jsxDEV("span",{className:"sp-badge-popular",children:"⭐ Popular"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:576,columnNumber:23},this),e.jsxDEV("div",{className:"sp-badge-rating",children:[e.jsxDEV("span",{className:"star",children:"★"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:579,columnNumber:23},this),e.jsxDEV("span",{children:s.rating},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:580,columnNumber:23},this),e.jsxDEV("span",{className:"count",children:["(",s.reviewCount,")"]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:581,columnNumber:23},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:578,columnNumber:21},this),e.jsxDEV("div",{className:"sp-badge-duration",children:[e.jsxDEV("span",{children:"⏱"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:584,columnNumber:23},this),e.jsxDEV("span",{children:s.duration},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:585,columnNumber:23},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:583,columnNumber:21},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:572,columnNumber:19},this),e.jsxDEV("div",{className:"sp-card-body",children:[e.jsxDEV("span",{className:"sp-cat-tag",children:s.category},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:591,columnNumber:21},this),e.jsxDEV("h2",{className:"sp-card-title",children:s.title},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:592,columnNumber:21},this),e.jsxDEV("p",{className:"sp-card-desc",children:s.shortDescription},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:593,columnNumber:21},this),e.jsxDEV("ul",{className:"sp-features",children:s.features.slice(0,3).map((r,i)=>e.jsxDEV("li",{className:"sp-feature",children:[e.jsxDEV("span",{className:"sp-feature-dot"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:597,columnNumber:27},this),r]},i,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:596,columnNumber:25},this))},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:594,columnNumber:21},this),e.jsxDEV("div",{className:"sp-card-footer",children:[e.jsxDEV("div",{children:[e.jsxDEV("div",{className:"sp-price-num",children:["₹",s.price*80]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:604,columnNumber:25},this),e.jsxDEV("div",{className:"sp-price-label",children:"Starting price"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:605,columnNumber:25},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:603,columnNumber:23},this),e.jsxDEV("button",{className:"sp-book-btn",onClick:r=>{r.stopPropagation(),d(s)},children:"Book Now →"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:607,columnNumber:23},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:602,columnNumber:21},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:590,columnNumber:19},this)]},s.id,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:563,columnNumber:17},this))},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:561,columnNumber:13},this):e.jsxDEV("div",{className:"sp-empty",children:[e.jsxDEV("div",{className:"sp-empty-icon",children:"🔍"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:620,columnNumber:15},this),e.jsxDEV("h3",{children:"No Services Found"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:621,columnNumber:15},this),e.jsxDEV("p",{children:"Try searching with different keywords or clear the filters."},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:622,columnNumber:15},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:619,columnNumber:13},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:522,columnNumber:9},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:501,columnNumber:7},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ServicesPage.tsx",lineNumber:499,columnNumber:5},this)}export{N as default};
