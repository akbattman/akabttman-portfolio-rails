const dimmer = (ele) => {
  ele.toggleClass('dimmer');
}


const menuDim = () => {
    const logoMenu = document.querySelector("#dropdownMenuLink");
    
    // create a new instance of `MutationObserver` named `observer`,
    // passing it a callback function
    const observer = new MutationObserver(() => {
      // console.log('callback that runs when observer is triggered');
          dimmer($('.yieldContent'));
    });
    
    // call `observe()` on that MutationObserver instance,
    // passing it the element to observe, and the options object
    observer.observe(logoMenu, {attributes: true});
}


export { dimmer, menuDim }
