const clickSfx = () => {
  const audio = ("../../assets/audios/cartoon_punch_001.mp3")
  const clickSfx001 = new Audio(audio);
  document.querySelector("body").addEventListener("click", (event)=> {
    console.log(event);
    // console.log(clickSfx001);
    clickSfx001.play();
  });
}

export { clickSfx };