const muteToggle = () => {
  $(document).on('click', '.toggle-sound', function(e) {
    $(this).toggleClass('sound-mute');
  });
}


export { muteToggle }
