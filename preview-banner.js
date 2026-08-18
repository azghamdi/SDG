(()=>{
  if(!document.querySelector('.prototype-banner')){
    const banner=document.createElement('div');
    banner.className='prototype-banner';
    banner.setAttribute('role','status');
    banner.innerHTML=`<div class="prototype-banner__inner">
      <span class="prototype-banner__state">نسخة تجريبية</span>
      <span class="prototype-banner__separator" aria-hidden="true"></span>
      <strong>غير جاهزة للنشر</strong>
      <span class="prototype-banner__separator" aria-hidden="true"></span>
      <span>إعداد <b>إدارة التسويق والتوعية</b></span>
    </div>`;
    document.body.prepend(banner);
  }

  if(!document.querySelector('link[href="report-footer.css"]')){
    const footerStyle=document.createElement('link');
    footerStyle.rel='stylesheet';
    footerStyle.href='report-footer.css';
    document.head.appendChild(footerStyle);
  }
  if(!document.querySelector('link[href^="header-premium.css"]')){
    const headerStyle=document.createElement('link');
    headerStyle.rel='stylesheet';
    headerStyle.href='header-premium.css?v=6';
    document.head.appendChild(headerStyle);
  }
  if(!document.querySelector('link[href^="gov-verification.css"]')){
    const govStyle=document.createElement('link');
    govStyle.rel='stylesheet';
    govStyle.href='gov-verification.css?v=1';
    document.head.appendChild(govStyle);
  }

  const isEnglish=document.documentElement.lang==='en';
  const mainNav=document.querySelector('.header .nav');
  if(mainNav){
    const file=(location.pathname.split('/').pop()||'index.html').toLowerCase();
    const arabicNav=[
      ['index.html','الرئيسية','home'],
      ['about.html','نبذة','about'],
      ['methodology.html','المنهجية','methodology'],
      ['index.html#goals','الأهداف','goals'],
      ['index.html#kingdom','المملكة والاستدامة','kingdom'],
      ['index.html#partners','شركاء البيانات','partners'],
      ['open-data.html','البيانات المفتوحة','open-data'],
      ['governance.html','حوكمة النشر','governance']
    ];
    const englishNav=[
      ['en.html','Home','home'],
      ['en.html#about','About','about'],
      ['methodology.html','Methodology','methodology'],
      ['en.html#goals','Goals','goals'],
      ['index.html#kingdom','Saudi Arabia & sustainability','kingdom'],
      ['index.html#partners','Data partners','partners'],
      ['open-data.html','Open data','open-data'],
      ['governance.html','Publishing governance','governance']
    ];
    const activeKey=file==='about.html'?'about':file==='methodology.html'?'methodology':file==='goal-1.html'?'goals':file==='open-data.html'?'open-data':file==='governance.html'?'governance':'home';
    mainNav.innerHTML=(isEnglish?englishNav:arabicNav).map(([href,label,key])=>`<a href="${href}"${key===activeKey?' class="active" aria-current="page"':''}>${label}</a>`).join('');
    mainNav.setAttribute('aria-label',isEnglish?'Main navigation':'التنقل الرئيسي');
    mainNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>document.body.classList.remove('menu-open')));
  }
  const govbar=document.querySelector('.govbar');
  if(govbar){
    govbar.classList.add('gov-verification');
    govbar.innerHTML=`<div class="container gov-verification__bar">
      <div class="gov-verification__label">
        <span class="gov-verification__state" aria-hidden="true"><i></i></span>
        <span>${isEnglish?'Official government website of the Kingdom of Saudi Arabia':'موقع حكومي رسمي تابع لحكومة المملكة العربية السعودية'}</span>
      </div>
      <button class="gov-verification__toggle" type="button" aria-expanded="false" aria-controls="govVerificationPanel">
        <span>${isEnglish?'How to verify':'كيف تتحقق؟'}</span>
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m6 8 4 4 4-4"/></svg>
      </button>
    </div>
    <div class="gov-verification__panel" id="govVerificationPanel" hidden>
      <div class="container gov-verification__content">
        <article><span class="gov-verification__icon" aria-hidden="true">.sa</span><div><b>${isEnglish?'Government domain':'النطاق الحكومي'}</b><p>${isEnglish?'Official Saudi government websites use domains ending in gov.sa.':'المواقع الحكومية الرسمية في المملكة العربية السعودية تنتهي بالنطاق gov.sa'}</p></div></article>
        <article><span class="gov-verification__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg></span><div><b>${isEnglish?'Secure connection':'اتصال آمن'}</b><p>${isEnglish?'The lock symbol and HTTPS indicate that the connection is encrypted and secure.':'رمز القفل ووجود HTTPS يعنيان أن الاتصال بالموقع مشفّر وآمن.'}</p></div></article>
      </div>
    </div>`;
    const govToggle=govbar.querySelector('.gov-verification__toggle');
    const govPanel=govbar.querySelector('.gov-verification__panel');
    const setGovPanel=open=>{
      govToggle.setAttribute('aria-expanded',String(open));
      govPanel.hidden=!open;
      govbar.classList.toggle('is-open',open);
    };
    govToggle.addEventListener('click',event=>{event.stopPropagation();setGovPanel(govToggle.getAttribute('aria-expanded')!=='true')});
    govPanel.addEventListener('click',event=>event.stopPropagation());
    document.addEventListener('click',()=>setGovPanel(false));
    document.addEventListener('keydown',event=>{if(event.key==='Escape'){setGovPanel(false);govToggle.focus()}});
  }

  let footer=document.querySelector('footer');
  if(!footer){
    footer=document.createElement('footer');
    document.body.appendChild(footer);
  }
  footer.className='site-report-footer';
  footer.innerHTML=`<div class="site-report-footer__inner">
    <div class="site-report-footer__logos">
      <img src="assets/sdg-wheel-saudi-transparent.png" alt="${isEnglish?'Sustainable Development Goals':'أهداف التنمية المستدامة'}">
      <i aria-hidden="true"></i>
      <img src="assets/saudi-vision-2030.svg" alt="${isEnglish?'Saudi Vision 2030':'رؤية السعودية 2030'}">
    </div>
    <p>${isEnglish?'<b>Prepared by Marketing and Awareness Department</b><br>© 2026 General Authority for Statistics. All rights reserved.<br>Sustainable Development Goals Platform':'<b>إعداد إدارة التسويق والتوعية</b><br>جميع الحقوق محفوظة للهيئة العامة للإحصاء © 2026<br>منصة أهداف التنمية المستدامة'}</p>
  </div>
  <div class="site-report-footer__bottom">
    <nav aria-label="${isEnglish?'Footer links':'روابط الفوتر'}">
      <a href="#">${isEnglish?'Contact us':'اتصل بنا'}</a>
      <a href="#">${isEnglish?'Privacy policy':'سياسة الخصوصية'}</a>
      <a href="#">${isEnglish?'Terms of use':'شروط الاستخدام'}</a>
      <a href="#">${isEnglish?'Sitemap':'خريطة الموقع'}</a>
    </nav>
  </div>`;
})();
