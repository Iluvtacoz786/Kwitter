
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
    document.getElementById("display_user").innerHTML=Username;

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
       row="<div id='"+Room_names+"'onclick='redirect_room_name(this.id)'class='room_name'>"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+= row;
      //Start code

      //End code
      });});}
getData();
function logout(){
      window.location="index.html";
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");

}
function addRoom(){
      room_name=document.getElementById("room_input").value;
      firebase.database().ref("/").child(room_name).update({purpose:"addRoomName"});
      localStorage.setItem("room_name",  room_name);
}
function redirect_room_name(name){
      console.log("The room name you clicked is="+name);
      localStorage.setItem("room_name",  name);
      window.location="kwitter_page.html";

}