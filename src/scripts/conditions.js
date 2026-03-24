import {hostReactAppReady} from "../utils/utils.js";

export default async function conditions() {
  await hostReactAppReady()
  const trigger = document.getElementById('condition-trigger');
const card = document.querySelector('.promo-card')

  if (!trigger) return;

  trigger.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
}
