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
    $form = d.getElementById("form-price"),
    $table = d.getElementById("table-price"),
    $template = d.getElementById("template-price").content,
    $fragment = d.createDocumentFragment();

    function renderPrice() {
        onValue(refPrice, (snapshot) => {
        $table.querySelector("tbody").innerHTML = "";
    
        snapshot.forEach((el) => {
            let values = el.val(),
            key = el.key;
    
            $template.querySelector(".key-id").id = key;
            $template.querySelector(".key").innerText = key;
            $template.querySelector(".product").innerText = values.product;
            $template.querySelector(".price").innerText = values.price;
    
            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        });
    
        $table.querySelector("tbody").appendChild($fragment);
        });
    }

    d.addEventListener("DOMContentLoaded", (e) => renderPrice());

    $form.addEventListener("submit", (e) => {
    e.preventDefault();

    let key = e.target.key,
    values = {
        product: $form.product.value,
        price: $form.price.value,
    };

    if (!key.value) {
    push(ref(db, "price"), values);
    } else {
    update(ref(db), {
        ["/price/" + key.value]: values,
    });
    }

    $form.reset();
});

d.addEventListener("click", (e) => {
    if (!e.target.matches(".edit") && !e.target.matches(".delete"))
    return false;

    if (e.target.matches(".edit")) {
    alert("Editar");
    let $parent = e.target.parentElement.parentElement;
    $form.product.value = $parent.querySelector(".product").innerText;
    $form.price.value = $parent.querySelector(".price").innerText;
    $form.key.value = $parent.id;
    }

    if (e.target.matches(".delete")) {
    alert("Eliminar");
    let key = e.target.parentElement.parentElement.id,
        deleteId = confirm(`¿Estás seguro de eliminar el id ${key}?`);

    if (deleteId) remove(ref(db, `/price/${key}`));
    }
});
}

