particlesJS.load('particles', 'particlesjs-config.json');

let formElem = document.querySelector("#form-container form");
formElem.addEventListener("submit",(e) => {
    e.preventDefault();
    fetch(formElem.action,{
        method: "POST",
        mode: "no-cors",
        body: new FormData(formElem)
    }).then(()=> {
        let fc=document.getElementById("form-container");
        fc.innerHTML='<p class="thanks">Thanks for your interest. We will get in touch with you shortly</p>';
    })
});