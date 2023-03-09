/* Add an even listener, to ALL of my cards, so that they add an "active" class when you hover over it */

// getElementsByClassName

function setupEvenListeners() {
  const cards = document.getElementsByClassName("card");
  console.log(cards);

  for (const card of cards) {
    card.addEventListener("mouseenter", function () {
      card.classList.add("text-bg-dark");
    });
    card.addEventListener("mouseleave", function () {
      card.classList.remove("text-bg-dark");
    });
  }

  // querySelector and querySelectorAll
  // querySelector -> Only finds the first thing that matches the selector
  // querySelectorAll -> Finds all of the things that matches that selector
  const cardButtons = document.querySelectorAll(".card button");
  console.log(cardButtons);

  for (const card of cardButtons) {
    card.addEventListener("mouseenter", function () {
      card.classList.add("text-bg-dark");
    });
    card.addEventListener("mouseleave", function () {
      card.classList.remove("text-bg-dark");
    });
  }

  // getElementsByTagName <button>
  const buttons = document.getElementsByTagName("button");
  console.log(buttons);

  /* /* Add an event listener to the buttons in cards that have a class of featured, when the button is clicked remove btn-primary class and add btn-secondary  */

  const featured = document.querySelectorAll(".card.featured button");
  for (const card of featured) {
    card.addEventListener("click", () => {
      card.classList.toggle("btn-primary");
      card.classList.toggle("btn-secondary");
    });
  }

  /* For the card with a class of manager, add an event listener to the h2 in the card, so that the h2 becomes bold on hover and returns to normal when the hovering stops*/

  const manager = document.querySelectorAll(".card.manager div");
  for (const card of manager) {
    const heading = card.querySelector(".card.manager h2");
    card.addEventListener("mouseenter", () => {
      card.style.color = "blue";
      card.style.backgroundColor = "green";
      heading.style.fontWeight = "bold";
    });
    card.addEventListener("mouseleave", () => {
      card.style.color = "black";
      card.style.backgroundColor = "white";
      heading.style.fontWeight = "500";
    });
  }
}
// }
//   const manager = document.querySelectorAll(
//     ".card.manager div, .card.manager h2"
//   );
//   for (const card of manager) {
//     card.addEventListener("mouseenter", () => {
//       card.style.color = "blue";
//       card.style.backgroundColor = "green";
//       card.style.fontWeight = "bold";
//     });
//     card.addEventListener("mouseleave", () => {
//       card.style.color = "black";
//       card.style.backgroundColor = "white";
//       card.style.fontWeight = "500";
//     });
//   }
// }

setupEvenListeners();

const form = document.getElementById("nameForm");
const cardContainer = document.getElementById("cards");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameInput = form.querySelector("#name");
  const managerInput = form.querySelector("#manager");
  const featuredInput = form.querySelector("#featured");
  const personName = nameInput.value;
  nameInput.value = "";
  cardContainer.innerHTML += `
    <div class="card ${managerInput.checked ? "manager" : ""}
    ${featuredInput.checked ? "featured" : ""}">
    <div class="card-body">
        <h2>${personName}</h2>
        <button class="btn btn-primary" title="find me">More Info</button>
    </div>
    </div>
  `;
  setupEvenListeners();
});
