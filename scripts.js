function smoothScroll(target){
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// document.querySelectorAll('nav a').forEach(anchor=>{
//     anchor.addEventListener('click', function(e){
//         e.preventDefault();
//         smoothScroll(this.getAttribute('href'));
//     });
// });

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

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const navBarHeight = document.querySelector('header').offsetHeight;

        window.scrollTo({
            top: target.offsetTop - navBarHeight,
            behavior: 'smooth'
        });
    });
});

function typeAndEraseText(roles, typingSpeed = 200, erasingSpeed = 100, pauseTime = 1200) {
    const textElement = document.getElementById('role-text');
    let i = 0;
    let currentText = "";
    let cursor = "|"

    // Function to type out the current role
    function type() {
        if(i==roles.length){
            i=0;
            setTimeout(4*typingSpeed);
        }
        if (i < roles.length) {
            let role = roles[i];
            let index = 0;

            // Function to type each character in the role
            function typing() {
                if (index < role.length) {
                    currentText += role[index];
                    textElement.textContent = currentText+cursor; // Update text content
                    index++;
                    setTimeout(typing, typingSpeed); // Continue typing the next character
                } else {
                    // Once the role is fully typed, add a newline and call erase after the pause
                    setTimeout(() => {
                        //currentText += '\n';  // Add a newline character
                        textElement.textContent = currentText;  // Update text content
                        setTimeout(erase, pauseTime); // Start erasing after the pause
                    }, pauseTime);
                }
            }

            // Function to erase the typed text
            function erase() {
                if (currentText.length > 0 && currentText[currentText.length - 1] !== '\n') {
                    currentText = currentText.slice(0, -1); // Remove one character
                    textElement.textContent = currentText+cursor; // Update text content
                    setTimeout(erase, erasingSpeed); // Continue erasing the last character
                } else {
                    // If the last character is a newline, remove it
                    if (currentText[currentText.length - 1] === '\n') {
                        currentText = currentText.slice(0, -1);
                    }
                    i++;  // Move to the next role
                    setTimeout(type, typingSpeed);  // Start typing the next role
                }
            }

            typing(); // Start typing the current role
        }
    }

    type(); // Start the typing process
}

// Usage example:
typeAndEraseText(["Software Engineer", "Full Stack Application Developer", "Data Analyst", "AI Enthusiast", "AWS Solutions Architect"]);
