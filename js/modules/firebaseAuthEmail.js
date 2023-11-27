import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

export function authEmail(app) {
    const d = document,
    auth = getAuth(app),
    $logoff = d.getElementById("logoff-auth"),
    $appAuthEmail = d.getElementById("app-auth-email"),
    $login = d.getElementById("show-login"),
    $signin = d.getElementById("show-signin");

    onAuthStateChanged(auth, (user) => {
    console.log(user);

    if (user) {
        $login.style.display = 'none';
        $signin.style.display = 'none';
        $logoff.innerHTML= `
        <a href="#" id="logout">Cerrar sesión</a>
        `;
    } else {
        $login.style.display = 'block';
        $signin.style.display = 'block';
        $logoff.innerHTML= ``;
    }
    });

    d.addEventListener("submit", (e) => {
    e.preventDefault();
    let $form = e.target;

    if ($form.matches("#form-signin")) {
        alert("Creando Cuenta");
        createUserWithEmailAndPassword(auth, $form.email.value, $form.pass.value)
        .then((res) => {
            console.log(res);
            $appAuthEmail.innerHTML = `<p>Usuario creado con el correo <b>${$form.email.value}</b></p>`;
            sendEmailVerification(auth.currentUser)
            .then(() => {

            });
            $form.reset();
        })
    .catch((err) => {
            console.log(err);
            $appAuthEmail.innerHTML = `<p>Ocurrio un error al crear la cuenta <b>${err.message}</b></p>`;
            $form.nombre.focus();
        });
    }

    if ($form.matches("#form-login")) {
        alert("Iniciando Sesión");

        signInWithEmailAndPassword(auth, $form.email.value, $form.pass.value)
        .then((res) => {
            $appAuthEmail.innerHTML = `<p>Usuario logueado con el correo <b>${$form.email.value}</b></p>`;
            $form.reset();
        })
        .catch((err) => {
            $appAuthEmail.innerHTML = `<p>Ocurrio un error al iniciar sesión <b>${err.message}</b></p>`;
            $form.pass.focus();
        });
    }
    });

    d.addEventListener("click", (e) => {
    if (e.target.matches("#logout")) {
        alert("Cerrando sesión");
        signOut(auth);
    }
    
    if(e.target.matches("#forgot-pass")){
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Enviando correo de recuperación")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }   
    });
}