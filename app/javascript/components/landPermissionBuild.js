import {landAudioPermissionDim} from './dimmers';
import { typeAnim } from "./typedAnim";


const landPermission = () => {
  landAudioPermissionDim();
  
  const yieldCon = document.querySelector('.yieldContent')
  yieldCon.insertAdjacentHTML('afterbegin','<div class="entryMod"> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Enter Aaron\'s Portfolio Site V.1.0 </button> <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="staticBackdropLabel">My site uses audio !</h5> </div><div class="modal-body"> enter with audio for more fun - SFW </div><div class="modal-footer"> <button type="button" class="btn id="nah" btn-secondary" data-bs-dismiss="modal">Nah</button> <button type="button" class="btn btn-primary" id="yah" data-bs-dismiss="modal">Full Works</button> </div></div></div></div></div>');

  document.querySelector('#yah').addEventListener('click', (e) => {
    
    document.querySelector('.entryMod').remove();
    landAudioPermissionDim();

    yieldCon.insertAdjacentHTML('afterbegin', '<div class="title"> <h1>Aaron K. Battman</h1> <h2><span id="typed"></span></h2> </div>');
  });

  typeAnim();
}



export { landPermission }