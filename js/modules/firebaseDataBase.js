import {
    getDatabase,
    ref,
    onValue,
    set,
    push,
    update,
    remove,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

export function firebaseCRUD(app){
    const d = document,
    db = getDatabase(app),
    refPrice = ref(db, "prices"),
    $table = d.getElementById("table-price"),
    $template = d.getElementById("template-price").content,
    $fragment = d.createDocumentFragment();

    function renderPrice() {
        onValue(refPrice, (snapshot) => {
        $table.querySelector("tbody").innerHTML = "";
    
        snapshot.forEach((el) => {
            let values = el.val();
            $template.querySelector(".product").innerText = values.product;
            $template.querySelector(".price").innerText = values.price;
            $template.querySelector(".type").innerText = values.type;
    
            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        });
    
        $table.querySelector("tbody").appendChild($fragment);
        });
    }

    d.addEventListener("DOMContentLoaded", (e) => renderPrice());

}

