const muteBtn = document.querySelector('.volume i.fas');

const muteToggle = (arg) => {
  arg.classList.toggle('fa-volume-mute');
  arg.classList.toggle('fa-volume-up');
}

const audioPermission = () => {
  document.querySelectorAll('.modal-footer button').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.target.id === 'TrAudio'){
        muteToggle(muteBtn);
      };
    })
  })
}

const muteToggleClk = () => {
  muteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    muteToggle(e.target);
  })
}

const muteToggleKey = () => {
  // m keyup listener to add and call toggle
}

export { audioPermission, muteToggleClk, muteToggleKey }