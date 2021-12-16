const batLoad = () => {

  const audio = require("../../../assets/audios/batman_original.mp3");
  const batTheme89 = new Audio(audio);

  if (($('#sideNav .volume').attr('volume-attr')) === 'true') {
    // console.log('is true')
    batTheme89.play();
  // } else {
  //   console.log("WAS NO HIT vol off - no load sfx");
  };
}


export { batLoad }
