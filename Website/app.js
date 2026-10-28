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


//GET HELP/ENQUIRY PAGE FORM VALIDATION

function validateHelpForm() {
    // Checks if the name was entered
    var validateName = document.getElementById("helpName").value.trim();

    if (validateName == "Your name here" || validateName == "") {
        alert("Please enter your name");
        return;
    }

    // checks that email has @ and . in it and if it is a number checks if it is 10 numers
    var validateContact = document.getElementById("helpContact").value.trim();

    if (validateContact == "Email or phone number here" || validateContact == "") {
        alert("Please enter your contact information");
        return;
    }
    
    // If they typed an email format
    if (validateContact.includes("@") || isNaN(validateContact)) {

        if (!validateContact.includes("@") || !validateContact.includes(".")) {
            alert("Not a valid email");
            return;
        }
    }

    // request/needs 
    var validateDetails = document.getElementById("helpDetails").value.trim();
    if (validateDetails == "Type your request here..." || validateDetails == "") {
        alert("Please add ypur request and support nedded details");
        return;
    }

    // If everything is right its successful
    alert("Excellent! Form submitted successfully!");
}
