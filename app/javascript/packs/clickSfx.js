const clickSfx = () => {
  // const clickSfx001 = new Audio ("")
  document.querySelector("body").addEventListener("click", (event)=> {
    console.log(event);
    // clickSfx001.play();
  });
}

export { clickSfx };