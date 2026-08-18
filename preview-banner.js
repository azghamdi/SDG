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
    headerStyle.href='header-premium.css?v=2';
    document.head.appendChild(headerStyle);
  }

  const isEnglish=document.documentElement.lang==='en';
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
