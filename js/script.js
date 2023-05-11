function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var subject = document.forms["contactForm"]["subject"].value;
    var emailRegex = /^\w+([\.-]?\w+)*@(gmail\.com|ymail\.com|rocketmail\.com|hotmail.com|icloud.com|mail.com|yandex.com)$/;
    
    if (name == "") {
      alert("Please enter your name");
      return false;
    }
    if (email == "") {
      alert("Please enter your email");
      return false;
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address from gmail, ymail,rocketmail,hotmail,icloud and mail domains");
      return false;
    }
    if (subject == "Select Option") {
      alert("Please select an option");
      return false;
    }
    
    return true;
  }