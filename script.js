$(document).ready(function(){




    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBIoXOFrVzc0uh0ZQIceW4XK0rWiVx2d-4",
      authDomain: "yardshark-e535b.firebaseapp.com",
      databaseURL: "https://yardshark-e535b.firebaseio.com",
      projectId: "yardshark-e535b",
      storageBucket: "yardshark-e535b.appspot.com",
      messagingSenderId: "563245234121"
    };
    firebase.initializeApp(config);

    var txtEmail = document.getElementById("emailF");
    var txtPass= document.getElementById("passwordF");
    var btn1= document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");

$("#btn1").on("click",function() {

var email = txtEmail.value;
var password = txtPass.value;
var auth = firebase.auth();

const promise = auth.createUserWithEmailAndPassword(email,password);
promise.catch(e=>console.log(e.message));

});
});
