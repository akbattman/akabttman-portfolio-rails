const dimmer = () => {
  document.getElementById("burgerBat").addEventListener('click', (event) => {
    // console.log(event);
    document.querySelector(".yieldContent").classList.toggle("dimmer");
  })
}

export { dimmer }
