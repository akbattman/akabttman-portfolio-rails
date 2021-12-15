import Typed from 'typed.js';

const typeAnim = () => {
  
  const trDiv = document.getElementById("typed");
  const obsvEle = document.querySelector('.home-title');
  const config = { attributes: true };
  const options = { strings: ["&ensp;=>&ensp; Fullstacker &ensp;{ <br><br> &emsp;//&ensp; Web App Developer <br> &ensp;&emsp;&amp;&amp;&ensp; Software Engineer. <br><br> &emsp;#&ensp; Available to interview <br> &emsp;&ensp;||&ensp; Contact Me &ensp; :D &nbsp; <br> &ensp;};"], typeSpeed: 60, showCursor: false };

  if ((trDiv) && (sessionStorage.getItem("pageloadcount"))) {

      new Typed('#typed', options);

  } else if ((trDiv) && (!sessionStorage.getItem("pageloadcount"))) {
      
      // Callback function to execute when mutations are observed
      const callback = (mutationsList, observer) => {
        for(const mutation of mutationsList) {
          
          if (mutation.type === 'attributes') {
            new Typed('#typed', options);
          };
        }
      };
  
      // Create an observer instance linked to the callback function
      const observer = new MutationObserver(callback);
  
      // Start observing the target node for configured mutations
      observer.observe(obsvEle, config);
  };
}


export { typeAnim };
