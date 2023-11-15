import {app} from "./modules/firebaseConfig.js";
import { firebaseCRUD } from "./modules/firebaseDataBase.js";
import { authEmail } from "./modules/firebaseAuthEmail.js";
import { authGoogle } from "./modules/firebaseAuthGoogle.js";

authGoogle(app);
firebaseCRUD(app);
authEmail(app);

