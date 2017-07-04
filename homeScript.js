$(document).ready(function() {

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



  $("#btn1").on("click", function() {



  });

});

function signUpUser(){

  var txtEmail = document.getElementById("email1");
  var txtPass= document.getElementById("password1");
  var txtConf = document.getElementById("passConf1");

  var email = txtEmail.value;
  var password = txtPass.value;
  var passConf = txtConf.value;
  var auth = firebase.auth();

  if (password == passConf){

  const promise = auth.createUserWithEmailAndPassword(email,password);
  promise.catch(e=>console.log(e.message));
  $("#signUpModal").modal("hide");
  } else {

    swal(
      "Oops...",
      "Your passwords don't match!",
      "error"

    );

  }
}




function logInUser(){

  var txtEmail = document.getElementById("email2");
  var txtPass= document.getElementById("password2");

  var email = txtEmail.value;
  var password = txtPass.value;
  var auth = firebase.auth();



  const promise = auth.signInWithEmailAndPassword(email,password);
  promise.catch(e=>console.log(e.message));
  $("#logInModal").modal("hide");



  }

function hi(){

  alert("hi")
}