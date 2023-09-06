import Inputmask from "inputmask"
import $ from 'jquery'
export default function validateJS() {
  const container = document.querySelector('.pageContact');

  if (container) {
    maskPhone()
    validate()
  }
}

function maskPhone() {
  let tel = document.querySelectorAll('input[type="tel"]');
  let telMask = new Inputmask("+7 (999) 999-99-99");
  telMask.mask(tel);
}

function validate() {
  const form = $('.data-form');
  const inputEmail = form.find('.data-test-email');
  const input = form.find('.data-test');
  const error = form.find('.data-error');
  const success = form.find('.data-success');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const button = form.find('.data-submit');

  button.on('click', function(e) {
    e.preventDefault()

    if (!emailRegex.test(inputEmail.val())) {
      inputEmail.addClass('error')
      error.fadeIn('fast')
    } else {
      inputEmail.removeClass('error')
      error.fadeOut('fast')
      success.fadeIn('fast')
    }

  })

}
