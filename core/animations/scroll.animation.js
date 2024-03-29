const scrollAboutAnimation = gsap.from(".about-move-group", {
    y: 600,
    scrollTrigger: {
        trigger: ".cover",
        start: "center center",
        end: "98% center",
        markers: false,
        scrub: true
    }
})

const scrollPodcastAnimation = gsap.from(".podcast", {
    y: 300,
    scrollTrigger: {
        trigger: ".about",
        start: "center center",
        end: "98% center",
        markers: false,
        scrub: true
    }
})

const scrollSocialAnimation = gsap.from(".social", {
    y: 300,
    scrollTrigger: {
        trigger: ".podcast",
        start: "top center",
        end: "center center",
        markers: false,
        scrub: true
    }
})