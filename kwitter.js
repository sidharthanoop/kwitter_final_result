function adduser () {
    user_name=document.getElementById("user_name").value;
    if(user_name==null){
        document.getElementById("user_name").innerHTML="enter your name here";
    }
    else{
        localStorage.setItem("user_name",user_name);
        window.location="kwitter_room.html";
    }
}