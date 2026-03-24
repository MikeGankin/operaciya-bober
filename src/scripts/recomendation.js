import {hostReactAppReady} from "../utils/utils.js";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default async function recomendation() {
  gsap.registerPlugin(ScrollTrigger)
  await hostReactAppReady()
  gsap.utils.toArray(".sea-card").forEach((card) => {
    const bobr = card.querySelector(".bobr-animate");
    const ci = card.querySelector(".country-img");
    if (!bobr && !ci) return;

    gsap.fromTo(ci,
        {
          scale: 1,
        },
        {
          scale: 1.3,   duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 50%",
            toggleActions: "play none none none"
          }}
        )

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
