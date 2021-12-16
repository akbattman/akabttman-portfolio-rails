const volBtn = $('#sideNav .volume');



const audioPermission = () => {
  //   if ((sessionStorage.getItem('persist-vol') === '1')) {
    //     console.log('permission should be true');
    //     volBtn.attr('volume-attr', 'true');
    //     // volIcon.toggleClass('fa-volume-mute fa-volume-up');
    //   } else {
      //     console.log('perm should be false');
      //   };
    }
    
const muteToggleClk = () => {
  // const volIcon = $('.volume i.fas');
  
  // volIcon.on('click', (e) => {
  //   e.preventDefault();
  // volIcon.toggleClass('fa-volume-mute fa-volume-up');
// })

  // $('#sideNav .volume').on('click', 'a', (e) => {
  //   e.preventDefault();
  //   console.log(e)
  //   // volBtn.attr('volume-attr') === 'false' ? volBtn.attr('volume-attr', 'true') : volBtn.attr('volume-attr', 'false');
  // //   if (volBtn.attr('volume-attr') === 'false') {
  // //     volBtn.attr('volume-attr', 'true');
  // //   } else {
  // //     volBtn.attr('volume-attr', 'false');
  // //   };
  // })
  
}

// const muteToggleKey = () => {
//   // m keyup listener to add and call toggle
// }


export { muteToggleClk, audioPermission }

