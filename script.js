// Game Download Store

document.addEventListener("DOMContentLoaded", () => {
  console.log("Game Download Store Loaded!");

  const button = document.querySelector(".hero button");

  if (button) {
    button.addEventListener("click", () => {
      alert("Welcome to Game Download Store!");
    });
  }

  const search = document.querySelector("input");

  if (search) {
    search.addEventListener("input", () => {
      console.log("Searching:", search.value);
    });
  }
});
