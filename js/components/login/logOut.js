import { removeUser, removeToken } from "../../utils/storage.js";



export function logOut() {


const logoutBtn = document.querySelector(".logout-btn");

    
    if(logoutBtn) {
    
        logoutBtn.onclick = function() {
            const doLogOut = confirm("Are you sure?");
            
            if(doLogOut) {
                removeToken();
                removeUser();
                location.href = "index.html";
            }
          };
    }
}