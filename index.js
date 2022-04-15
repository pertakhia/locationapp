$(document).ready(function () {
  $("p").click(function () {
    $(this).hide()
    console.log("ds")
  })
})

$(document).ready(function () {
  $("#btn").click(function () {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log("location", position)
        $(".test").text()
      },
      function () {
        alert("dont access")
      }
    )
  })
})
