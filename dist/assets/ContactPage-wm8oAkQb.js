import{u as i,s}from"./index-MpKE8Scx.js";const u=`
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

.cp-root { font-family:'DM Sans',sans-serif; color:#1e293b; background:#f8fafc; }

/* HERO */
.cp-hero { background:linear-gradient(135deg,#0c4a6e 0%,#1e40af 55%,#0f172a 100%); padding:72px 24px; text-align:center; position:relative; overflow:hidden; }
.cp-hero::before { content:''; position:absolute; top:-100px; right:-100px; width:360px; height:360px; border-radius:50%; background:radial-gradient(circle,rgba(6,182,212,.2) 0%,transparent 70%); pointer-events:none; }
.cp-hero-inner { max-width:680px; margin:0 auto; position:relative; z-index:1; }
.cp-hero h1 { font-family:'Syne',sans-serif; font-weight:800; font-size:clamp(2rem,5vw,3.2rem); color:#fff; margin:0 0 12px; line-height:1.15; }
.cp-hero p  { color:rgba(255,255,255,.72); font-size:1.05rem; font-weight:300; margin:0; }

/* BODY */
.cp-body { max-width:1200px; margin:0 auto; padding:56px 24px 80px; display:grid; grid-template-columns:380px 1fr; gap:36px; align-items:start; }

/* INFO CARDS */
.cp-info { display:flex; flex-direction:column; gap:16px; }
.cp-info-card { display:flex; gap:16px; align-items:flex-start; background:#fff; border:1px solid #e8eef4; border-radius:18px; padding:22px 20px; box-shadow:0 2px 10px rgba(0,0,0,.04); }
.cp-info-icon { width:44px; height:44px; border-radius:12px; background:linear-gradient(135deg,#e0f7fa,#dbeafe); display:flex; align-items:center; justify-content:center; font-size:1.2rem; flex-shrink:0; }
.cp-info-card h3 { font-family:'Syne',sans-serif; font-weight:700; font-size:.88rem; color:#0f172a; margin:0 0 5px; }
.cp-info-card p  { font-size:.83rem; color:#64748b; line-height:1.65; margin:0; }

/* FORM PANEL */
.cp-form-wrap { background:#fff; border-radius:22px; padding:36px; border:1px solid #e8eef4; box-shadow:0 4px 24px rgba(0,0,0,.06); }
.cp-form-wrap h2 { font-family:'Syne',sans-serif; font-weight:800; font-size:1.3rem; color:#0f172a; margin:0 0 24px; }
.cp-form-row { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:16px; }
.cp-form-group { display:flex; flex-direction:column; gap:6px; margin-bottom:16px; }
.cp-form-group label { font-family:'Syne',sans-serif; font-size:.78rem; font-weight:700; color:#334155; }
.cp-form-group input,
.cp-form-group textarea { border:1.5px solid #e2e8f0; border-radius:12px; padding:12px 16px; font-family:'DM Sans',sans-serif; font-size:.9rem; color:#1e293b; outline:none; transition:border-color .2s; background:#fff; resize:none; }
.cp-form-group input:focus,
.cp-form-group textarea:focus { border-color:#06b6d4; box-shadow:0 0 0 3px rgba(6,182,212,.1); }
.cp-submit-btn { display:inline-flex; align-items:center; gap:8px; background:linear-gradient(135deg,#06b6d4,#3b82f6); color:#fff; border:none; padding:14px 28px; border-radius:14px; font-family:'Syne',sans-serif; font-weight:700; font-size:.92rem; cursor:pointer; transition:transform .2s,box-shadow .2s; box-shadow:0 4px 16px rgba(6,182,212,.25); }
.cp-submit-btn:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(6,182,212,.4); }
.cp-submit-btn:disabled { opacity:.65; cursor:not-allowed; transform:none; }

/* MAP */
.cp-map { margin-top:24px; border-radius:18px; overflow:hidden; border:1px solid #e8eef4; height:220px; }
.cp-map iframe { width:100%; height:100%; border:0; display:block; }

/* SUCCESS */
.cp-success { background:#e0f7fa; border:1px solid #a5f3fc; border-radius:14px; padding:16px 20px; color:#0891b2; font-family:'Syne',sans-serif; font-weight:600; font-size:.9rem; margin-top:16px; text-align:center; }

/* RESPONSIVE */
@media(max-width:960px){
  .cp-body { grid-template-columns:1fr; }
  .cp-info { display:grid; grid-template-columns:1fr 1fr; }
}
@media(max-width:600px){
  .cp-info { grid-template-columns:1fr; }
  .cp-form-row { grid-template-columns:1fr; }
  .cp-form-wrap { padding:24px 18px; }
  .cp-hero { padding:52px 18px; }
}
`;function f(){const[a,r]=i.useState({name:"",email:"",phone:"",message:""}),[n,d]=i.useState(!1),[t,l]=i.useState(!1),m=async e=>{e.preventDefault(),!(!a.name||!a.email||!a.message)&&(d(!0),await new Promise(o=>setTimeout(o,900)),l(!0),r({name:"",email:"",phone:"",message:""}),d(!1))},c=[{icon:"📍",title:"Visit Us",text:`B-1137-38, Near Kali Mata Mandir,
Mangol Puri, New Delhi – 110083`},{icon:"📞",title:"Call Us",text:`+91 9458606691
+91 8796026236`},{icon:"✉️",title:"Email Us",text:`pearldustingcleaningservicepv
@gmail.com`},{icon:"⏱",title:"Working Hours",text:`Mon–Sat: 8 AM – 8 PM
Sunday: 9 AM – 5 PM`}];return s.jsxDEV(s.Fragment,{children:[s.jsxDEV("style",{children:u},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:198,columnNumber:7},this),s.jsxDEV("div",{className:"cp-root",children:[s.jsxDEV("div",{className:"cp-hero",children:s.jsxDEV("div",{className:"cp-hero-inner",children:[s.jsxDEV("h1",{children:"Get In Touch"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:204,columnNumber:13},this),s.jsxDEV("p",{children:"Have questions? We'd love to hear from you. Send us a message and we'll respond shortly!"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:205,columnNumber:13},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:203,columnNumber:11},this)},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:202,columnNumber:9},this),s.jsxDEV("div",{className:"cp-body",children:[s.jsxDEV("div",{className:"cp-info",children:c.map((e,o)=>s.jsxDEV("div",{className:"cp-info-card",children:[s.jsxDEV("div",{className:"cp-info-icon",children:e.icon},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:216,columnNumber:17},this),s.jsxDEV("div",{children:[s.jsxDEV("h3",{children:e.title},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:218,columnNumber:19},this),s.jsxDEV("p",{style:{whiteSpace:"pre-line"},children:e.text},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:219,columnNumber:19},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:217,columnNumber:17},this)]},o,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:215,columnNumber:15},this))},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:213,columnNumber:11},this),s.jsxDEV("div",{children:[s.jsxDEV("div",{className:"cp-form-wrap",children:[s.jsxDEV("h2",{children:"Send us a Message"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:228,columnNumber:15},this),s.jsxDEV("form",{onSubmit:m,children:[s.jsxDEV("div",{className:"cp-form-row",children:[s.jsxDEV("div",{className:"cp-form-group",style:{marginBottom:0},children:[s.jsxDEV("label",{children:"Full Name *"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:232,columnNumber:21},this),s.jsxDEV("input",{value:a.name,onChange:e=>r({...a,name:e.target.value}),placeholder:"Your name",required:!0},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:233,columnNumber:21},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:231,columnNumber:19},this),s.jsxDEV("div",{className:"cp-form-group",style:{marginBottom:0},children:[s.jsxDEV("label",{children:"Email *"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:236,columnNumber:21},this),s.jsxDEV("input",{type:"email",value:a.email,onChange:e=>r({...a,email:e.target.value}),placeholder:"you@example.com",required:!0},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:237,columnNumber:21},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:235,columnNumber:19},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:230,columnNumber:17},this),s.jsxDEV("div",{className:"cp-form-group",children:[s.jsxDEV("label",{children:"Phone"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:241,columnNumber:19},this),s.jsxDEV("input",{value:a.phone,onChange:e=>r({...a,phone:e.target.value}),placeholder:"+91 XXXXXXXXXX"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:242,columnNumber:19},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:240,columnNumber:17},this),s.jsxDEV("div",{className:"cp-form-group",children:[s.jsxDEV("label",{children:"Message *"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:245,columnNumber:19},this),s.jsxDEV("textarea",{rows:5,value:a.message,onChange:e=>r({...a,message:e.target.value}),placeholder:"Tell us how we can help...",required:!0},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:246,columnNumber:19},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:244,columnNumber:17},this),s.jsxDEV("button",{type:"submit",className:"cp-submit-btn",disabled:n,children:n?"Sending…":"✉️  Send Message"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:248,columnNumber:17},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:229,columnNumber:15},this),t&&s.jsxDEV("div",{className:"cp-success",children:"✅ Message sent! We'll contact you shortly."},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:252,columnNumber:24},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:227,columnNumber:13},this),s.jsxDEV("div",{className:"cp-map",children:s.jsxDEV("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.2!2d77.1!3d28.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQzJzEyLjAiTiA3N8KwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1&output=embed",title:"Pearl Dusting Location",allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:257,columnNumber:15},this)},void 0,!1,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:256,columnNumber:13},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:226,columnNumber:11},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:210,columnNumber:9},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:199,columnNumber:7},this)]},void 0,!0,{fileName:"C:/Users/Asus/Downloads/sdsdsdsd/src/pages/ContactPage.tsx",lineNumber:197,columnNumber:5},this)}export{f as default};
