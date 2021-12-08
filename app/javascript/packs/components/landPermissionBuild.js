import {landAudioPermissionDim} from './dimmers';
// import { batLoad } from './loadSfx';
import { typeAnim } from "./typedAnim";

const landPermission = () => {
  const hmPg = document.querySelector('.home-title')
  landAudioPermissionDim();
  
  // if ((localStorage.getItem("pageloadcount")) && (document.querySelector('.home-title'))) {
    const yieldCon = document.querySelector('.yieldContent')
    if ((hmPg) && (!(localStorage.getItem("pageloadcount")))) {
      yieldCon.insertAdjacentHTML('afterbegin','<div class="entryMod"> <button type="button" class="btn btn-primary btnBat btnBat1" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Enter Aaron\'s Portfolio Site V.1.0 </button> <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"> <div class="modal-dialog m-dBat"> <div class="modal-content m-cBat"> <div class="modal-header"> <h5 class="modal-title" id="staticBackdropLabel">My site uses audio !</h5> </div><div class="modal-body modal-body-bat"> My mate DOM has some small, silly sound effects to play to enhance your visit here but has to have your permission to offer them up, because you know... the \'future\'. </div><div class="modal-footer modal-footer-bat"> <button type="button" id="FlsAudio" class="btn btn-secondary btnBat btnBat2" data-bs-dismiss="modal">Boring</button> <button type="button" id="TrAudio" class="btn btn-primary btnBat btnBat1">I Like Fun</button> </div></div></div></div></div>');
      document.querySelector('#TrAudio').addEventListener('click', (e) => {
        
        document.querySelector('.entryMod').remove();
        document.querySelector('.modal-backdrop').remove();
        hmPg.classList.remove('hidden');
        landAudioPermissionDim();
        // yieldCon.insertAdjacentHTML('afterbegin', '<div class="title"> <h1>Aaron K. Battman</h1> <h2><span id="typed"></span></h2> </div>');
        typeAnim();
      });
    }else{
      if (hmPg){
        hmPg.classList.remove('hidden');
        landAudioPermissionDim();
        typeAnim();
      };
    };
    localStorage.setItem("pageloadcount", "1");
  // };
}


// $( document ).ready(function() {
//   if (localStorage.getItem("pageloadcount")) { $("#landContainer").hide();
//   } 
//     localStorage.setItem("pageloadcount", "1");
//   });


export { landPermission }