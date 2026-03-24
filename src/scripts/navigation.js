import {hostReactAppReady} from "../utils/utils.js";

export default async function navigation() {
  await hostReactAppReady()
    const nav = document.getElementById('navigation');
  if (nav) {
      const placeToInsert = nav.parentElement.parentElement.parentElement;
      placeToInsert.insertAdjacentElement('afterend', nav)
  }
}
