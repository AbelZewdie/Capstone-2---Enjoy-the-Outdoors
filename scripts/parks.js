function getPark(park) {
  const element = document.createElement("div");
  element.classList.add("park");
  element.innerHTML = `
<br> <hr>
  <h4>Location: ${park.LocationName}</h4>
  <h5>ID: ${park.LocationID}</h5>
  <div>State: ${park.State}</div>
`;
  if (park.hasOwnProperty("Visit")) {
      const link = park.Visit;
      const text = park.LocationName;
      element.innerHTML += `
  <div><a href="${link}" class="visit-site"> ${text} </a></div>
  `;
  };
  return element;
}

document.addEventListener("DOMContentLoaded", () => {

  function showResults() {
      let filtered = [];
      if (locationRadio.checked) {
          filtered = nationalParksArray.filter(
              o => o.State.toUpperCase() === locations.value.toUpperCase()
          )
      } else {
          filtered = nationalParksArray.filter(
              o => o.LocationName.toUpperCase().includes(
                  parkTypes.value.toUpperCase()
              )
          )
      }
      results.innerHTML = ""; //CLEAR OUT THE OLD
      filtered.forEach(p => results.appendChild(getPark(p)));
  }
  locations.addEventListener("change", showResults);
  parkTypes.addEventListener("change", showResults);

  
  function handleSearchBy(e) {
      if (locationRadio.checked) {
          locationLabel.style.display = "block";
          parkTypeLabel.style.display = "none";
      } else {
          locationLabel.style.display = "none";
          parkTypeLabel.style.display = "block";
      }
      results.innerHTML = ""; //CLEAR OUT THE OLD

    //   showResults();
  }
  locationRadio.addEventListener("click", handleSearchBy)
  parkTypeRadio.addEventListener("click", handleSearchBy)

  locationsArray
      .map(option)
      .forEach(oe => locations.appendChild(oe));

  parkTypesArray
      .map(option)
      .forEach(pto => parkTypes.appendChild(pto));
});