function updateDate() {
  //Arusha
  let arushaDate = document.querySelector("#arusha-date");
  if (arushaDate) {
    let arushaTimeZone = moment().tz("Africa/arusha");
    arushaDate.innerHTML = arushaTimeZone.format("dddd, Mo MMMM, YYYY");

    let arushaTime = document.querySelector("#arusha-time");
    arushaTime.innerHTML = arushaTimeZone.format(
      "[<span>]hh[</span>]:[</span>][<span>]mm[</span>]:[<span>]ss[</span>] [<span>]A[</span>]"
    );
  }

  //Jamaica
  let jamaicaDate = document.querySelector("#jamaica-date");
  if (jamaicaDate) {
    let jamaicaTimeZone = moment().tz("America/Jamaica");
    jamaicaDate.innerHTML = jamaicaTimeZone.format("dddd, Mo MMMM, YYYY");

    let jamaicaTime = document.querySelector("#jamaica-time");
    jamaicaTime.innerHTML = jamaicaTimeZone.format(
      "[<span>]hh[</span>]:[</span>][<span>]mm[</span>]:[<span>]ss[</span>] [<span>]A[</span>]"
    );
  }
}

function chooseCity(event) {
  let selectedCity = event.target.value;
  let cityTimeZone = moment().tz(selectedCity);

  if (selectedCity === "current") {
    selectedCity = moment.tz.guess();
  }

  let cityElement = selectedCity.split("/")[1];
  let city = document.querySelector("#city");

  let cityDate = cityTimeZone.format("dddd, Mo MMMM, YYYY");
  let cityTime = cityTimeZone.format(
    "[<span>]hh[</span>]:[</span>][<span>]mm[</span>]:[<span>]ss[</span>] [<span>]A[</span>]"
  );

  city.innerHTML = `
    <div class="location">
        <div>
          <div class="city">${cityElement}</div>
          <div class="date"">${cityDate}</div>
        </div>
        <div class="time"">${cityTime}</div>
    </div>
    `;
}

let selectCity = document.querySelector("#selectCity");
selectCity.addEventListener("change", chooseCity);

updateDate();
setInterval(updateDate, 1000);
