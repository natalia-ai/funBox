'use strict';
var productCards = document.querySelector('.page__cards-box');
var checkbox = document.querySelector('input[type=checkbox]');
var product = document.querySelectorAll('.page__card-box');
var purchase = document.querySelector('.caption-under-card');
// var card = product.querySelector('.card');
var cardHeading = document.querySelector('.page__card-heading');



productCards.addEventListener('click', productSelectStatusHandler);
//productCards.addEventListener('click', productSelectStatusHandler);
// productCards.addEventListener('mouseleave', productSelectStatusHandler);

for (var i = 1; i <= 2; i++) {
 var productId = document.getElementById('card-id' + i);
}

function productSelectStatusHandler(event) {

  var target = event.target;
 if (event.target.id) {
  selectProduct(target);
  }
  return;
}

function selectProduct(product) {
  var checkbox = product.querySelector('input[type=checkbox]');
  var purchase = product.querySelector('.caption-under-card');
  var cardHeading = product.querySelector('.page__card-heading')
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


/*var productCards = Array.prototype.slice.call(document.querySelectorAll('.page__card-box'));
var checkbox = document.querySelector('input[type=checkbox]');

function productSelectedStatusHandler() {
  if (checkbox.hasAttribute('checked')) {
    productCards.classList.add('is-selected-hover');
  } else {
    productCards.classList.remove('is-selected-hover');
  }
};

productCards.forEach(function(product) {
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
  card.addEventListener('mouseleave',  productSelectedStatusHandler);
});

document.addEventListener('DOMContentLoaded', function() {
  productSelectedStatusHandler();
}, false);*/