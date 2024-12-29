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

document.getElementById('viewAdeecPaper').addEventListener('click',
    function(){
        window.open('https://ieeexplore.ieee.org/document/9936195')
    }
);

document.getElementById('viewAssicPaper').addEventListener('click',
    function(){
        window.open('https://ieeexplore.ieee.org/document/10088414/')
    }
);
