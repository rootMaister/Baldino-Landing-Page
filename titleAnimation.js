var titleAnimation = bodymovin.loadAnimation({
        container: document.getElementById("animation_container"),
        path: 'https://lottie.host/a778160e-9da4-40b0-82ea-40dd1f4a0226/qDe8BYONMD.json',
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