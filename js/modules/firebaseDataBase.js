import {
    getDatabase,
    ref,
    onValue,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

export function firebaseCRUD(app) {
    const d = document,
        db = getDatabase(app),
        refPrice = ref(db, "prices"),
        $container = d.getElementById("products"), 
        $template = d.getElementById("template-product").content, 
        $fragment = d.createDocumentFragment();

    function renderProducts() {
        onValue(refPrice, (snapshot) => {
            $container.innerHTML = "";

            snapshot.forEach((el) => {
                let values = el.val();
                $template.querySelector("h3").innerText = values.product;
                $template.querySelector("p").innerText = "Precio: $" + values.price;

                let $clone = d.importNode($template, true);
                $fragment.appendChild($clone);
            });

            $container.appendChild($fragment);
        });
    }

    d.addEventListener("DOMContentLoaded", (e) => renderProducts());
}

