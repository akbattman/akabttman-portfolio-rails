const clickSfx = () => {
  const audio = require("./audios/cartoon_punch_001.mp3");
  const clickSfx001 = new Audio(audio);
  document.querySelector("body").addEventListener("click", (event)=> {
    clickSfx001.play();
  });
}

export { clickSfx };