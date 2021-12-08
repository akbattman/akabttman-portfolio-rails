const muteToggle = () => {
  document.querySelector('.volume i.fas').addEventListener('click', (e) => {
    e.preventDefault();
    e.target.classList.toggle('fa-volume-mute');
    e.target.classList.toggle('fa-volume-up');
  })
}


export { muteToggle }
