const form = document.getElementById("regForm"); 
const inputs = document.querySelectorAll(".inputs"); 
let error = document.querySelectorAll(".error"); 
 
form.addEventListener("submit", function (event) { 
    let ok = true; 
 
    if (inputs[0].value === "") { 
        error[0].innerHTML = "Name is required."; 
        ok = false; 
    } else { 
        error[0].innerHTML = ""; 
    } 
 
    if (inputs[1].value === "") { 
        error[1].innerHTML = "Email required."; 
        ok = false; 
    } else { 
        error[1].innerHTML = ""; 
    } 
 
    if (inputs[2].value === "") { 
        error[2].innerHTML = "Password is required."; 
        ok = false; 
    } else if (inputs[2].value.length < 8) { 
        error[2].innerHTML = "Min 8 characters."; 
        ok = false; 
    } else { 
        error[2].innerHTML = ""; 
    } 
 
    if (inputs[3].value === "") { 
        error[3].innerHTML = "Confirm Password is required."; 
        ok = false; 
    } else if (inputs[2].value !== inputs[3].value) { 
        error[3].innerHTML = "Passwords do not match"; 
        ok = false; 
    } else { 
        error[3].innerHTML = ""; 
    } 
 
    if (!inputs[4].checked || !inputs[5].checked) { 
        error[4].innerHTML = "Please select a gender."; 
        ok = false; 
    } else { 
        error[4].innerHTML = ""; 
    } 
 
    if (inputs[6].value === "") { 
        error[5].innerHTML = "DOB is required."; 
        ok = false; 
    } else { 
        error[5].innerHTML = ""; 
    } 
 
    if (!ok) { 
        event.preventDefault(); 
    } else { 
        alert("Reg Success"); 
    }}); 
