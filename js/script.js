document.getElementById("go-to-signIn").addEventListener("click", (e) => {
  // get card
  const card = document.querySelector(".content-card");

  console.log("move right");
  card.classList.remove("sign-up");
  card.classList.add("sign-in");
});

document.getElementById("go-to-signUp").addEventListener("click", (e) => {
  // get card
  const card = document.querySelector(".content-card");
  
  console.log("move left");
  card.classList.remove("sign-in");
  card.classList.add("sign-up");
});