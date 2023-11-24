import {
    sendPasswordResetEmail,
    getAuth,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

import {app} from "./modules/firebaseConfig.js";

const d = document,
auth = getAuth(app);

d.addEventListener("submit", (e) => {
    e.preventDefault();
    let $form = e.target;
    
    if($form.matches("#form-pass")){
        alert("Enviando correo");
        sendPasswordResetEmail(auth, $form.email.value)
        .then(() => {
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        });
    }
})
