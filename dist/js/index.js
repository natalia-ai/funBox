'use strict';
var ELEMENT_N = 3;

var cardTemplate = document.querySelector('#template-card').content.querySelector('.page__card-box-wrapper');
var cardsContainer = document.querySelector('.page__cards-box');
var renderedCards = [];

var cardIds = ['templateId-1', 'tempateId-2', 'templateId-3'];
var cardHeadings = ['Печень утки разварная с артишоками', 'Головы щучьи с чесноком да свежайшая сёмгушка', 'Филе из цыплят с трюфелями в бульоне'];
var productTitles = ['Нямушка'];
var productAdditives = ['с фуа-гра', 'с рыбой', 'с курой'];
var numberOfPortions = ['10', '40', '100'];
var numberOfBonuses = ['', '2', '5'];
var numbersForDeclension = ['1', '2', '5'];
var productWeights = ['0,5', '2', '5'];

function makeObject() {
  var objectArray = Array(ELEMENT_N);
  for (var i = 0; i < ELEMENT_N; i++) {
    var objectTemplate = {};

    objectTemplate.cardId = cardIds[i];
    objectTemplate.cardHeading = cardHeadings[i] + '.';
    objectTemplate.title = productTitles;
    objectTemplate.additive = productAdditives[i];
    objectTemplate.portion = numberOfPortions[i];
    objectTemplate.bonus = numberOfBonuses[i];
    objectTemplate.numberForDeclension = numbersForDeclension[i];
    objectTemplate.weight = productWeights[i];
    objectArray[i] = objectTemplate;
  }
  return objectArray;
};

function createCard(product) {
  var card = cardTemplate.cloneNode(true);
  card.querySelector('.page__card-box').setAttribute('id', product.cardId);
  card.querySelector('.page__card-heading').textContent = product.cardHeading;
  card.querySelector('.card__description-title').textContent = product.title;
  card.querySelector('.card__description-subtitle').textContent = product.additive;
  card.querySelector('.card__description-text--portion').insertAdjacentHTML('afterBegin', '<b>'+product.portion+'</b> порций');
  var bonus = card.querySelector('.card__description-text--bonus');
  bonus.textContent = declineNouns(product.numberForDeclension, [' мышь', ' мыши', ' мышей']) + ' в подарок';
  bonus.insertAdjacentHTML('afterbegin', '<b>'+product.bonus+'</b>');
  if(product.portion === numberOfPortions[2]) {
    card.querySelector('.card__description-texts').insertAdjacentHTML('beforeEnd', '<p class="card__description-text">заказчик доволен</p>')
  }
  card.querySelector('.card__description-weight').insertAdjacentText('afterBegin', product.weight);
  return card;
};

function declineNouns (n, nouns) {
  return nouns[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
};

function renderCards (data) {
  var fragment = document.createDocumentFragment();
  data.forEach(function (item) {
    var card = createCard(item);
    renderedCards.push(card);
    fragment.appendChild(card);
  });
  cardsContainer.appendChild(fragment);
};


cardsContainer.addEventListener('click', productSelectStatusHandler);
//cardsContainer.addEventListener('mouseleave', productSelectStatusHandler);


function productSelectStatusHandler(event) {
  var target = event.target;
  var activeTarget = target.closest('section');
  for (var node in cardsContainer.childNodes) {
    var cardNode = cardsContainer.childNodes[node];
    if (cardNode.tagName == "SECTION")
      cardsContainer.removeChild(cardNode);
  }
  if (activeTarget.id) {
    selectProduct(activeTarget);
  }
}


var product = cardTemplate.querySelector('.page__card-box');
var cardHeading = cardTemplate.querySelector('.page__card-heading');
var purchase = cardTemplate.querySelector('.caption-under-card');

function selectProduct(select) {
  select.classList.add('is-selected');
  purchase.classList.add('visually-hidden');
  cardHeading.classList.remove('visually-hidden');
}


document.addEventListener('DOMContentLoaded', function (event) {
  event.preventDefault();
  renderCards(makeObject());
});


/*function selectProduct(product) {
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
};*/



