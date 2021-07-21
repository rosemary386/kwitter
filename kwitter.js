function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
    
}

function colorbg(){
          var x=document.getElementById("shades");
          var bgcolor=x.options[x.selectedIndex].value;
          document.body.style.backgroundColor=bgcolor;
      }
    