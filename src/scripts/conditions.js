import {hostReactAppReady} from "../utils/utils.js";

export default async function conditions() {
  await hostReactAppReady()

  const card = document.querySelector('.promo-card');
  const top = card.querySelector('.promo-card__top');
  const headline = card.querySelector('.promo-card__headline');
  const terms = card.querySelector('.promo-card__terms');
  const button = card.querySelector('#condition-trigger');
  const visual = card.querySelector('.visual');

  const GAP = 20;
  const TOP_PADDING = 40; // 20 + 20

  const getClosedHeights = () => {
    const topHeight = headline.scrollHeight + TOP_PADDING;
    const cardHeight =
      topHeight +
      GAP +
      button.offsetHeight +
      GAP +
      visual.offsetHeight;

    return {topHeight, cardHeight};
  };

  const getOpenHeights = () => {
    const topHeight = terms.scrollHeight + TOP_PADDING;
    const cardHeight =
      topHeight +
      GAP +
      button.offsetHeight;

    return {topHeight, cardHeight};
  };

  button.addEventListener('click', () => {
    const isOpen = card.classList.contains('is-open');

    const startCardHeight = card.offsetHeight;
    const startTopHeight = top.offsetHeight;

    card.style.height = startCardHeight + 'px';
    top.style.height = startTopHeight + 'px';

    requestAnimationFrame(() => {
      card.classList.toggle('is-open');

      requestAnimationFrame(() => {
        const {topHeight, cardHeight} = isOpen
          ? getClosedHeights()
          : getOpenHeights();

        top.style.height = topHeight + 'px';
        card.style.height = cardHeight + 'px';
      });
    });
  });
}
