import { togHide } from './hideAny'

const hideEntryBtn = () => {
  $('.btnBatEnt').on('click', (e) => {
    togHide(e.target);
  })
}

const removeModal = () => {
  document.querySelectorAll('.modal-footer button').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelector('.entryMod').remove();
      togHide(document.querySelector('.home-title'));
    })
  })
}


export { hideEntryBtn, removeModal }
