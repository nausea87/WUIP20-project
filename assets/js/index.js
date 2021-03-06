// function clickButton() {
    
//     document.getElementById("demo").innerHTML = "Comming soon!";
//     console.log("I clicked the button!");
// }

const screenClick = addEventListener("click", () => {
    // What happens when you click
        console.log("Clickin' on the screen works!");
    });
    
    
    window.addEventListener('scroll', () => {
        //What happens when you scroll
        console.log('log scroll from top:', window.screenY);
    });

    window.addEventListener('keypress', (event) => {
        // Logs what key you're pressing!
        console.log("You've pressed the key:", event.key);
    });
      
    
 