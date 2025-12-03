const form = document.getElementById("ProductForm");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productQuantity = document.getElementById("productQuantity");
const Category = document.getElementById("Category");
const expiryDate = document.getElementById("expiryDate");

let error = document.querySelectorAll(".error");

function validateName() {

    if (productName.value.trim() === "") {
        error[0].innerHTML = "Product name is required";
        return false;
    }
    error[0].innerHTML = "";
    return true;
}

function validatePrice() {
    if (productPrice.value === "") {

        error[1].innerHTML = "Price must be more than 0";
        return false;
    }
    error[1].innerHTML = "";
    return true;
}
function validateqt()
{
    if(productQuantity.value==="")
    {
        error[2].innerHTML="Please enter quantity";
        return false;
    }
    error[2].innerHTML = "";
    return true;
}
function validatecat()
{
    if(Category.value ==="")
    {
        error[3].innerHTML = "PLease select a category.";
        return false;

    }
    error[3].innerHTML = "";
    return true;
    
}
function validateExp()
{
    if(expiryDate.value === "")
    {
        error[4].innerHTML="Please select a date";
        return false;
    }
    error[4].innerHTML ="";
    return true;

}

form.addEventListener("submit", function (event) {
    if (!validateName() || !validatePrice() ||!validateqt() ||!validatecat ||!validateExp) {
        event.preventDefault();
    }

});