var productCards = Array.prototype.slice.call(document.querySelectorAll('.page__card-box'));

productCards.forEach(function(product) {
  var checkbox = product.querySelector('input[type=checkbox]');
  var purchase = product.querySelector('.caption-under-card');
  var card = product.querySelector('.card');
  var cardHeading = product.querySelector('.page__card-heading');

  function productStatusHandler () {
    if (!checkbox.hasAttribute('checked')) {
      checkbox.setAttribute('checked', true);
      product.classList.add('is-selected');
      purchase.classList.add('visually-hidden');
      cardHeading.classList.remove('visually-hidden');
    } else {
      checkbox.removeAttribute('checked');
      product.classList.remove('is-selected');
      purchase.classList.remove('visually-hidden');
      cardHeading.classList.add('visually-hidden');
      product.classList.remove('is-selected-hover');
    }
  };

  if (checkbox.hasAttribute('disabled')) {
    product.classList.add('is-disabled');
    purchase.innerHTML = product.dataset.disabled;
  }

  checkbox.addEventListener('change', productStatusHandler);
  card.addEventListener('click', productStatusHandler);
  card.addEventListener('mouseleave', function() {
    if (checkbox.hasAttribute('checked')) {
      product.classList.add('is-selected-hover');
    } else {
      product.classList.remove('is-selected-hover');
    }
  });
});