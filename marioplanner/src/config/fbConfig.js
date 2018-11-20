  import firebase from 'firebase/app'
  import 'firebase/firestore';
  import 'firebase/auth';

  
  // Initialize Firebase
  
  var config = {
    apiKey: "AIzaSyDJyr-ZRMPKoQY_SyGS_kEM2DbnA9r3nqg",
    authDomain: "marioplan-247c3.firebaseapp.com",
    databaseURL: "https://marioplan-247c3.firebaseio.com",
    projectId: "marioplan-247c3",
    storageBucket: "",
    messagingSenderId: "430885947119"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true});


  export default firebase;