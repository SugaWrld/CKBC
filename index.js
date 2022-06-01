let lang = document.getElementById("language").value;
let text = document.getElementById("welcome");

function language(){
    if (lang === 1){
        text.innerText="Hello";
    }
}