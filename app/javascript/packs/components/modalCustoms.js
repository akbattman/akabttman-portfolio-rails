import { togHide } from './hideAny'

const hideEntryBtn = () => {
  $('.btnBatEnt').on('click', (e) => {
    togHide(e.target);
  })
}

const removeModal = () => {
  document.querySelectorAll('.modal-footer button').forEach((btn) => {
  // $$('.modal-footer button').forEach((btn) => {
    btn.addEventListener('click', () => {
      // console.log(e.target);
      document.querySelector('.entryMod').remove();
    })
  })
}


export { hideEntryBtn, removeModal }
