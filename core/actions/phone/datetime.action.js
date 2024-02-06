const phoneDatetimeAction = () => {
  const span = document.querySelector('.phone-time');

  setInterval(() => {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    span.innerText =
      ("0" + hours).substr(-2) + ":" + ("0" + minutes).substr(-2);
  }, 1000);
}

phoneDatetimeAction()