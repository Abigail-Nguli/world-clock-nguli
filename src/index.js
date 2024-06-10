function updateDate() {
  //Nairobi
  let nairobiDate = document.querySelector("#nairobi-date");
  if (nairobiDate) {
    let nairobiTimeZone = moment().tz("Africa/Nairobi");
    nairobiDate.innerHTML = nairobiTimeZone.format("dddd, Mo MMMM, YYYY");

    let nairobiTime = document.querySelector("#nairobi-time");
    nairobiTime.innerHTML = nairobiTimeZone.format(
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
  let cityElement = selectedCity.split("/")[1];
  let city = document.querySelector("#city");
  let cityTimeZone = moment().tz(selectedCity);
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
