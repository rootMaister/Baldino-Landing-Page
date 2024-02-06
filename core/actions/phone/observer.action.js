const phoneObserverAction = () => {
    const observer = new IntersectionObserver(function (entries) {

        if (entries[0].isIntersecting === true) {
            phone.style.position = 'fixed';
            phone.style.height = '200px';
            phone.style.bottom = '0';

        } else {
            phone.style.position = 'fixed';
            phone.style.bottom = '-350px';
        }
    }, {
        threshold: [0.1]
    });

    observer.observe(document.querySelector(".redes"));
}

phoneObserverAction()