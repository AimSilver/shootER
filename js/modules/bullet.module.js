import { bullet } from "./constants.module.js";
//method for ading animation to bullet when fire is clicked
export function shootBullet() {
  bullet.classList.add("shoot");
}
//method for reloading gun if u miss target using reload button
export function reloadGun() {
  bullet.classList.remove("shoot");
}
