function updateTime() {
  // City 1 : Los Angeles
  let city1Element = document.querySelector("#city1");
  if (city1Element) {
    let city1DateElement = city1Element.querySelector(".main-city-date");
    let city1TimeElement = city1Element.querySelector(".main-city-time");
    let city1PeriodElement = city1Element.querySelector(".time-period");
    let city1Timezone = moment().tz("America/Los_Angeles");

    city1DateElement.innerHTML = city1Timezone.format("MMMM Do YYYY");
    city1TimeElement.innerHTML = city1Timezone.format("hh:mm:ss ");
    city1PeriodElement.innerHTML = city1Timezone.format("A");
  }
  // City 2 : Tokyo
  let city2Element = document.querySelector("#city2");
  if (city2Element) {
    let city2DateElement = city2Element.querySelector(".main-city-date");
    let city2TimeElement = city2Element.querySelector(".main-city-time");
    let city2PeriodElement = city2Element.querySelector(".time-period");
    let city2Timezone = moment().tz("Asia/Tokyo");

    city2DateElement.innerHTML = city2Timezone.format("MMMM Do YYYY");
    city2TimeElement.innerHTML = city2Timezone.format("hh:mm:ss ");
    city2PeriodElement.innerHTML = city2Timezone.format("A");
  }
  // City 3 : Paris
  let city3Element = document.querySelector("#city3");
  if (city3Element) {
    let city3DateElement = city3Element.querySelector(".main-city-date");
    let city3TimeElement = city3Element.querySelector(".main-city-time");
    let city3PeriodElement = city3Element.querySelector(".time-period");
    let city3Timezone = moment().tz("Europe/Paris");

    city3DateElement.innerHTML = city3Timezone.format("MMMM Do YYYY");
    city3TimeElement.innerHTML = city3Timezone.format("hh:mm:ss ");
    city3PeriodElement.innerHTML = city3Timezone.format("A");
  }
  // City 4 : Sydney
  let city4Element = document.querySelector("#city4");
  if (city4Element) {
    let city4DateElement = city4Element.querySelector(".main-city-date");
    let city4TimeElement = city4Element.querySelector(".main-city-time");
    let city4PeriodElement = city4Element.querySelector(".time-period");
    let city4Timezone = moment().tz("Australia/Sydney");

    city4DateElement.innerHTML = city4Timezone.format("MMMM Do YYYY");
    city4TimeElement.innerHTML = city4Timezone.format("hh:mm:ss ");
    city4PeriodElement.innerHTML = city4Timezone.format("A");
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let selectedCity = event.target.value;

  if (selectedCity === "current") {
    selectedCity = moment.tz.guess();
  }
  let selectedCityTimezone = moment().tz(selectedCity);
  let selectedCityName = selectedCity.replace("_", " ").split("/")[1];
  let selectedCityDate = selectedCityTimezone.format("MMMM Do YYYY");
  let selectedCityTime = selectedCityTimezone.format("hh:mm:ss ");
  let selectedCityPeriod = selectedCityTimezone.format("A");

  let selectedCityElement = document.querySelector("#all-cities");
  selectedCityElement.innerHTML = `
  <div class="main-cities">
          <div>
            <div class="main-city-name">${selectedCityName}</div>
            <div class="main-city-date">${selectedCityDate}</div>
          </div>
          <div>
            <span class="main-city-time">${selectedCityTime}</span>
            <span class="time-period">${selectedCityPeriod}</span>
          </div>
        </div>`;
}

let selectCityElement = document.querySelector("#select-city");
selectCityElement.addEventListener("change", updateCity);
