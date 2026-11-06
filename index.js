const mobileMenu = document.getElementById('menu-toggle');
const navLinks=document.querySelector('.nav-links');
mobileMenu.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
})
