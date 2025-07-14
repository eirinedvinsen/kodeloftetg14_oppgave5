// Hent "knappen" som skal aktivere noe
const hamburgerIcon = document.querySelector("#hamburgerIcon");
console.log(hamburgerIcon);

hamburgerIcon.addEventListener("click", function () {
  // Hente elementet som skal bli synlig
  const navList = document.querySelector("#navList");
  console.log(navList);

  navList.classList.remove("hidden");
  navList.classList.add("navList");
});

const sunIcon = document.querySelector("#sunIcon");
console.log(sunIcon);

sunIcon.addEventListener("click", function () {
  const body = document.querySelector("body");

  body.classList.remove("light");
  body.classList.add("dark");
});

async function httpCats (){
  const response = await fetch("https://http.cat/[status_code].jpg");
  console.log(response);
}

httpCats();

async function randomFox () {
  const fox = await fetch ("https://randomfox.ca/images/26.jpg");
  console.log(fox);
}

randomFox()
