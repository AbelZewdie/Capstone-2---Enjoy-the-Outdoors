function getPark(park) {
    const element = document.createElement("div");
    element.classList.add("park");

    ////////////////////////////////////////////////////////////////
    // Define the phone description
    const phoneDescription = "Phone:";

    // Check if park.Phone exists and has a value before displaying it
    const phoneDisplay = park.Phone ? `${phoneDescription} ${park.Phone}` : "";
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    // Define the fax description
    const faxDescription = "Fax:";
    
    // Check if park.Fax exists and has a value before displaying it
    const faxDisplay = park.Fax ? `${faxDescription} ${park.Fax}` : "";
    ////////////////////////////////////////////////////////////////
    

// Conditionally build the display for fax and phone together
let contactInfo = "";
if (faxDisplay) {
  contactInfo += `${faxDisplay}<br>`;
}
if (phoneDisplay) {
  contactInfo += phoneDisplay;
}



    element.innerHTML = `<hr><br>
  <div class:"spacing">Location: ${park.LocationName}</div>
  <div><span class:"bold">ID:</span> ${park.LocationID}</div>
  State: ${park.State}<br>
  ${contactInfo ? `<br>${contactInfo}` : ""}

`;
    if (park.hasOwnProperty("Visit")) {
        const link = park.Visit;
        const text = park.LocationName;
        element.innerHTML += `
  <div>Link: <a href="${link}" class="visit-site"> ${text} </a></div><br>
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