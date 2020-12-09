'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++) {
  console.log(
    btnOpenModal[i].addEventListener('click', function () {
      console.log(`button ${i + 1} is clicked to open the modal`);
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    })
  );
}

//adding event listening to button close
// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// //clicking on overlay also closes the modal
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

//Instead of all of the above ☝🏽 commented, let make it DRY 🍸
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
