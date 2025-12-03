const form = document.getElementById("productform");
const inputs = document.querySelectorAll(".i");
const error = document.querySelectorAll(".error");


form.addEventListener("submit",function(event)
{
    let ok=true;

    if(inputs[0].value === "")
    {
        error[0].innerHTML="Name required";
        ok = false;
    }
    else{
        error[0].innerHTML="";
    }

    if(inputs[1].value=== ""){
        error[1].innerHTML = "Price is required";
        ok = false;
    }
    else
    {
        error[1].innerHTML ="";
    }
    if(inputs[2].value===""){
        error[2].innerHTML = "Quantity required";
        ok=false;
    }
    else{
        error[2].innerHTML ="";
    }
    if(inputs[3].value==="")
    {
        error[3].innerHTML = "please select category";
        ok=false;
    }
    else 
    {
        error[3].innerHTML = "";
    }
    if(inputs[4].value==="")
    {
        error[4].innerHTML = "please select expiray date";
        ok=false;
    }
    else
    {
        error[4].innerHTML = "";
    }
    if(!ok)
    {
        event.preventDefault();

    }
    else
    {
        alert("Reg succes");
    }
    
    
});