
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDYl6XbhKGKiXGFRyzp1T6Xowkd9D5c-Vc",
    authDomain: "kwitter-af435.firebaseapp.com",
    databaseURL: "https://kwitter-af435-default-rtdb.firebaseio.com",
    projectId: "kwitter-af435",
    storageBucket: "kwitter-af435.appspot.com",
    messagingSenderId: "790420577049",
    appId: "1:790420577049:web:e8fdc2999bd36dacf7c388",
    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({purpose:"adding user"});
    
}