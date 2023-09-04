let thankcard = document.getElementById("thankcard");
let card = document.getElementById("card");
let rates = document.querySelectorAll(".rates");
let rate = document.getElementById("rate");
let submit = document.getElementById("submit");

let rating;

rates.forEach((element, index) => {
  element.addEventListener("click", () => {
    rating = index + 1;
  });
});
submit.onclick = () => {
  if (rating == undefined) {
  } else {
    card.style.display = "none";
    thankcard.style.display = "block";
    rate.innerHTML = `you picked ${rating} out of 5`;
  }
};
