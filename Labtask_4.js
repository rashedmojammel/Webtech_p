
document.addEventListener("DOMContentLoaded", function () {

  // Form reference
  const form = document.querySelector("form");

  // Fields
  const emailField = document.getElementById("Email");
  const donationRadios = document.querySelectorAll("input[name='donation']");
  const otherAmountField = document.querySelector("input[name='other_amount']");
  const recurringCheckbox = document.querySelector("input[name='Recurring']");
  const monthlyAmount = document.querySelector("input[name='amount']");
  const monthsField = document.querySelector("input[name='months']");
  const stateSelect = document.getElementById("State");
  const countrySelect = document.getElementById("country");
  const comments = document.getElementById("Comments");
  const honorRadios = document.querySelectorAll("input[name='honor_type']");
  const acknowledgeFields = document.getElementById("AckDonation").closest("div") || document.getElementById("AckDonation").parentElement;

  // ========== 1. Form Validation ==========
  form.addEventListener("submit", function (e) {
    const firstName = document.getElementById("FirstName").value.trim();
    const lastName = document.getElementById("LastName").value.trim();
    const email = emailField.value.trim();

    // Check required fields
    if (firstName === "" || lastName === "" || email === "") {
      alert("Please fill in all required fields: First Name, Last Name, and Email.");
      e.preventDefault();
      return;
    }

    // Check donation amount
    const selectedDonation = document.querySelector("input[name='donation']:checked");
    if (!selectedDonation && otherAmountField.value.trim() === "") {
      alert("Please select or enter a donation amount.");
      e.preventDefault();
      return;
    }

    // ========== 2. Email Validation ==========
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
      return;
    }

    // ========== 10. Calculate Recurring Donation Total ==========
    if (recurringCheckbox.checked) {
      const monthly = parseFloat(monthlyAmount.value);
      const months = parseInt(monthsField.value);
      if (!isNaN(monthly) && !isNaN(months)) {
        const total = monthly * months;
        alert(`Your total recurring donation will be $${total.toFixed(2)}.`);
      }
    }
  });

  // ========== 3. Donation Amount Check ==========
  donationRadios.forEach(radio => {
    radio.addEventListener("change", function () {
      if (radio.value.toLowerCase() === "none") {
        otherAmountField.style.display = "inline-block";
      } else {
        otherAmountField.style.display = "none";
        otherAmountField.value = "";
      }
    });
  });

  // ========== 4. Recurring Donation Fields ==========
  const recurringFields = [monthlyAmount, monthsField];
  recurringCheckbox.addEventListener("change", function () {
    recurringFields.forEach(f => f.parentElement.style.display = recurringCheckbox.checked ? "inline-block" : "none");
  });
  // Hide initially
  recurringFields.forEach(f => f.parentElement.style.display = "none");

  // ========== 5. Default Select Options ==========
  stateSelect.selectedIndex = 0;
  countrySelect.value = "Bangladesh"; // Default country


  // ========== 7. Reset Confirmation ==========
  const resetButton = document.querySelector("input[type='reset']");
  resetButton.addEventListener("click", function (e) {
    const confirmReset = confirm("Are you sure you want to reset the form?");
    if (!confirmReset) {
      e.preventDefault();
    }
  });

  // ========== 8. Show/Hide Additional Fields (Acknowledge Donation) ==========
  const ackFields = [
    document.getElementById("AckDonation"),
    document.getElementById("Address3"),
    document.getElementById("City"),
    document.getElementById("State2"),
    document.getElementById("Zipcode2")
  ];
  function toggleAcknowledge(show) {
    ackFields.forEach(f => {
      f.parentElement.style.display = show ? "block" : "none";
    });
  }
  // Hide initially
  toggleAcknowledge(false);

  honorRadios.forEach(radio => {
    radio.addEventListener("change", function () {
      toggleAcknowledge(true);
    });
  });

  // ========== 9. Character Limit on Comments ==========
  const maxChars = 200;
  comments.setAttribute("maxlength", maxChars);
  comments.addEventListener("input", function () {
    const remaining = maxChars - comments.value.length;
    comments.nextElementSibling?.remove();
    const msg = document.createElement("small");
    msg.textContent = `${remaining} characters remaining.`;
    msg.style.color = remaining <= 20 ? "red" : "#555";
    comments.insertAdjacentElement("afterend", msg);
  });

});


