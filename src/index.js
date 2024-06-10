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
    let jamaicaTimeZone = moment().tz("America/jamaica");
    jamaicaDate.innerHTML = jamaicaTimeZone.format("dddd, Mo MMMM, YYYY");

    let jamaicaTime = document.querySelector("#jamaica-time");
    jamaicaTime.innerHTML = jamaicaTimeZone.format(
      "[<span>]hh[</span>]:[</span>][<span>]mm[</span>]:[<span>]ss[</span>] [<span>]A[</span>]"
    );
  }

  //Vienna
  let viennaDate = document.querySelector("#vienna-date");
  if (viennaDate) {
    let viennaTimeZone = moment().tz("Europe/Vienna");
    viennaDate.innerHTML = viennaTimeZone.format("dddd, Mo MMMM, YYYY");

    let viennaTime = document.querySelector("#vienna-time");
    viennaTime.innerHTML = viennaTimeZone.format(
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
    <a href="/"> Back to All Cities</a>
    `;
}

let selectCity = document.querySelector("#selectCity");
selectCity.addEventListener("change", chooseCity);

updateDate();
setInterval(updateDate, 1000);

function addCity(){
    let jamaicaDate = document.querySelector("#jamaica-date");
    if (jamaicaDate) {
      let jamaicaTimeZone = moment().tz("Europe/jamaica");
      jamaicaDate.innerHTML = jamaicaTimeZone.format("dddd, Mo MMMM, YYYY");

      let jamaicaTime = document.querySelector("#jamaica-time");
      jamaicaTime.innerHTML = jamaicaTimeZone.format(
        "[<span>]hh[</span>]:[</span>][<span>]mm[</span>]:[<span>]ss[</span>] [<span>]A[</span>]"
      );
    }
}