

import $ from 'jquery'
import { isMobile, isTablet } from '../../functions/check-viewport'
export default function mapJs() {
  const container = document.querySelector('.pageMap__container');

  if (container) {
    mapButton();
    // dragMap();
  }

}


function mapButton() {

  if (isTablet() || isMobile()) {
      const buttonMap = $('.data-map-button');

      buttonMap.on('click', function(event) {

        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
        } else {
          buttonMap.removeClass('active');
          $(this).addClass('active');
        }
      })
  }

}

function dragMap() {




      const container = document.getElementById('mapContainer');
      const image = document.getElementById('imageMap');



      let isDragging = false;
let dragX, dragY;
let containerRect, imageRect;

image.addEventListener('mousedown', startDrag);
image.addEventListener('mousemove', drag);
image.addEventListener('mouseup', endDrag);

image.addEventListener('touchstart', startDrag);
image.addEventListener('touchmove', drag);
image.addEventListener('touchend', endDrag);

function startDrag(event) {
  event.preventDefault(); // предотвращаем стандартное поведение (например, прокрутку страницы)

  if (event.type === 'mousedown') {
    isDragging = true;
    dragX = event.clientX - image.offsetLeft;
    dragY = event.clientY - image.offsetTop;
  } else if (event.type === 'touchstart') {
    isDragging = true;
    dragX = event.touches[0].clientX - image.offsetLeft;
    dragY = event.touches[0].clientY - image.offsetTop;
  }

  containerRect = container.getBoundingClientRect();
  imageRect = image.getBoundingClientRect();
}

  function drag(event) {
    event.preventDefault(); // предотвращаем стандартное поведение (например, прокрутку страницы)

    if (!isDragging) return;

    let left, top;

    if (event.type === 'mousemove') {
      left = event.clientX - dragX - containerRect.left;
      top = event.clientY - dragY - containerRect.top;
    } else if (event.type === 'touchmove') {
      left = event.touches[0].clientX - dragX - containerRect.left;
      top = event.touches[0].clientY - dragY - containerRect.top;
    }

    if (left < 0) {
      left = 0;
    } else if (Math.abs(left) + imageRect.width > containerRect.width) {
      left = containerRect.width - imageRect.width;

    }

    if (top < 0) {
      top = 0;
    } else if (top + imageRect.height > containerRect.height) {
      top = containerRect.height - imageRect.height;
    }

    image.style.transform = `translateX(${left}px) translateY(${top}px)`;
  }

  function endDrag() {
    isDragging = false;
  }


}
