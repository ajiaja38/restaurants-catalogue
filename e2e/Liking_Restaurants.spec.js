/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Liking Restaurants', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('catalogue-list');

  I.waitForElement('.catalogue-item-title a');

  const firstRestaurant = locate('.catalogue-item-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.catalogue-item');

  const likeRestaurantTitle = await I.grabTextFrom('.catalogue-item-title');
  assert.strictEqual(firstRestaurantTitle, likeRestaurantTitle);
});

Scenario('Unliking Restaurant', async ({ I }) => {
  I.seeElement('catalogue-list');

  I.waitForElement('.catalogue-item-title a');

  const firstRestaurant = locate('.catalogue-item-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');

  I.click('#likeButton');

  I.amOnPage('/#/like');

  I.seeElement('.catalogue-item');

  const likedRestaurantTitle = await I.grabTextFrom('.catalogue-item-title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(likedRestaurantTitle);

  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
});

Scenario('Customer Review', async ({ I }) => {
  const customerReview = 'Keren loh, ayooo dateng';

  I.seeElement('catalogue-list');

  I.waitForElement('.catalogue-item-title a');
  I.click(locate('.catalogue-item-title a').first());

  I.waitForElement('.review-customer form');

  I.fillField('input', 'Frasiska');

  I.fillField('textarea', customerReview);
  I.click('.submit');

  I.waitForElement('.review-customer form');
});
