const userOptions = document.querySelector(".user-options");
const userButton = document.querySelector(".user-button");

function toggleUserOptions() {
  if (userOptions.style.display === "none") {
    userOptions.style.display = "flex";
  } else {
    userOptions.style.display = "none";
  }
}

userButton.addEventListener("click", toggleUserOptions);

const buttonUploadImage = document.querySelector(".button-uploadImage");
const inputUploadImage = document.querySelector(".input-uploadImage");

function uploadImage() {
  inputUploadImage.click();
}

buttonUploadImage.addEventListener("click", uploadImage);
