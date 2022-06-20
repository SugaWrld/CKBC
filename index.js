let count = 0
// nav bar
let homeBtn = document.querySelector("#home-btn")
let eventBtn = document.querySelector("#event-btn")
let contactBtn = document.querySelector("#contact-btn")
let aboutBtn = document.querySelector("#about-btn")
let buttonName = document.getElementById("translate-Kachin")
//Home
let scripture = document.querySelector("#scripture")
let verse = document.querySelector("#verse")
//Events
let eventList = document.querySelector("#event-list")



function kachinTranslationHome() {
    if(count === 0){   // translation in Kachin
        count = 1
        //nav bar
        homeBtn.innerHTML = "<b>NTA</b>"
        eventBtn.textContent = "LAMANG"
        contactBtn.textContent = "MATUT-MAHKAI"
        aboutBtn.textContent = "LABAU"
        buttonName.textContent = "English"

        // Home
        scripture.textContent = "\"Yesu Hkristu a chyeju hte chye chyang ai lam hta kaba waga.\""
        verse.textContent = "(II Pet 3:18)"
    }
    else if(count === 1){       // translation in English
        count = 0
        //nav bar
        homeBtn.innerHTML = "<b>HOME</b>"
        eventBtn.textContent = "EVENTS"
        contactBtn.textContent = "CONTACT"
        aboutBtn.textContent = "ABOUT"
        buttonName.textContent = "Kachin"
        //home
        scripture.textContent = "\"Growing in grace and knowledge of the Lord Jesus.\""
        verse.textContent = "(II Peter 3:18)"
    }
}
function kachinTranslationEvents() {
    if(count === 0){   // translation in Kachin
        count = 1
        //nav bar
        homeBtn.textContent = "NTA"
        eventBtn.innerHTML = "<b>LAMANG</b>"
        contactBtn.textContent = "MATUT-MAHKAI"
        aboutBtn.textContent = "LABAU"
        buttonName.textContent = "English"
        
        //Events
        eventList.textContent = "Nawku Anten: 4:00PM - 6:00PM (ETS)"
    }
    else if(count === 1){       // translation in English
        count = 0
        //nav bar
        homeBtn.textContent = "HOME"
        eventBtn.innerHTML = "<b>EVENTS</b>"
        contactBtn.textContent = "CONTACT"
        aboutBtn.textContent = "ABOUT"
        buttonName.textContent = "Kachin"
        //home
        eventList.textContent = "Church worship time: 4:00PM - 6:00PM (ETS)"
    }
}
function kachinTranslationContact() {
    if(count === 0){   // translation in Kachin
        count = 1
        //nav bar
        homeBtn.textContent = "NTA"
        eventBtn.textContent = "LAMANG"
        contactBtn.innerHTML = "<b>MATUT-MAHKAI</b>"
        aboutBtn.textContent = "LABAU"
        buttonName.textContent = "English"
    }
    else if(count === 1){       // translation in English
        count = 0
        //nav bar
        homeBtn.textContent = "HOME"
        eventBtn.textContent = "EVENTS"
        contactBtn.innerHTML = "<b>CONTACT</b>"
        aboutBtn.textContent = "ABOUT"
        buttonName.textContent = "Kachin"
    }
}
function kachinTranslationAbout() {
    if(count === 0){   // translation in Kachin
        count = 1
        //nav bar
        homeBtn.textContent = "NTA"
        eventBtn.textContent = "LAMANG"
        contactBtn.textContent = "MATUT-MAHKAI"
        aboutBtn.innerHTML = "<b>LABAU</b>"
        buttonName.textContent = "English"
    }
    else if(count === 1){       // translation in English
        count = 0
        //nav bar
        homeBtn.textContent = "HOME"
        eventBtn.textContent = "EVENTS"
        contactBtn.textContent = "CONTACT"
        aboutBtn.innerHTML= "<b>ABOUT</b>"
        buttonName.textContent = "Kachin"
    }
}