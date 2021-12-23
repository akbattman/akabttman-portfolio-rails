import { togHide } from './hideAny'
import { batLoad } from './loadSfx'
import { volDOMTog } from './audioControl'


const addModal = () => {
  const landPersist = document.querySelector('.home-title');
  const yieldCon = $('.yieldContent');

  if (!(sessionStorage.getItem("pageloadcount")) && (landPersist)) {
    document.querySelectorAll('header, footer, #sideNav').forEach((divEle) => {
      divEle.classList.add('disabled', 'dimmer');
    });
    yieldCon.prepend('<div class="entryMod"> <button type="button" class="btn btn-primary btnBat btnBatEnt" data-toggle="modal" data-target="#staticBackdrop"> Enter Aaron\'s Portfolio Site V.1.0 </button> <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true"> <div class="modal-dialog <%#modal-dialog-centered%> m-dBat" role="document"> <div class="modal-content m-cBat"> <div class="modal-header"> <h5 class="modal-title" id="staticBackdropLabel">My site uses audio !</h5> </div><div class="modal-body modal-body-bat"> My mate DOM has some small, silly sound effects to play for you to enhance your visit here but they have to have your permission to offer them up, because you know... the \'future\'. </div><div class="modal-footer modal-footer-bat"> <button type="button" class="btn btn-secondary btnBat" data-dismiss="modal">Boring</button> <button type="button" class="btn btn-primary btnBat" data-dismiss="modal">I Like Fun ❤</button> </div></div></div></div></div>');
  } else {
    if (landPersist){
      landPersist.classList.remove('hidden');
    };
  };
}


const hideEntryBtn = () => {
  $('.btnBatEnt').on('click', (e) => {
    togHide(e.target);
  });
}


const removeModal = () => {
  document.querySelectorAll('.modal-footer button').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      
      if (e.target.classList.contains('btn-primary')) {
        sessionStorage.setItem('persist-vol', "1");
      } else {
        sessionStorage.setItem('persist-vol', "0");
      };

      volDOMTog();
      batLoad();
      document.querySelectorAll('header, footer, #sideNav').forEach((divEle) => {
        divEle.classList.remove('disabled', 'dimmer');
      });
      document.querySelector('.entryMod').remove();
      togHide(document.querySelector('.home-title'));
      sessionStorage.setItem("pageloadcount", "1");
    });
  });
}


export { addModal, hideEntryBtn, removeModal }
