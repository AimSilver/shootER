import {
  land,
  water,
  leftCloud,
  rightCloud,
  morningLand,
  morningSun,
  title,
  title2,
} from "./constants.module.js";

//method for changing day and night backgrounds with parallex effect
export function parallexEffect() {
  let value = window.scrollY;
  title.style.marginTop = value + "px";
  title2.style.marginTop = -value + "px";
  leftCloud.style.marginLeft = -value + "px";
  rightCloud.style.marginLeft = value + "px";
  water.style.marginBottom = -value + "px";
  land.style.marginBottom = value * -1.5 + "px";

  morningLand.style.marginTop = -value * 0.28 + "px";
  morningSun.style.marginTop = -value * 0.35 + "px";
}
