import {app} from "./modules/firebaseConfig.js";
import { firebaseCRUD } from "./modules/firebaseDataBase.js";
import { authEmail } from "./modules/firebaseAuthEmail.js";
import { authGoogle } from "./modules/firebaseAuthGoogle.js";
import { togglePopup } from "./modules/popup.js";

firebaseCRUD(app);
authEmail(app);
authGoogle(app);
togglePopup();
