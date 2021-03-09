// const { doc } = require("prettier");

const buttonClick = document.querySelector('button');
buttonClick.addEventListener('click', () => {
    console.log('Hello');
 
});


const foxClick = document.querySelector('.hare-and-fox-img');
foxClick.addEventListener("click", () => {
   console.log("Clickin' on the image works!");
});

const forestClick = document.querySelector('.skog-img');
forestClick.addEventListener("click", () => {
  console.log("Clickin' on the trees works!");
});
    
// Simple title animation
 let i = 0;
 setInterval(function () {
     document.title = i++ % 2 == 0 ? 'Welcome to...' : "Skogsfesten 2022";
 }, 3000);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 // window.addEventListener('scroll', () => {
    //     //What happens when you scroll
    //     console.log("log scroll from top:", window.screenY);
    // });

    // window.addEventListener('keypress', (event) => {
    //     // Logs what key you're pressing!
    //     console.log("You've pressed the key:", event.key);
    // });
      
 