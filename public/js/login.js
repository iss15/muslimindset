const md5=require("md5")

const email=$('[name=email]')[0]
const password=md5($('[name=password]')[0])

//Stolen from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    return re.test(email);
}

email.addEventListener('keyup', function(e) {   
    if(e.target.value === "") {
      return;
    }
    if(validateEmail(e.target.value)) {
      alert("green")                                                  //*************TODO********
      //buttonElement.style['background-color']="green";
    }
    else {
      alert("red")                                                    //*************TODO********
      //buttonElement.style['background-color']="red";
    }
  })

  function validatePassword(password){

  }

  password.addEventListener('keyup', function(e) {   
    if(e.target.value === "") {
      return;
    }
    if(validatePassword(e.target.value)) {
      alert("green")                                                  //*************TODO********
      //buttonElement.style['background-color']="green";
    }
    else {
      alert("red")                                                    //*************TODO********
      //buttonElement.style['background-color']="red";
    }
  })