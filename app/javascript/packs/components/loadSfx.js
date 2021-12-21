const batLoad = () => {

  const audio = require("../../../assets/audios/batman_original.mp3");
  const batTheme89 = new Audio(audio);

  if (($('#sideNav .volume').attr('data-volume')) === 'true') {
    batTheme89.play();
  };
}


export { batLoad }
