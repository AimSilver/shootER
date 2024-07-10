import { shoot, reload, reset, scope } from "./modules/constants.module.js";
let isZoomed = false;
import { shootBullet, reloadGun } from "./modules/bullet.module.js";
import { playAgain, zoomIn } from "./modules/target.module.js";

import { parallexEffect } from "./modules/parallexbg.module.js";
import { startCollisionDetection } from "./modules/collison.module.js";

//  eventlistners for handling on click events
shoot.addEventListener("click", () => {
  shootBullet();
  startCollisionDetection(); // Start collision detection when "shoot" is clicked
});
reload.addEventListener("click", reloadGun);

reset.addEventListener("click", playAgain);
scope.addEventListener("click", () => {
  isZoomed = !isZoomed;
  zoomIn(isZoomed);
});
//eventlistner for parallex effect to occur on scroll
document.addEventListener("scroll", parallexEffect);
