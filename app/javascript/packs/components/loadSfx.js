const batLoad = () => {

  const audio = require("../../assets/audios/batman_original.mp3");
  const batTheme89 = new Audio(audio);

  if ((document.querySelector('.home-title')) && (localStorage.getItem("pageloadcount"))) {
    batTheme89.play();
  }else{
    if (document.querySelector('#TrAudio')) {
      document.querySelector('#TrAudio').addEventListener('click', (e) => {
      batTheme89.play();
    });
  }};
}


export { batLoad }
