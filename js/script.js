import {app} from "./modules/firebaseConfig.js";
import { firebaseCRUD } from "./modules/firebaseDataBase.js";
import { authEmail } from "./modules/firebaseAuthEmail.js";

firebaseCRUD(app);
authEmail(app);