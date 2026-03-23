import {hostReactAppReady} from "../utils/utils.js";
import {gsap} from "gsap";

export default async function recomendation() {
  await hostReactAppReady()
  gsap.utils.toArray(".sea-card").forEach((card) => {
    const bobr = card.querySelector(".bobr-animate");
    if (!bobr) return;

    gsap.fromTo(
      bobr,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}
