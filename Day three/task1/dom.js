const header = document.getElementById("header");
const originalImage = header.querySelector("img");

const topRightImage = originalImage.cloneNode(true);
const bottomLeftImage = originalImage.cloneNode(true);

topRightImage.style.position = "absolute";
topRightImage.style.top = "10px";
topRightImage.style.right = "10px";

bottomLeftImage.style.position = "absolute";
bottomLeftImage.style.bottom = "10px";
bottomLeftImage.style.left = "10px";

originalImage.style.display = "none";

document.body.appendChild(topRightImage);
document.body.appendChild(bottomLeftImage);

const nav = document.getElementById("navigation");
nav.style.position = "absolute";
nav.style.top = "50%";
nav.style.left = "50%";
nav.style.transform = "translate(-50%, -50%)"; 
nav.style.textAlign = "left"; 

const navList = document.getElementById("nav");
navList.style.listStyleType = '"○"'; // نقاط مفرغة
navList.style.padding = "0";
navList.style.margin = "0";

