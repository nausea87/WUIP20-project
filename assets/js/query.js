let urlParams = new URLSearchParams(window.location.search);

const welcome = document.querySelector('.welcome');
const nameFiller = document.querySelector('#name');
const vip = document.querySelector('.vip');

if (urlParams.has('name' && 'email')) {
    let name = urlParams.get('name');
    let lastname = urlParams.get('email');    
    // Email url param here is actually functioning as the lastname, 
    // due to me explaining poorly, and Evelina had already
    // finished the QR codes with the lastnames inside
    // email parameters :) 
    // This is a temporary fix for making it 'look right'.

    // TLDR; Email param is used as lastname.
    welcome.innerText += `Välkommen ${name} ${lastname}`;
    nameFiller.setAttribute('value', name);
        
    if (name == 'Erik' && lastname == 'White') {
        vip.innerText += " Status: VIP";
    }
    if (name == 'Evelina' && lastname == 'Bakos') {
        vip.innerText += " Status: VIP";
    }      
}
const favAnimal = document.querySelector('.animal');

if(urlParams.has('animal')) {
  let animal = urlParams.get('animal');
  favAnimal.innerText += ` the ${animal}`;
}

//TODO: Post animals like cat,dog, cow etc as an icon.
// Phone visible atm for some sort of logic on site.