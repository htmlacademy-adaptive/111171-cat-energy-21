const pageHeader = document.querySelector('.page-header');
const humburgerBtn = document.querySelector('.page-header__toggle');

document.addEventListener("DOMContentLoaded", function(event) {
  if (pageHeader) {
    if (pageHeader.classList.contains('page-header--no-js')) {
      pageHeader.classList.remove('page-header--no-js');
    }
    if (humburgerBtn.classList.contains('page-header__toggle--opened')) {
      humburgerBtn.classList.remove('page-header__toggle--opened');
    }
  }
})
