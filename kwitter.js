var username;
function login(){
username=document.getElementById("username_input").value;
localStorage.setItem("Username",username);
window.location="kwitter_room.html"
}
