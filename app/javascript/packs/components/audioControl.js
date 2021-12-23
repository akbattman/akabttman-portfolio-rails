
const volDOMTog = () => {
  const volBtn = $('#sideNav .volume');
  const volIcon = $('.volume i.fas');
  
  (sessionStorage.getItem('persist-vol') === '1') ?
    (volBtn.attr('data-volume', 'true'),
    volIcon.removeClass('fa-volume-mute').addClass('fa-volume-up')) :
    
    (volBtn.attr('data-volume', 'false'),
    volIcon.removeClass('fa-volume-up').addClass('fa-volume-mute'));
};


const audioPermission = () => {
  // better listener required || rails v7 update/migrate
    // data-turbolinks-permanent - persist ele.attr & listeners through renders
      // # ^ could eliminate this function requirement alltogether ^ # //
  volDOMTog();
  document.addEventListener('turbolinks:render', (e) => {
    volDOMTog();
  });
};


const volClick = () => {
  $('.volume').on('click', (e) => {
    e.preventDefault();
    (sessionStorage.getItem('persist-vol') === '1') ? sessionStorage.setItem('persist-vol', '0') : sessionStorage.setItem('persist-vol', '1');
    volDOMTog();
  });
};


export { volClick, volDOMTog, audioPermission };
