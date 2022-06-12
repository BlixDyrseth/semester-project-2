import { getToken} from "../../utils/storage.js";


export function loginBtn() {
const token = getToken();

const dropdown = document.querySelector(".profil-dropdown");

if (!token) {
    dropdown.innerHTML = `<div class="dropdown-item">
                             <a href=login.html>
                                Login
                            </a>
                         </div>`
} else {
    dropdown.innerHTML = `<div class="dropdown-item">
                             <div class="logout-btn">
                                Log out
                              </div>
                            </div>`
                            
}


}




