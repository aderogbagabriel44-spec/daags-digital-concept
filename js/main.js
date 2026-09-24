
const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('nav ul');
if(menuBtn && navList){
  menuBtn.addEventListener('click',()=>navList.classList.toggle('open'));
  navList.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navList.classList.remove('open')));
}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
