import Typed from 'typed.js';

const typeAnim = () => {
  var options = {
    strings: [  
      "&ensp;=>&ensp; Fullstacker &ensp;{ <br><br> &emsp;//&ensp; Web App Developer <br> &ensp;&emsp;&amp;&amp;&ensp; Software Engineer. <br><br> &emsp;#&ensp; Available to interview <br> &emsp;&ensp;||&ensp; Contact Me &ensp; :D &nbsp; <br> &ensp;};"
    ],
    typeSpeed: 50,
    // loop: true,
    // loopCount: Infinity,
    showCursor: false,
  };
  
  const trDiv = document.getElementById("typed")
  if (trDiv) {
    new Typed('#typed', options);
  }
}


export { typeAnim };
