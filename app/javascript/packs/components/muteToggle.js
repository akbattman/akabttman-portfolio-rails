const muteBtn = document.querySelector('.volume i.fas');

const muteToggleIcon = (arg) => {
  arg.classList.toggle('fa-volume-mute');
  arg.classList.toggle('fa-volume-up');
}

// const audioPermission = () => {
//   document.querySelectorAll('.modal-footer button').forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//       if (e.target.id === 'TrAudio'){
//         muteToggle(muteBtn);
//       };
//     })
//   })
// }

const muteToggleClk = () => {
  muteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const volBtn = $('#sideNav .volume');
    const volState = volBtn.attr('volume');
    // console.log($('#sideNav .volume'))
    // console.log($('#sideNav .volume').attr('volume'))
    // $('#sideNav .volume').attr('volume', 'true')
    // console.log($('#sideNav .volume').attr('volume'))
    volState === 'false' ? volBtn.attr('volume', 'true') : volBtn.attr('volume', 'false');
    // var qq = $('#sideNav .volume');
    // var qqq = qq.attr('volume');
    // console.log(qq);
    // console.log(typeof(qq));
    // console.log(qqq);
    // console.log(typeof(qqq));


    // if (qqq === 'false') {
    //   qq.attr('volume', 'true')
    // }else{
    //   qq.attr('volume', 'false')
    // }



    // console.log(qq.attr(''))
    muteToggleIcon(muteBtn);
  })
}

// const muteToggleKey = () => {
//   // m keyup listener to add and call toggle
// }

export { muteToggleClk }
