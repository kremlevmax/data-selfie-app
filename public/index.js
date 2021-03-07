function setup() {
  if ("geolocation" in navigator) {
    const location = navigator.geolocation.getCurrentPosition(
      async (position) => {
        noCanvas();
        const photoshot = createCapture(VIDEO);
        photoshot.size(320, 240);

        const coordinates = position.coords;
        const lat = coordinates.latitude;
        const lon = coordinates.longitude;
        const formUserName = document.getElementById("userName");

        document
          .getElementById("sendData")
          .addEventListener("click", async () => {
            photoshot.loadPixels();
            const pic64 = photoshot.canvas.toDataURL();
            let userName = formUserName.value;
            const options = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userName,
                lat,
                lon,
                pic64,
              }),
            };
            const respond = await fetch("/api", options);
            const json = await respond.json();
          });
      }
    );
  }
}
