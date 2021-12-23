import { dimmer } from './dimmers'

const cvDisplay = () => {
  $('.cvAB').on('click', (e) => {
    e.preventDefault();
    console.log('new click');

    // dimmer($('header, footer, #sideNav, .yieldContent'));
    
    // $('header, footer, #sideNav').toggleClass('disabled');

    // $('.cvAB-img').toggleClass('hidden');
    
    // // overlay pop up CV img
    // // $('body').prepend('<div class="cvab p-3"><button type="button" class="btnBat-close"></button><%= image_tag \'abcv21.png\' %></div>');
    // // $('body').prepend("<%= j render(:partial => 'shared/cvab') %>");
    // // $('body').prepend('<%= escape_javascript(render partial: => "shared/cvab") %>');



    // $('.cvAB-img button').on('click', (e) => {

    //   $('.cvAB-img').toggleClass('hidden');

    //   dimmer($('header, footer, #sideNav, .yieldContent'));
    
    //   $('header, footer, #sideNav').toggleClass('disabled');


    // })

  });
}


export { cvDisplay }

// 
   