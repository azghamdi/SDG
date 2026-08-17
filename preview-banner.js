(()=>{
  if(document.querySelector('.prototype-banner')) return;
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
})();
