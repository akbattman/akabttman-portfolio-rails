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

// => External
import "bootstrap"

// => Internal
import { addModal, hideEntryBtn, removeModal } from './components/modalCustoms';
import { audioPermission, volClick } from "./components/audioControl";
import { typeAnim } from "./components/typedAnim";
import { clickSfx } from "./components/clickSfx";
import { menuDim } from "./components/dimmers";


// => Load Listener
document.addEventListener('turbolinks:load', () => {
  // // Call your functions here, e.g:, 
  addModal();
  hideEntryBtn();
  removeModal();
  audioPermission();
  volClick();
  typeAnim();
  clickSfx();
  menuDim();
  // htdim();
});
