const saveDialog = document.querySelector('.dialog');
const saveButton = document.querySelector('.button_save');
const dialogOkButton = document.querySelector('.dialog__button');

saveButton.addEventListener('click', () => {
  saveDialog.showModal();
});

dialogOkButton.addEventListener('click', () => {
  saveDialog.close();
});
