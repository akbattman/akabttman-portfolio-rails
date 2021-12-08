const clickSfx = () => {
  const audio = require("./audios/cartoon_punch_001.mp3");
  const clickSfx001 = new Audio(audio);
  
  document.querySelectorAll("a").forEach((clickLink) => {
    clickLink.addEventListener("click", () => {
      clickSfx001.play();
    });
  })
}

export { clickSfx };
