// let player = document.getElementById("teste");

// player.addEventListener("ready", () => {
//   LottieInteractivity.create({
//         mode:"scroll",
//         player: "#teste",
//         actions: [
//         {
//             visibility:[0, 1.0],
//             type: "seek",
//             frames: [0, 300],
//         },
//         ]
//       });
// });

var titleAnimation = bodymovin.loadAnimation({
        container: document.getElementById("animation_container"),
        path: 'https://lottie.host/bcdf90c1-b1c3-470f-9cc5-ee9a7756e369/vcsOovySyC.json',
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