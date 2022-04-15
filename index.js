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
      })
    } else {
      alert("Geolocation is not supported by this browser.")
    }
  })
})
