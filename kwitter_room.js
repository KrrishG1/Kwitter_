var firebaseConfig = {
  apiKey: "AIzaSyAVU2dOvYZ08hb2gnhSutQm79S7S5QaGRA",
  authDomain: "kwitter-145bb.firebaseapp.com",
  databaseURL: "https://kwitter-145bb-default-rtdb.firebaseio.com",
  projectId: "kwitter-145bb",
  storageBucket: "kwitter-145bb.appspot.com",
  messagingSenderId: "343811368936",
  appId: "1:343811368936:web:916772f985063967eae65d",
  measurementId: "G-ECWE5BNV0X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }