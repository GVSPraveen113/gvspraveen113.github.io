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

const buttons = document.querySelectorAll('.flipButton');
console.log('Found ', buttons.length, ' flip buttons')
buttons.forEach(button => {
    button.addEventListener('click', function(event){
            console.log('Button Clicked');
            event.preventDefault();
            const card = this.closest('.flip-card');
            console.log('Found Flip Card:', card);
            card.querySelector('.flip-card-inner').classList.toggle('is-flipped');
        });
    });

document.querySelectorAll('.flip-card').forEach(card=>{
    card.addEventListener('mouseleave', function(){
        console.log('Mouse left the card');
        const innerCard = card.querySelector('.flip-card-inner')
        innerCard.classList.forEach(className => {
            console.log('c -',className);
        });
        if(innerCard.classList.contains('is-flipped')){
            innerCard.classList.remove('is-flipped');
            console.log('Removed the is-flipped class')
        }
        
    });
});
