var section = document.getElementsByClassName('about-paragraph');

    gsap.from('.about', {
        y: 300,
        scrollTrigger: {
        trigger: '.cover',
        start: 'top top',
        end: 'bottom 300',
        markers: true,
        scrub: true
        }
    })

      