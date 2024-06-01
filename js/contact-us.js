"use strict";

const handleFormSubmit = (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  nameInput.value = "";

  const emailInput = document.getElementById("email");
  emailInput.value = "";

  const msgInput = document.getElementById("msg");
  msgInput.value = "";

  alert(
    "\nThank You!\n\nYour form has been received and is being processed.\nYou should receive a confirmation email shortly.\n\nBest Regards,\nTravelBloom Team"
  );
};
