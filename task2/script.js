function login()
{
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const loginData = {
        email,
        password,
    };
    localStorage.setItem("loginData", JSON.stringify(loginData));
    console.log(loginData);

    // Basic email format validation
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check if password is not empty
    if (password === "") {
        alert("Password cannot be empty.");
        return;
    }
    console.log("Login successful!");
}

function signup() 
{
    const firstName = document.getElementById("signup-firstname").value;
    const lastName = document.getElementById("signup-lastname").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const address = document.getElementById("signup-address").value;
    const phone = document.getElementById("signup-phone").value;
    const imageDataURL = document.getElementById("signup-image").value;

    const signupData = {
        firstName,
        lastName,
        email,
        password,
        address,
        phone,
        image: imageDataURL 
    };
    console.log(signupData);
    
    localStorage.setItem("signupData", JSON.stringify(signupData));
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check if password is not empty
    if (password === "") {
        alert("Password cannot be empty.");
        return;
    }
    alert("Signup successful!");
}

// Helper function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function togglePasswordVisibility(inputId)
{
    const passwordInput = document.getElementById(inputId);
    const passwordIcon = document.getElementById(`show-${inputId}`);
    if (passwordInput.type === "password")
    {
        passwordInput.type = "text";        
        passwordIcon.textContent = "👁️";    
    } 
    else 
    {
        passwordInput.type = "password";
        passwordIcon.textContent = "👁️";
    }
}
