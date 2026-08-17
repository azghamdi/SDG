const goals = [
  ['القضاء على الفقر','#E5243B','⌂'],['القضاء التام على الجوع','#DDA63A','♨'],['الصحة الجيدة والرفاه','#4C9F38','♡'],['التعليم الجيد','#C5192D','▤'],['المساواة بين الجنسين','#FF3A21','⚥'],['المياه النظيفة والنظافة الصحية','#26BDE2','≋'],['طاقة نظيفة وبأسعار معقولة','#FCC30B','☀'],['العمل اللائق ونمو الاقتصاد','#A21942','↗'],['الصناعة والابتكار والهياكل الأساسية','#FD6925','⬡'],['الحد من أوجه عدم المساواة','#DD1367','⇄'],['مدن ومجتمعات محلية مستدامة','#FD9D24','▥'],['الاستهلاك والإنتاج المسؤولان','#BF8B2E','∞'],['العمل المناخي','#3F7E44','◒'],['الحياة تحت الماء','#0A97D9','≈'],['الحياة في البر','#56C02B','♧'],['السلام والعدل والمؤسسات القوية','#00689D','⚖'],['عقد الشراكات لتحقيق الأهداف','#19486A','◎']
];

// مواضع البلاطات داخل الصورة الرسمية المرفقة: من الهدف 1 إلى 17.
const goalSpritePositions = [
  ['99.6%','2.4%'],['79.8%','2.4%'],['60.2%','2.4%'],['40.5%','2.4%'],['20.8%','2.4%'],['1%','2.4%'],
  ['99.6%','50.2%'],['79.8%','50.2%'],['60.2%','50.2%'],['40.5%','50.2%'],['20.8%','50.2%'],['1%','50.2%'],
  ['99.6%','97.9%'],['79.8%','97.9%'],['60.2%','97.9%'],['40.5%','97.9%'],['20.8%','97.9%']
];

const icon = paths => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
const goalIcons = [
  icon('<circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-4 2-6 5-6s5 2 5 6M14 15c3-1 6 1 6 5"/>'),
  icon('<path d="M4 13h16c-1 5-4 7-8 7s-7-2-8-7Z"/><path d="M8 10c-2-2 1-3 0-5M12 10c-2-2 1-3 0-5M16 10c-2-2 1-3 0-5"/>'),
  icon('<path d="M20 5c-3-3-8-1-8 3 0-4-5-6-8-3-4 5 3 11 8 15 5-4 12-10 8-15Z"/><path d="m7 12 3-1 2 3 2-5 2 3h3"/>'),
  icon('<path d="M4 5c3-1 5 0 8 2v13c-3-2-5-3-8-2V5ZM20 5c-3-1-5 0-8 2v13c3-2 5-3 8-2V5Z"/>'),
  icon('<circle cx="10" cy="9" r="5"/><path d="M10 14v7M7 18h6M15 5l5-1-1 5M16 8l4-4M6 9h8"/>'),
  icon('<path d="M12 3s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12Z"/><path d="M9 16c1 1 3 1 4 0"/>'),
  icon('<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>'),
  icon('<path d="M4 19V9M9 19v-6M14 19V8M19 19V4"/><path d="m4 13 5-4 4 2 7-7"/>'),
  icon('<path d="m4 9 4-3 4 3-4 3-4-3ZM12 9l4-3 4 3-4 3-4-3ZM8 15l4-3 4 3-4 3-4-3Z"/><path d="M4 9v5l4 3M20 9v5l-4 3M8 12v5M16 12v5M12 15v5"/>'),
  icon('<path d="M4 8h13M7 5 4 8l3 3M20 16H7M17 13l3 3-3 3"/><path d="M10 12h4"/>'),
  icon('<path d="M3 20h18M5 20V9h5v11M10 20V4h6v16M16 20v-8h3v8"/><path d="M7 12h1M12 7h2M12 11h2M12 15h2"/>'),
  icon('<path d="M8 8c-4 0-4 8 0 8 4 0 6-8 10-8 4 0 4 8 0 8-4 0-6-8-10-8Z"/>'),
  icon('<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c3 3 3 13 0 16M12 4c-3 3-3 13 0 16"/><path d="M16 7c2 0 3-1 4-2"/>'),
  icon('<path d="M3 12c4-5 9-6 14-2l4-3v10l-4-3c-5 4-10 3-14-2Z"/><circle cx="14" cy="11" r="1"/><path d="M5 17c3 2 6 2 9 0"/>'),
  icon('<path d="M12 21V10M8 21h8M12 10c-5 0-7-3-7-6 4 0 7 2 7 6ZM12 13c5 0 7-3 7-6-4 0-7 2-7 6Z"/>'),
  icon('<path d="M12 3v18M5 7h14M5 7l-3 6h6L5 7ZM19 7l-3 6h6l-3-6Z"/><path d="M8 21h8"/>'),
  icon('<circle cx="12" cy="12" r="3"/><circle cx="5" cy="7" r="2"/><circle cx="19" cy="7" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="m7 8 3 2M17 8l-3 2M7 17l3-3M17 17l-3-3"/>')
];

document.querySelector('#goalsGrid').innerHTML = goals.map((g,i) => `
  <a href="${i === 0 ? 'goal-1.html' : '#'}" class="goal" style="--goal:${g[1]};--sprite-x:${goalSpritePositions[i][0]};--sprite-y:${goalSpritePositions[i][1]}" aria-label="الهدف ${i+1}: ${g[0]}">
    <span class="goal__top"><b class="goal__number">${i+1}</b><strong>${g[0]}</strong></span>
    <span class="goal__icon" aria-hidden="true"><span>${goalIcons[i]}</span></span>
    <span class="goal__action">عرض تفاصيل الهدف <i>←</i></span>
  </a>`).join('');

const header = document.querySelector('#header');
addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 30), {passive:true});

const menuBtn = document.querySelector('#menuBtn');
menuBtn.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuBtn.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => document.body.classList.remove('menu-open')));

const searchPanel = document.querySelector('#searchPanel');
function toggleSearch(open){ searchPanel.classList.toggle('open',open); searchPanel.setAttribute('aria-hidden',!open); if(open) setTimeout(()=>searchPanel.querySelector('input').focus(),250); }
document.querySelector('#searchBtn').addEventListener('click',()=>toggleSearch(true));
document.querySelector('#closeSearch').addEventListener('click',()=>toggleSearch(false));
addEventListener('keydown',e=>{if(e.key==='Escape')toggleSearch(false)});

const revealObserver = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('seen'); revealObserver.unobserve(e.target); }}), {threshold:.15});
document.querySelectorAll('.reveal,.goal').forEach(el=>revealObserver.observe(el));

document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>e.preventDefault()));
document.querySelectorAll('.goal[href="#"]').forEach(goal=>goal.addEventListener('click',e=>e.preventDefault()));

// Shared prototype notice for every public platform page that loads this script.
if(!document.querySelector('link[href="preview-banner.css"]')){
  const previewStyle=document.createElement('link');
  previewStyle.rel='stylesheet';previewStyle.href='preview-banner.css';
  document.head.append(previewStyle);
}
if(!document.querySelector('script[src="preview-banner.js"]')){
  const previewScript=document.createElement('script');
  previewScript.src='preview-banner.js';
  document.body.append(previewScript);
}
