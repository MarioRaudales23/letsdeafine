import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCmbqA0knUr5Sy6fOcBK0kBcVw5n8KZFN4",
    authDomain: "letsdeafine.firebaseapp.com",
    databaseURL: "https://letsdeafine.firebaseio.com",
    projectId: "letsdeafine",
    storageBucket: "",
    messagingSenderId: "519277040295",
    appId: "1:519277040295:web:b764c95506e6ea01"
  };

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
    }
  }
  
  export default Firebase;