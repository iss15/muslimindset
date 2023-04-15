$("username").addEventListener('keyup', function(e) {
    if(e.target.value === "") {
      return;
    }
    if(validateEmail(e.target.value)) {
      buttonElement.style['background-color']="green";
    }
    else {
          buttonElement.style['background-color']="red";
    }
  })