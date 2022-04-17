/**
 * @description: click on the button to get current location and show the google maps link
 * @param {type}: any
 */
$(document).ready(function () {
  $("#btn").click(function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords
        $("#lat").text(latitude)
        $("#lon").text(longitude)
        $("#link")
          .attr(
            "href",
            `https://www.google.com/maps/@${latitude},${longitude},15z`
          )
          .text("Google Maps")

        const coords = [latitude, longitude]
        const map = L.map("map").setView(coords, 13)

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map)

        L.marker(coords)
          .addTo(map)
          .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
          .openPopup()
      })
    } else {
      alert("Geolocation is not supported by this browser.")
    }
  })
})
