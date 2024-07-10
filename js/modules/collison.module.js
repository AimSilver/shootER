import { bullet, target, collison } from "./constants.module.js";
let detectCollison;
//method for checking collison ,collison conditions and if collides then what u want to do
function checkCollision() {
  let bX = window.getComputedStyle(bullet, null).getPropertyValue("left");
  let bY = window.getComputedStyle(bullet, null).getPropertyValue("top");
  let tX = window.getComputedStyle(target, null).getPropertyValue("left");
  let tY = window.getComputedStyle(target, null).getPropertyValue("top");
  let intbX = parseInt(bX);
  let intbY = parseInt(bY);
  let inttX = parseInt(tX);
  let inttY = parseInt(tY);
  console.log(tY);
  let offsetX = Math.abs(intbX - inttX);
  let offsetY = Math.abs(inttY - intbY);
  console.log(offsetX);
  console.log(offsetY);

  if (offsetX < 70 && offsetY < 70) {
    collison.style.visibility = "visible";
    bullet.classList.remove("shoot");
    target.classList.remove("bouncing");
    target.classList.add("collided");
    clearInterval(detectCollison); // Stop the interval
  }
}
//method for checking collison after every second
export function startCollisionDetection() {
  detectCollison = setInterval(checkCollision, 200);
}
