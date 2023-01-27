const popupMenuOpenButton = document.querySelector(".header__button-popup-open");
const popupMenuCloseButton = document.querySelector (".menu-popup__button-close");
const popupMenu = document.querySelector("#menu-popup");

//СОЗДАНИЕ ФУНКЦИЙ
//универсальные функции открытия и закрытия
function openPopup(popup) {
    popup.classList.add('menu-popup_opened');
  }
  function closePopup(popup) {
    popup.classList.remove('menu-popup_opened');
  }

  popupMenuOpenButton.addEventListener('click', function () {
    openPopup(popupMenu);
  })
  
  popupMenuCloseButton.addEventListener('click', function () {
    closePopup(popupMenu);
  })