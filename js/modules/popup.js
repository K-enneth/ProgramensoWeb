export function togglePopup() {
    const d = document;
    d.querySelector("#show-login").addEventListener("click",(e) => {
        d.querySelector(".popup").classList.add("active")
    })
    
}