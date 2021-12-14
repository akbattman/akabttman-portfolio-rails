import Typed from 'typed.js';

const typeAnim = () => {
  const trDiv = document.getElementById("typed");
  if (trDiv) {
    const obsvEle = document.querySelector('.home-title');
    const config = { attributes: true };
  
    // Callback function to execute when mutations are observed
    const callback = (mutationsList, observer) => {
      for(const mutation of mutationsList) {
  
        if (mutation.type === 'attributes') {
          // console.log('attrs modded');
          var options = {
            strings: [  
              "&ensp;=>&ensp; Fullstacker &ensp;{ <br><br> &emsp;//&ensp; Web App Developer <br> &ensp;&emsp;&amp;&amp;&ensp; Software Engineer. <br><br> &emsp;#&ensp; Available to interview <br> &emsp;&ensp;||&ensp; Contact Me &ensp; :D &nbsp; <br> &ensp;};"
            ],
            typeSpeed: 30,
            // loop: true,
            // loopCount: Infinity,
            showCursor: false,
          };
          new Typed('#typed', options);
        }
      }
    };
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);
    // Start observing the target node for configured mutations
    observer.observe(obsvEle, config);
  };
}


export { typeAnim };
