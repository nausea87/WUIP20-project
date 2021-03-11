const registerButton = document.querySelector('.register');
const ticketInfo = document.querySelector('.ticket-info');
const thankYou = document.querySelector('.tack');
const image = document.querySelector('.gris');
// let submitName = document.querySelector('#regname')

registerButton.addEventListener('click', () => {
    image.style.opacity = 0;
    ticketInfo.style.opacity = 0;
    setTimeout(function () {
        ticketInfo.innerHTML =
        'Du är anmäld!';
        thankYou.innerHTML = "Tack";
        image.style.opacity = 0;
        ticketInfo.style.opacity = 1;
        // Make piggy go visible instead?
    }, 300);
});

