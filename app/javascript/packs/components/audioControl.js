// // const volBtn = $('#sideNav .volume');
// // const volIcon = $('.volume i.fas');
// const volBtn = document.querySelector('.volume');
// const volIcon = document.querySelector('.volume i.fas');

// const volIconTog = () => {
//   volIcon.toggleClass('fa-volume-mute fa-volume-up');
// };


// const volAttrTog = () => {
//   if (volBtn.attr('volume-attr') === 'false') {
//     volBtn.attr('volume-attr', 'true');
//     sessionStorage.setItem('persist-vol', "1");
//   } else {
//     volBtn.attr('volume-attr', 'false');
//     sessionStorage.setItem('persist-vol', "0");
//   };
// };


// const audioSetPermPersist = () => {
//   if ((sessionStorage.getItem('persist-vol') === '1')) {
//     console.log(sessionStorage.getItem('persist-vol'), 'persist on');
//   } else if ((sessionStorage.getItem('persist-vol') === '0')) {
//     console.log(sessionStorage.getItem('persist-vol'), 'persist off');
//   } else {
//     console.log('no persist item set');
//   };
// }

// const volClick = () => {

//   // volIcon.addEventListener('click', (e) => {
//   // // volIcon.on('click', (e) => {
//   //   e.preventDefault();
//   //   // e.stopPropagation();
//   //   // volIconTog();
//   //   console.log(e);
//   //   // return false;
//   // })

//   volBtn.addEventListener('click', (e) => {
//   // volBtn.on('click', (e) => {
//     e.preventDefault();
//     // e.stopPropagation();
//     // volAttrTog();
//     console.log(e);
//     // return false;
//   });

// };


// export { audioSetPermPersist, volClick };
