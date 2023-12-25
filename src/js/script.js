$(document).ready(function(){
    $('.portfolio_carousel').slick({
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.svg"></button>',
      });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var openPopupButton = document.getElementById('openPopup');
    var closePopupButton = document.getElementById('closePopup');
    var popupContainer = document.getElementById('popupContainer');
    var popup = document.getElementById('popup');
  
    openPopupButton.addEventListener('click', function () {
      popupContainer.style.display = 'flex';
    });
  
    closePopupButton.addEventListener('click', function () {
      popupContainer.style.display = 'none';
    });
  
    // Закрытие всплывающего окна при клике вне его области
    window.addEventListener('click', function (event) {
      if (event.target === popupContainer) {
        popupContainer.style.display = 'none';
      }
    });
  });