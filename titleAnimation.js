var titleAnimation = bodymovin.loadAnimation({
        container: document.getElementById("animation_container"),
        path: 'https://lottie.host/fe34554d-67f6-499e-8185-ddf8d445f616/uXFQYrjrk9.json',
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