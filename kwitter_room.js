var firebaseConfig = {
      apiKey: "AIzaSyBoktMZIBAQ7DFZTqitJJzbP901ZbXVf7o",
      authDomain: "kwitterdatabase.firebaseapp.com",
      databaseURL: "https://kwitterdatabase-default-rtdb.firebaseio.com",
      projectId: "kwitterdatabase",
      storageBucket: "kwitterdatabase.appspot.com",
      messagingSenderId: "955300067343",
      appId: "1:955300067343:web:8548fa0f4be4d458450b7a"
    };
    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
//ADD YOUR FIREBASE LINKS HERE
function addroom() {
Room_names=document.getElementById("room_name").value;
firebase.database().ref("/").child(Room_names).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",Room_names)
;
window.location="kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function(snapshot)
       {
             document.getElementById("output").innerHTML = "";
             snapshot.forEach(function(childSnapshot)
              {
                    childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>"
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName (name) {
 console.log(name);
 localStorage.setItem("room_name",name);
 window.location="kwitter_page.html";
}
function logout () {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}