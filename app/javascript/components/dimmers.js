const dimmer = (ele) => {
  ele.classList.toggle('dimmer');
}

const landAudioPermissionDim = () => {
  const slct = document.querySelector('body');
    dimmer(slct);
}

const menuDim = () => {
  // const slct = document.querySelector('.yieldContent');
  document.getElementById("burgerBat").addEventListener('click', (e) => {
    // dimmer(slct);
    dimmer(document.querySelector('.yieldContent'));
  })
}


export { menuDim, landAudioPermissionDim }