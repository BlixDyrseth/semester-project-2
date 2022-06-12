export function mobilNav() {

    const hiddenMenu = document.getElementById("nav-menu");
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const closeBtn = document.getElementById("closeBtn");
    
    
    hamburgerBtn.onclick = function() {
        hiddenMenu.style.display = "flex";
        hamburgerBtn.style.display = "none";
        closeBtn.style.display = "block"
        console.log("hello");
    }
    
    closeBtn.onclick = function() {
        hiddenMenu.style.display = "none";
        hamburgerBtn.style.display = "block";
        closeBtn.style.display = "none";
    }
    
    window.onclick = function(event) {
        if(event.target == hiddenMenu) {
            hiddenMenu.style.display = "none";
            hamburgerBtn.style.display = "block"
            closeBtn.style.display = "none";
            console.log("Sup?")
        }
    }
    
}