var titleAnimation = bodymovin.loadAnimation({
        container: document.getElementById("animation_container"),
        path: 'https://lottie.host/2e7820d8-166d-4c69-90a5-5fa7b17fd1b1/izSZIp9nqO.json',
        rendererSettings: {
        viewBoxSize: false,
        preserveAspectRatio: 'xMidYMid slice'
    }
  })

  var cassetteAnimation = bodymovin.loadAnimation({
    container: document.getElementById("cassette-frame"),
    path: 'https://lottie.host/1fb21b79-808b-466d-9671-542d7a9d71a2/JphA21LjBy.json',
    rendererSettings: {
    viewBoxSize: false,
    preserveAspectRatio: 'xMidYMid meet',
}
})