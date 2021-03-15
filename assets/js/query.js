let urlParams = new URLSearchParams(window.location.search);

const welcome = document.querySelector('.welcome');
const nameFiller = document.querySelector('#name'); 
// const emailFiller = document.querySelector('#email'); // Doesn't do anything atm.
const phoneFiller = document.querySelector('#tel');

if (urlParams.has('name')) {
    let name = urlParams.get('name');
    // let email = urlParams.get('email');
    welcome.innerText += `Välkommen ${name}`;
    nameFiller.setAttribute('value', name);
}

// if (urlParams.has('email')) {
//     let email = urlParams.get('email');
//     emailFiller.setAttribute('value', email);
// }

// if (urlParams.has('tel')) {
//     let tel = urlParams.get('tel');
//     phoneFiller.setAttribute('value', tel);
// }

// https://wuip20-project.netlify.app//index.html?name=&email=&tel=

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////


// console.log(urlParams.has('post'));
// console.log(urlParams.get('action'));
// console.log(urlParams.getAll('action'));
// console.log(urlParams.toString());
// console.log(urlParams.append('active', '1'));

//  const dynamicName = document.querySelector(".dynamic-name");
//  const dynamicEmail = document.querySelector(".dynamic-email");
//  const welcome = document.querySelector(".welcome");

//  function getUrlParameter(name) {
//      name = name.replace(/[\[]/,  "\\[").replace(/[\]]/,  "\\]");
//      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
//      var results = regex.exec(location.search);
//      return results === null
//      ? ""
//      : decodeURIComponent(results[1].replace(/\+/g, " "));
//  }

//  function capitalize(string) {
//      return string.charAt(0).toUpperCase() + string.slice(1);
//       }

//       dynamicName.innerHTML = capitalize(getUrlParameter("name"));
//       dynamicEmail.setAttribute("value", getUrlParameter("email"));

//       if (!getUrlParameter("name")) {
//           welcome.style.display = "none";
//       }
 

// function getUrlParameter(name) {
//     name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
//     var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
//     var results = regex.exec(location.search);
//     return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
// };