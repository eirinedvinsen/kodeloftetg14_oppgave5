// Hent "knappen" som skal aktivere noe
const hamburgerIcon = document.querySelector("#hamburgerIcon");
console.log(hamburgerIcon);

hamburgerIcon.addEventListener("click", function () {
  // Hente elementet som skal bli synlig
  const navList = document.querySelector("#navList");
  console.log(navList);

  if(navList.classList.contains("hidden")){
    navList.classList.remove("hidden");
    navList.classList.add("navList");
  } else{
    navList.classList.remove("navList");
    navList.classList.add("hidden");
  }
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

