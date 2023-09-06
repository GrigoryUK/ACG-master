
import $ from 'jquery'

import { disableScroll } from '../../functions/disable-scroll'
import { enableScroll } from '../../functions/enable-scroll'
export default function menuJs() {
  const container = $('.header');

  if (container) {

    const menu = $('.data-menu');
    const buttonOpen = $('.data-burger-open');
    const buttonClose = $('.data-burger-close');

    buttonOpen.on('click', function() {
      disableScroll();
      menu.fadeIn('fast');
    })

    buttonClose.on('click', function() {
      enableScroll();
      menu.fadeOut('fast');
    })
  }

}
