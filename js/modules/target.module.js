import { target, collison } from "./constants.module.js";
//method for play again option after succesfull collison
export function playAgain() {
  collison.style.visibility = "hidden";

  target.classList.remove("collided");
  target.classList.add("bouncing");
}
//method for zooming in and zooming out the target when scope is clicked
export function zoomIn(zoom) {
  target.style.transform = zoom ? "scale(2)" : "scale(1)";
}
