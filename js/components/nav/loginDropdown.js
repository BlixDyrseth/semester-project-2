import { getToken } from "../../utils/storage.js";


export function loginDropdown() {

    const dropdown = document.querySelector(".profil-dropdown");
    const btn = document.querySelector(".profil-btn");
    

btn.onclick = function() {
    dropdown.classList.toggle("show");
    console.log("Hei");
  }

/*
window.onclick = function(event) {
    if(!event.target.matches(btn)) {

        console.log("hello");
    }
}*/
}

export function loginDropdownMobil() {

    const dropdownMobil = document.querySelector(".profil-dropdown-mobil");
    const mobilbtn = document.querySelector(".profil-btn-mobil");
    

    mobilbtn.onclick = function() {
    dropdownMobil.classList.toggle("show");
    console.log("Hei");
  };
}