const clickSfx = () => {
  const audioPunch = require("../../../assets/audios/cartoon_punch_001.mp3");
  const audioMenu = require("../../../assets/audios/batman-transition.mp3");
  const clickSfx001 = new Audio(audioPunch);
  const clickSfx002 = new Audio(audioMenu);
  
  document.querySelectorAll("a").forEach((clickLink) => {
    clickLink.addEventListener("click", (e) => {
      if ((($('#sideNav .volume').attr('data-volume')) === 'true') && (!e.target.classList.contains('fa-file-alt'))) {
        clickSfx001.play();
        console.log(e.target)
      };
    });
  });


  $('#dropdownMenuLink, .fa-file-alt').on('click', () => {
    if (($('#sideNav .volume').attr('data-volume')) === 'true') {
      clickSfx002.play();
    };
  });

}


export { clickSfx }
