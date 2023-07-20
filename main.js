let landingPageEl = document.getElementById("landing-page");
let firstLink = document.querySelector("header ul li a");
let colors = document.querySelectorAll(".colors-box .colors div");
let allLinks = document.querySelectorAll("header ul li a:not(.active)");
let settingBtn = document.querySelector(".setting-box");
let sideBar = document.getElementById("side-bar");
let randomBackgroundBtns = document.querySelectorAll(
  ".random-background-box .btns button"
);
let allSkills = document.querySelectorAll(".skills-page .skill .progress");
let skillSection = document.querySelector(".skills-page");
let xMark = document.querySelector(".popup i");
let links = document.querySelectorAll("header ul li a");
let imageTitle = document.createElement("h2");
const bullets = document.querySelectorAll(".bullet");
const tooltips = document.querySelectorAll(".tooltip");

let allChangeableBackgroundColor = document.querySelectorAll(
  ".changeable-background-color"
);
let allChangeableColor = document.querySelectorAll(".changeable-color");
let circles = document.querySelectorAll(".circle");

let backgroundOption = true;
let bulletsBtns = document.querySelectorAll(".testing-option .btns button");

let menu = document.querySelector("header i");
let navbar = document.querySelector("header nav");
let resetBtn = document.querySelector(".reset");

if (localStorage.color != "") {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.color
  );
}
let backgroundLocalItem = localStorage.getItem("randomQ");
if (backgroundLocalItem != null) {
  if (backgroundLocalItem == "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }
  randomBackgroundBtns.forEach((btn) => {
    btn.classList.remove("active-btn");
  });

  if (backgroundLocalItem == "true") {
    document.querySelector(".yes").classList.add("active-btn");
  } else {
    document.querySelector(".no").classList.add("active-btn");
  }
}
//  start random back ground
//array image

let images = [
  "imgs/01.jpg",
  "imgs/02.jpg",
  "imgs/03.jpg",
  "imgs/04.jpg",
  "imgs/05.jpg",
];
let backgroundInterval;
randomize();
function randomize() {
  if (backgroundOption == true) {
    backgroundInterval = setInterval(() => {
      let randomImage = images[Math.floor(Math.random() * images.length)];
      landingPageEl.style.backgroundImage = `url('${randomImage}')`;
    }, 10000);
  }
}

// end random back ground

// start change color

colors.forEach((colorBtn) => {
  colorBtn.addEventListener("click", function () {
    document.documentElement.style.setProperty(
      "--main-color",
      colorBtn.dataset.id
    );

    localStorage.setItem("color", colorBtn.dataset.id);

    allLinks.forEach((link) => {
      link.addEventListener("mouseover", function () {
        link.style.color = colorBtn.dataset.id;
      });
      link.addEventListener("mouseout", function () {
        link.style.color = "white";
      });
    });
  });
});
allLinks.forEach((link) => {
  link.addEventListener("mouseover", function () {
    link.style.color = firstLink.style.color;
  });
  link.addEventListener("mouseout", function () {
    link.style.color = "white";
  });
});
// end change color

//end sitting box
settingBtn.addEventListener("click", function () {
  sideBar.classList.toggle("animation");
});
//start sitting box

// random background btn
randomBackgroundBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    randomBackgroundBtns.forEach((btn) => {
      btn.classList.remove("active-btn");
    });
    btn.classList.add("active-btn");
    localStorage.setItem("randomQ", btn.dataset.background);
    if (btn.dataset.background == "yes") {
      backgroundOption = true;
      randomize();
      localStorage.setItem("randomQ", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("randomQ", false);
    }
  });
});

// random background btn

// start skills Page Progress
progress();
function progress() {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 520) {
      allSkills.forEach((skill) => {
        skill.style.width = skill.dataset.progress;
      });
    }
  });
}

// end skills Page Progress
let allImages = document.querySelectorAll(".gallery-page .images img");
let galleryEl = document.querySelector(".gallery-page");

showPopup();
function showPopup() {
  allImages.forEach((img) => {
    img.addEventListener("click", function () {
      let popup = document.createElement("div");
      popup.className = "popup";
      let popupImage = document.createElement("img");
      popupImage.src = `${img.src}`;
      // let imageTitle = document.createElement("h2");
      imageTitle.innerText = img.alt;
      let xMark = document.createElement("i");
      xMark.className = "fa-solid fa-xmark";
      popup.appendChild(xMark);
      popup.appendChild(imageTitle);
      popup.appendChild(popupImage);
      galleryEl.appendChild(popup);

      xMark.addEventListener("click", function () {
        popup.remove();
      });
    });
  });
}

function scrollTo(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(e.currentTarget.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollTo(bullets);
scrollTo(links);

// showAndHideBullets
showAndHideBullets();

function showAndHideBullets() {
  bulletsBtns.forEach((bulletBtn) => {
    bulletBtn.addEventListener("click", function () {
      bulletsBtns.forEach((btn) => {
        btn.classList.remove("active-btn");
      });
      bulletBtn.classList.add("active-btn");

      if (bulletBtn.dataset.test == "no") {
        bullets.forEach((bullet) => {
          bullet.style.display = "none";
        });
      } else {
        bullets.forEach((bullet) => {
          bullet.style.display = "block";
        });
      }
      localStorage.setItem("test", bulletBtn.dataset.test);
    });
  });
}

// local storage to bullets
if (localStorage.test == "yes") {
  bulletsBtns.forEach((bulletBtn) => {
    if (bulletBtn.dataset.test == localStorage.test) {
      bulletBtn.classList.add("active-btn");
    }
  });

  bullets.forEach((bullet) => {
    bullet.style.display = "block";
  });
} else {
  bulletsBtns.forEach((bulletBtn) => {
    if (bulletBtn.dataset.test == localStorage.test) {
      bulletBtn.classList.add("active-btn");
    }
  });

  bullets.forEach((bullet) => {
    bullet.style.display = "none";
  });
}

document.querySelector(".btns .yes").classList.add("active-btn");
resetBtn.addEventListener("click", function () {
  location.reload(true);
  localStorage.removeItem("randomQ");
  localStorage.color = "#fc3c6e";
  localStorage.test = "yes";
});


// show and hide nav

menu.addEventListener("click",function(){
  navbar.classList.toggle("show")
})