const clickSfx = () => {
  const audio = require("../../../assets/audios/cartoon_punch_001.mp3");
  const clickSfx001 = new Audio(audio);
  
  document.querySelectorAll("a, button").forEach((clickLink) => {
    clickLink.addEventListener("click", () => {
      
      if (($('#sideNav .volume').attr('disabled')) === 'true') {
        console.log("volume on");
        clickSfx001.play();
      }else{
        console.log("volume off");
      };
    });
  })
}


export { clickSfx };
