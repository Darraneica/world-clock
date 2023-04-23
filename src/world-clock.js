function updateTime() {
  //los angeles
  let losangeles = document.querySelector("#los-angeles");
  if (losangeles) {
    let laTimeElement = losangeles.querySelector(".time");
    let laDateElement = losangeles.querySelector(".date");
    let laTime = moment().tz("America/Los_Angeles");
    laDateElement.innerHTML = laTime.format("MMMM Do YYYY");
    laTimeElement.innerHTML = laTime.format("hh:mm:ss [<small>]A[</small>]");
  }

  //sydney

  let sydney = document.querySelector("#sydney");
  if (sydney) {
    let sydneyTimeElement = sydney.querySelector(".time");
    let sydneyDateElement = sydney.querySelector(".date");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  //tokyo

  let tokyo = document.querySelector("#tokyo");
  if (tokyo) {
    let tokyoTimeElement = tokyo.querySelector(".time");
    let tokyoDateElement = tokyo.querySelector(".date");
    let tokyoTime = moment().tz("Asia/Tokyo");
    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
  //paris

  let paris = document.querySelector("#paris");
  if (paris) {
    let parisTimeElement = paris.querySelector(".time");
    let parisDateElement = paris.querySelector(".date");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `
<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "hh:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>`;
}

let selectACity = document.querySelector("#city");
selectACity.addEventListener("change", updateCity);
