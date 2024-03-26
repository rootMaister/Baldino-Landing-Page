gsap.set(".cursor", {xPercent: -50, yPercent: -50});
gsap.set(".cursor-dot", {xPercent: -50, yPercent: -50});

let xToCursor = gsap.quickTo(".cursor", "x", { duration: 0.4, ease: "power3" }),
yToCursor = gsap.quickTo(".cursor", "y", { duration: 0.4, ease: "power3" });

let xToDot = gsap.quickTo(".cursor-dot", "x", {duration: 0.3, ease: "power3"}),
yToDot = gsap.quickTo(".cursor-dot", "y", { duration: 0.3, ease: "power3" });

window.addEventListener("mousemove", (e) => {
  xToCursor(e.clientX);
  yToCursor(e.clientY);
  xToDot(e.clientX);
  yToDot(e.clientY);
});