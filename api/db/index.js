// export out whatever 'api' might need to use
import firebase from "firebase/app";
import "firebase/firestore";
import config from "./config";

export default firebase.initializeApp(config).firestore();
