export function togglePopup(popupId, btnId) {
    const d = document;
    d.querySelector("#btnId").addEventListener("click",(e) => {
        d.querySelector(".popup").classList.add("act")
    })
    
}