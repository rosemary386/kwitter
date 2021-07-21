
var firebaseConfig = {
  apiKey: "AIzaSyDYl6XbhKGKiXGFRyzp1T6Xowkd9D5c-Vc",
  authDomain: "kwitter-af435.firebaseapp.com",
  databaseURL: "https://kwitter-af435-default-rtdb.firebaseio.com",
  projectId: "kwitter-af435",
  storageBucket: "kwitter-af435.appspot.com",
  messagingSenderId: "790420577049",
  appId: "1:790420577049:web:e8fdc2999bd36dacf7c388",
  measurementId: "G-WWQ92KVLLF"
};
    
  
  firebase.initializeApp( firebaseConfig);
 firebase.analytics();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
  console.log("room name" +Room_names);
  room="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>,<hr>";
  document.getElementById("output").innerHTML+=row;
      });});}
getData();

function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}
function redirctToRoomName(name){
    console.log("name");
    localStorage.setItem("room-name",name);
    window.location="kwitter_page.html";
}