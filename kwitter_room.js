
var firebaseConfig = {
      apiKey: "AIzaSyCNc9pGrJ_ix6aEYlb6UPsllLLZnnWXkS8",
      authDomain: "kwitter-1b786.firebaseapp.com",
      databaseURL: "https://kwitter-1b786-default-rtdb.firebaseio.com/",
      projectId: "kwitter-1b786",
      storageBucket: "kwitter-1b786.appspot.com",
      messagingSenderId: "371177772593",
      appId: "1:371177772593:web:7ee326c2aa93a8ddcb6710"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logoout(){
      window.location="index.html";
      localStorage.removeItem("Username");
}