const modalOptionsRmv = () => {
  document.querySelectorAll('.modal-footer button').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelector('.entryMod').remove();
    });
  });
}

export { modalOptionsRmv }
