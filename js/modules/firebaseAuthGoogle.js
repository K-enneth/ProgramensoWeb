import {
    getAuth,
    onAuthStateChanged,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

export function authGoogle(app) {
    const d = document,
    auth = getAuth(app),
    $logoff = d.getElementById("logoff-auth"),
    provider = new GoogleAuthProvider(),
    $login = d.getElementById("show-login"),
    $signin = d.getElementById("show-signin");

    onAuthStateChanged(auth, (user) => {
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

    
    d.addEventListener("click", (e) => {
    if (e.target.matches("#google-login")) {
        alert("Ingresando con Google");
        signInWithPopup(auth, provider)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    if (e.target.matches("#logout")) {
        alert("Cerrando sesión");
        signOut(auth);
    }
    });
}