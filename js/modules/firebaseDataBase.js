import {
    getDatabase,
    ref,
    onValue,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

export function firebaseCRUD(app) {
    const d = document,
        db = getDatabase(app),
        refPrice = ref(db, "prices"),
        $searchInput = d.getElementById("searchInput"),
        $container = d.getElementById("products"), 
        $template = d.getElementById("template-product").content, 
        $fragment = d.createDocumentFragment();

        function renderProducts(searchTerm = "") {
            onValue(refPrice, (snapshot) => {
                $container.innerHTML = "";
                snapshot.forEach((el) => {
                    let values = el.val();
                    const productName = values.product.toLowerCase();
    
                    if (productName.includes(searchTerm.toLowerCase())) {
                        $template.querySelector(".product").innerText = values.product;
                        $template.querySelector(".price").innerText = "Precio: $" + values.price;
                        $template.querySelector(".type").innerText = values.type;
    
                        let $clone = d.importNode($template, true);
                        $fragment.appendChild($clone);
                    }
                });
    
                $container.appendChild($fragment);
            });
        }

    d.addEventListener("DOMContentLoaded", (e) => renderProducts());

    $searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.trim();
        renderProducts(searchTerm);
    });
}

