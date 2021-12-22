import { dimmer } from './dimmers'

const cvDisplay = () => {
  $('.cvAB').on('click', (e) => {
    e.preventDefault();
    console.log('new click');

    dimmer($('header, footer, #sideNav, .yieldContent'));
    
    $('header, footer, #sideNav').toggleClass('disabled');
    
    // overlay pop up CV img
    $('body').prepend('<div class="cvab p-3"><button type="button" class="btnBat-close"></button></div>');

    $('.cvab button').on('click', (e) => {
      $('.cvab').remove();

      dimmer($('header, footer, #sideNav, .yieldContent'));
    
      $('header, footer, #sideNav').toggleClass('disabled');


    })

  });
}


export { cvDisplay }

// 
   