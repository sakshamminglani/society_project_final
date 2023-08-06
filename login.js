
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA3qQkhAVzWMp_AVQF_9DwVB0lqJIH504M",
    authDomain: "society-portal.firebaseapp.com",
    projectId: "society-portal",
    storageBucket: "society-portal.appspot.com",
    messagingSenderId: "1027016252296",
    appId: "1:1027016252296:web:26715de0cbddf70212b83d",
    measurementId: "G-ZB54HV8KG2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth=getAuth()
  var email=document.getElementById("email")
  var password=document.getElementById("password")

  window.login=function(e){
    e.preventDefault();
    var obj={
        email:email.value,
        password:password.value,
    }
    signInWithEmailAndPassword(auth,obj.email,obj.password)
    .then(function(success){
        window.location.replace("society portal work.html")
        alert("Login Successful")
    })
    .catch(function(error){
        alert("error :"+err)
    })
    console.log(obj)
  };
