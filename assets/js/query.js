let urlParams = new URLSearchParams(window.location.search);

const welcome = document.querySelector('.welcome');
const nameFiller = document.querySelector('#name');

if (urlParams.has('name')) {
    let name = urlParams.get('name');
    let email = urlParams.get('email');    
    // Email here is actually the lastname, due to me explaining poorly, and Evelina had already finished
    // the QR codes with the lastnames inside email parameters :) 
    // This is a temporary fix for making it 'look right'.

    // TLDR; Email param is used as lastname.
    welcome.innerText += `Välkommen ${name} ${email}`;
    nameFiller.setAttribute('value', name);
        
}

if(urlParams.has('animal')) {
  let animal = urlParams.get('animal');
  welcome.innerText += ` the ${animal}`;
}

