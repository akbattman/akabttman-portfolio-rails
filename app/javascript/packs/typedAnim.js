import Typed from 'typed.js';

const typeAnim = () => {

  var options = {
    strings: [  
      "&ensp;=>&ensp; Fullstacker <br> &emsp;//&ensp; Web App Developer <br> &ensp;&emsp;&amp;&amp;&ensp; Software Engineer. <br> &emsp;&emsp;#&ensp; Available to interview <br> &emsp;&emsp;&ensp;||&ensp; Contact Me &ensp; :D &nbsp;"
    ],
    typeSpeed: 80,
    // smartBackspace: true,
    // loop: true,
    // loopCount: Infinity,
    showCursor: true,
  };

  new Typed('#typed', options);

}


export { typeAnim };
