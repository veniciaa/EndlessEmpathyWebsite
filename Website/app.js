//CONTACT US FORM VALIDATION

function validateForm() {
    //Check that someone has actually entered something 
    var validateName = document.getElementById("myName").value;

    if (validateName == "Your name here" || validateName == "") {
        alert("Please enter your name");
        return; //stops the function 
    }

    //Check that the email address includes a @ and . in it
    var validateEmail = document.getElementById("myEmail").value;

    if (validateEmail.includes("@") && validateEmail.includes(".")) {
        // Email contains required symbols
    } else {
        alert("Email format not valid ");
        return; //stops the function 
    }
}