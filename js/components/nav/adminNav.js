import { getToken } from "../../utils/storage.js";

export function adminNav() {

const token = getToken();

const headerLinks = document.querySelector(".header-links");
const navMenu = document.querySelector(".nav-menu");

if(token) {
    headerLinks.innerHTML += `<div class="dropdown">
                   <div class="nav-text" id="adminBtn">
                     Admin
                    </div>
                    <div class="admin-dropdown">
                    <a class="admin-link" href="add.html">
                        Add products
                    </a>
                    <a class="admin-link" href="edit.html">
                    Edit products
                </a>
                    </div>
                    </div>`

    navMenu.innerHTML += `
                            <div class="nav-menu-item" id="adminBtnMobil">
                                Admin
                            </div>
                            <div class="admin-dropdown-mobil">
                             <a class="admin-link" href="add.html">
                                 Add products
                             </a>
                              <a class="admin-link" href="edit.html">
                                 Edit products
                                </a>
                            </div>`
    };

    const dropdown = document.querySelector(".admin-dropdown");
    const adminBtn = document.querySelector("#adminBtn");

    const dropdownMobil = document.querySelector(".admin-dropdown-mobil");
    const adminBtnMobil = document.querySelector("#adminBtnMobil")

    function loginDropdown(dropdown, btn) {
        
        btn.onclick = function() {
        dropdown.classList.toggle("show");
        console.log("Hei");
      };

};

loginDropdown(dropdown, adminBtn);
loginDropdown(dropdownMobil, adminBtnMobil);

}

