import {hostReactAppReady} from "../utils/utils.js";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default async function instruction() {
  gsap.registerPlugin(ScrollTrigger);
  await hostReactAppReady()

  const bobrTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".bobr-place",
      start: "top 50%",
      toggleActions: "play none none none",
    },
  });

  bobrTl
    .fromTo(
      ".bobr-chemodan",
      {
        x: -160,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
      },
      0
    )
    .fromTo(
      ".bobr-bobr",
      {
        x: 140,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      },
      0.05
    );

  const cardsTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".anim-grid",
      start: "top 50%",
      toggleActions: "play none none none",
    },
  });

  [
    [".sell.cena", {x: -60}],
    [".sell.turist", {x: 60}],
    [".sell.may", {x: -60}],
    [".sell.teplo", {x: 60}],
    [".sell.money", {y: 60}],
  ].forEach(([selector, fromVars], index) => {
    cardsTl.fromTo(
      selector,
      {
        ...fromVars,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      },
      index * 0.08
    );
  });

  const roadLine = window.innerWidth >= 768
      ? ".road-line--desktop"
      : ".road-line--mobile";

  gsap.to(roadLine, {
    strokeDashoffset: -140,
    ease: "none",
    scrollTrigger: {
      trigger: ".anim-grid",
      start: "top 90%",
      end: "bottom 20%",
      scrub: 1,
    },
  });
}
