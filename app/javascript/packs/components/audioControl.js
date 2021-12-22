// ternary refactor ONLY AFTER full navigation testing 
const volIconTog = () => {
  if ((sessionStorage.getItem('persist-vol') === '1')) {
    $('.volume i.fas').removeClass('fa-volume-mute').addClass('fa-volume-up');
    
  } else if ((sessionStorage.getItem('persist-vol') === '0')) {
    $('.volume i.fas').removeClass('fa-volume-up').addClass('fa-volume-mute');

  } else {
    console.log('no storage set yet - check call order/logic');
  };
};

// ternary refactor ONLY AFTER full navigation testing 
const volDataTog = () => {
  const volBtn = $('#sideNav .volume');

  if ((sessionStorage.getItem('persist-vol') === '1')) {
    volBtn.attr('data-volume', 'true');
  
  } else if ((sessionStorage.getItem('persist-vol') === '0')) {
    volBtn.attr('data-volume', 'false');
    
  } else {
    console.log('no storage set yet - check call order/logic')
  };
};


const audioPermission = () => {
  // better listener required || rails v7 update/migrate
    // data-turbolinks-permanent - persist ele attr & listeners through renders
      // # ^ could eliminate this function requirement alltogether ^ # //
  // const sn = document.querySelector('#sideNav');
  document.addEventListener('turbolinks:render', (e) => {
    // console.log(e);
    volDataTog();
    volIconTog();
  });
};


const volClick = () => {
  // click prevention before permission reqd'
  $('.volume').on('click', (e) => {
    e.preventDefault();
    (sessionStorage.getItem('persist-vol') === '1') ? sessionStorage.setItem('persist-vol', '0') : sessionStorage.setItem('persist-vol', '1');
    volDataTog();
    volIconTog();
  });
};


export { volClick, volDataTog, volIconTog, audioPermission };
