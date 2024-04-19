// Form functionality
document.getElementById("send_btn").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent page refresh
    sendData();
});

document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        sendData();
    }
});

function sendData() {
    const nameInput = document.getElementById("name_input").value.trim();
    const emailInput = document.getElementById("email_input").value.trim();
    const numberInput = document.getElementById("number_input").value.trim();

    if (!nameInput || !emailInput || !numberInput) {
        if (!nameInput && !emailInput && !numberInput) {
            alert("Please enter information");
        } else {
            let errorMessage = "Please enter ";
            if (!nameInput) {
                errorMessage += "your name";
                if (!emailInput && !numberInput) {
                    errorMessage += " and ";
                } else if (!emailInput || !numberInput) {
                    errorMessage += " and ";
                }
            }
            if (!emailInput) {
                errorMessage += "your email";
                if (!numberInput) {
                    errorMessage += " and ";
                }
            }
            if (!numberInput) {
                errorMessage += "your number";
            }
            alert(errorMessage + ".");
        }
        return;
    }

    document.getElementById("send_btn").disabled = true; // Disable button
    document.querySelector(".send").textContent = "Wait..."; // Change button text

    let param = {
        from_name: nameInput,
        email_input: emailInput,
        number_input: numberInput,
    };

    emailjs.send("service_693nxae", "template_4yh46j9", param).then((res) => {
        alert("Got your information");
        document.getElementById("name_input").value = ""; // Clear input fields
        document.getElementById("email_input").value = "";
        document.getElementById("number_input").value = "";
        document.querySelector(".send").textContent = "Send"; // Reset button text
        document.getElementById("send_btn").disabled = false; // Enable button
    }).catch((error) => {
        alert("An error occurred while sending the information");
        console.error("Error:", error);
        document.querySelector(".send").textContent = "Send"; // Reset button text
        document.getElementById("send_btn").disabled = false; // Enable button
    });
}
// 

var instagram = document.getElementById("instagram");
if (instagram) {
    instagram.addEventListener("click", function (e) {
        window.location.href = "./about.html";
    });
}

var medium = document.getElementById("medium");
if (medium) {
    medium.addEventListener("click", function (e) {
        window.location.href = "./terms.html";
    });
}

var aboutUs = document.getElementById("aboutUs");
if (aboutUs) {
    aboutUs.addEventListener("click", function (e) {
        window.location.href = "./about.html";
    });
}

var terms = document.getElementById("terms");
if (terms) {
    terms.addEventListener("click", function (e) {
        window.location.href = "./terms.html";
    });
}

var refund = document.getElementById("refund");
if (refund) {
    refund.addEventListener("click", function (e) {
        window.location.href = "./refund.html";
    });
}