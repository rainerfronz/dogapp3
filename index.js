"use strict";

function getBreed() {
  let aBreed = $("#dog-breed").val();
  return aBreed;
}

function submitForm() {
  $("#dogSubmission").submit(e => {
    e.preventDefault();
    getDogPic();
  });
}
function getDogPic() {
  fetch("https://dog.ceo/api/breed/" + getBreed() + "/images/random")
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert("That breed not available. Try again."));
}

function displayResults(responseJson) {
  console.log(responseJson);
  if (responseJson.status !== "success") {
    alert("That breed not available. Try again.");
  } else if (responseJson.status === "success") {
    $(".results").replaceWith(
      `<img src="${responseJson.message}" class="results">`
    );
    $(".results").removeClass("hidden");
  }
}
$(function () {
  console.log('do it to it!');
  submitForm();
});