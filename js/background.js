const images = ["1.jpg", "2.jpg", "3.jpg"]

const RANDOM1 = Math.random() * images.length;
const chosenImage = images[Math.floor(RANDOM1)] // = const chosenimage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);