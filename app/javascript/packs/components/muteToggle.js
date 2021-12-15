// const audioPermission = () => {
//   document.querySelectorAll('.modal-footer button').forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//       if (e.target.id === 'TrAudio'){
//         muteToggle(muteBtn);
//       };
//     })
//   })
// }

const muteToggleClk = () => {
  
  const volIcon = $('.volume i.fas');
  volIcon.on('click', (e) => {
    e.preventDefault();
    volIcon.toggleClass('fa-volume-mute');
    volIcon.toggleClass('fa-volume-up');
  })

  const volBtn = $('#sideNav .volume');
  volBtn.on('click', (e) => {
    e.preventDefault();
    volBtn.attr('volume-attr') === 'false' ? volBtn.attr('volume-attr', 'true') : volBtn.attr('volume-attr', 'false');
  })
}

// const muteToggleKey = () => {
//   // m keyup listener to add and call toggle
// }

export { muteToggleClk }
