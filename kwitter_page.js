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
    Username=localStorage.getItem("Username");
    var roomName=localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code

//End code
      } });  }); }
getData();
function logout(){
      window.location="index.html";
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");

}
function Send(){
message=document.getElementById("input_message").value;
firebase.database().ref(roomName).push({
      name:Username, 
      msg:message,
      like:0
})
document.getElementById("input_message").value="";
}