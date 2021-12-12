// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// => Rails Def Configs
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import "channels"

Rails.start()
Turbolinks.start()

// ### | Don't edit above | ### //

// => External / My Node additions
// require("jquery")
// import "jquery"
import "bootstrap"

// => Internal / My additions
import { test1 } from './components/myTestJs'
import { modalRmv } from './components/modalRemoval'
import { muteToggleClk, audioPermission } from './components/muteToggle'
// // import { typeAnim } from "../components/typedAnim";
// import { clickSfx } from "../components/clickSfx";
// import { landPermission } from "../components/landPermissionBuild"
// import { menuDim } from "../components/dimmers";
// // import { dimmer, htdim } from "../components/dimmer";
// import { batLoad } from "../components/loadSfx";
// // import { pageTrans } from "../components/transSfx";
// // import { muteToggle } from "../components/muteToggle";

// => Load Listener
document.addEventListener('turbolinks:load', () => {
  // // Call your functions here, e.g:
  test1();
  // modalRmv()
  // audioPermission()
  // muteToggleClk()
  // landPermission();
  // menuDim();
  // // htdim();
  // batLoad();
  // // typeAnim();
  // clickSfx();
  // // pageTrans();
  // // muteToggle();
});
