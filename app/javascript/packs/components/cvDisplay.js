import { dimmer } from './dimmers'

const cvRemove = () => {
  $('.btnBat-close').on('click', () => {

    dimmer($('header, footer, #sideNav, .yieldContent'));
    $('header, footer, #sideNav').toggleClass('disabled');
    $('.cvAB-img').remove();
  });
}


const cvDisplay = () => {
  $('.cvAB').on('click', (e) => {
    e.preventDefault();

    dimmer($('header, footer, #sideNav, .yieldContent'));
    $('header, footer, #sideNav').toggleClass('disabled');
    $('body').prepend('<div class="cvAB-img"><button type="button" class="btnBat-close">Close X</button></div>');

    cvRemove();
  });
}


export { cvDisplay }
