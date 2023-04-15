alert("L")
//Stolen from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("***"+re.test(email)) 
    return re.test(email);
}

username.addEventListener('keyup', function(e) {   
    console.log("LLL")
    if(validateEmail(e.target.value)) {
      console.log("green")                                                  //*************TODO********
      //buttonElement.style['background-color']="green";
    }
    else {
      console.log("red")                                                    //*************TODO********
      //buttonElement.style['background-color']="red";
    }
  })