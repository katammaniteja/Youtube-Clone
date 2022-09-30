import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANkvZMkDcLGgKyG8hZyYng5PjuyWMYTpU",
  authDomain: "ytclone-maniteja.firebaseapp.com",
  projectId: "ytclone-maniteja",
  storageBucket: "ytclone-maniteja.appspot.com",
  messagingSenderId: "202256526205",
  appId: "1:202256526205:web:963301fb701c024bfefa14",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
