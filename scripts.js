function smoothScroll(target){
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

document.querySelectorAll('nav a').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});