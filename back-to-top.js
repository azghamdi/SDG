const backToTopButton=document.querySelector('#backToTop');
if(backToTopButton){
  const updateBackToTop=()=>backToTopButton.classList.toggle('is-visible',window.scrollY>500);
  addEventListener('scroll',updateBackToTop,{passive:true});
  backToTopButton.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
  updateBackToTop();
}
