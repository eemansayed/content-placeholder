const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = <img src="images/tiny-pink-flowers.jpg" alt="" />;
  title.innerHTML = "Adipisicing odit eligendi hic eius.";
  excerpt.innerHTML =
    "Elit corrupti ratione ad soluta earum Odio sequi corporis voluptatum";
  profile_img.innerHTML = <img src="images/stripy-cat.jpg" alt="" />;
  name.innerHTML = "Mariam Green";
  date.innerHTML = "Dec 20, 2021";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
