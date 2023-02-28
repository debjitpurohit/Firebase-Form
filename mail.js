const firebaseConfig = {
    apiKey: "AIzaSyBT1oKx1HtG02yZ0DQB50MoiFP4qHM_pHs",
    authDomain: "formhtmlcss.firebaseapp.com",
    databaseURL: "https://formhtmlcss-default-rtdb.firebaseio.com",
    projectId: "formhtmlcss",
    storageBucket: "formhtmlcss.appspot.com",
    messagingSenderId: "106309394190",
    appId: "1:106309394190:web:b387de874ce0cccd56415f"
  };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault(); // to prevent default behaviour of form { submit click krleii page reloading }

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  console.log(name, emailid, msgContent);

  saveMessages(name, emailid, msgContent);
    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
  }

  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };