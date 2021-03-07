async function getData() {
  const response = await fetch("/api");
  const data = await response.json();

  for (const item of data) {
    const root = document.createElement("p");
    const userName = document.createElement("div");
    const latitude = document.createElement("div");
    const longitude = document.createElement("div");
    const timeStamp = document.createElement("div");
    const picture = document.createElement("img");

    userName.textContent = "User Name: " + item.userName;
    latitude.innerHTML = "Latitude: " + item.lat;
    longitude.innerHTML = "Longitude: " + item.lon;
    timeStamp.innerHTML = "Time: " + new Date(item.timestamp);
    picture.src = item.pic64;

    root.append(userName, latitude, longitude, timeStamp, picture);
    document.body.append(root);
  }
  return data;
}
const data = getData();
