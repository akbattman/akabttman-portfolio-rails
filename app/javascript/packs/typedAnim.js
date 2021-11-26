import Typed from 'typed.js';

const typeAnim = () => {

  var options = {
    strings: ["//=> Fullstack Web App Dev", "<%# Software Engineer", "//=> Available to work", "<%# Contacts 'Something"],
    typeSpeed: 80,
    smartBackspace: true,
    // loop: true,
    // loopCount: Infinity,
    showCursor: true,
  };

  new Typed('#typed', options);

}


export { typeAnim };
