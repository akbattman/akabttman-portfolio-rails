const batLoad = () => {

  const audio = require("../../assets/audios/batman_original.mp3");
  const batTheme89 = new Audio(audio);
  document.querySelector('#TrAudio').addEventListener('click', (e) => {
    
    batTheme89.play();
  });
}


export { batLoad }
