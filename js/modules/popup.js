export function togglePopup() {

    document.querySelector ("#show-signin").addEventListener("click", function(){
        document.querySelector("#signin").classList.add("active");
    });
    
    document.querySelector ("#signin #close-signin").addEventListener("click", function(){
        document.querySelector("#signin").classList.remove("active");
    });
    
    document.querySelector ("#show-login").addEventListener("click", function(){
        document.querySelector("#login").classList.add("active");
    });
    
    document.querySelector ("#login #close-login").addEventListener("click", function(){
        document.querySelector("#login").classList.remove("active");
    });
    
}