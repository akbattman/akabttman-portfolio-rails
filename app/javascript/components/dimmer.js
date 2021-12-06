const dimmer = () => {
  document.getElementById("burgerBat").addEventListener('click', (event) => {
    document.querySelector(".yieldContent").classList.toggle("dimmer");
  })
}

export { dimmer }
