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

const foxIcon = document.querySelector("#foxIcon");
console.log(foxIcon);

foxIcon.addEventListener("click", function () {
  const body = document.querySelector("body");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
  }
});

//async function httpCats (){
  //const response = await fetch("https://http.cat/[status_code].jpg");
  //console.log(response);
//}

//httpCats();

async function randomFox() {
  try {
    const response = await fetch("https://randomfox.ca/floof/");
    console.log(response);

    const data = await response.json(); // Corrected variable name here
    console.log(data);

    document.getElementById("foxImage").src = data.image;
  } catch (error) {
    console.error("No fox for you :(", error);
  }
}

randomFox();

