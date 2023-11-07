const myFavouriteAnimes = [
  "Yu Yu Hakusho",
  "Saint Seiya a.k.a Knights of the Zodiac",
  "Gintama",
  "HunterxHunter",
  "Inuyasha",
  "Dragonball(all iterations except GT)",
];
const animeList = document.getElementById("animelist");
for (let i = 0; i <= myFavouriteAnimes.length - 1; i++) {
  const li = document.createElement("li");
  li.innerText = myFavouriteAnimes[i];
  animeList.appendChild(li);
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// pop up window coding - variables
const popupScreen = document.querySelector(".popup-screen");
const popupBox = document.querySelector(".popup-box");
const closingTime = document.querySelector("#close");

window.addEventListener("load", () => {
  setTimeout(() => {
    popupScreen.classList.add("active");
  }, 2000);
});
closingTime.addEventListener("click", () => {
  popupScreen.classList.remove("active");
  document.cookie = "WebsiteName=AnimeisArt!; max-age=" + 24 * 60 * 60;
});
// code for using ESC key to close the popup
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document.querySelector(".popup").style.display = "none";
  }
});
//blur coding
const WebsiteCookieIndex = document.cookie.indexOf("WebsiteName=");

if (WebsiteCookieIndex !== -1) {
  popupScreen.style.display = "none";
} else {
  popupScreen.style.display = "flex";
}

//code for image cycles
const images = [
  "images/background/background-right.jpg",
  "images/background/background-right1.jpg",
  "images/background/background-right2.jpg",
  "images/background/background-right3.jpg",
  "images/background/background-right4.jpg",
  "images/background/background-right5.jpg",
  "images/background/background-right6.jpg",
];
const backgroundImage = document.getElementsByClassName("right")[0]; // Add [0]
const changeBtn = document.getElementById("henshin");

let currentImageIndex = 0;

changeBtn.addEventListener("click", function () {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  backgroundImage.style.backgroundImage = `url('${images[currentImageIndex]}')`;
});

let weebCounts = document.querySelector(".weebcounter");
let visitCount = localStorage.getItem("page_view");

visitCount = Number(visitCount) + 1;
localStorage.setItem("page_view", visitCount);

weebCounts.innerHTML = `website passers-by: ${visitCount}`;
