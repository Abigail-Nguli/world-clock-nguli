function updateDate() {
  //Nairobi
  let nairobiDate = document.querySelector("#nairobi-date");
  let nairobiTimeZone = moment().tz("Africa/Nairobi");
  nairobiDate.innerHTML = nairobiTimeZone.format("dddd, Mo MMMM, YYYY");

  let nairobiTime = document.querySelector("#nairobi-time");
  nairobiTime.innerHTML = nairobiTimeZone.format("[<span>]hh[</span>]:[</span>][<span>]mm[</span>]:[<span>]ss[</span>] [<span>]A[</span>]");

  //Jamaica
  let jamaicaDate = document.querySelector("#jamaica-date");
  let jamaicaTimeZone = moment().tz("America/Jamaica");
  jamaicaDate.innerHTML = jamaicaTimeZone.format("dddd, Mo MMMM, YYYY");

  let jamaicaTime = document.querySelector("#jamaica-time");
  jamaicaTime.innerHTML = jamaicaTimeZone.format(
    "[<span>]hh[</span>]:[</span>][<span>]mm[</span>]:[<span>]ss[</span>] [<span>]A[</span>]"
  );
}

updateDate();
setInterval(updateDate, 1000);
