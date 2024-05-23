function getPark(park) {
    const element = document.createElement("div");
    element.classList.add("park");
    

    // Check if park.Phone exists and has a value before displaying it
    const phoneDisplay = park.Phone ? `<span class="bold">Phone:</span> ${park.Phone}` : "";
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    // Check if park.Fax exists and has a value before displaying it
    const faxDisplay = park.Fax ? `<span class="bold">Fax:</span> ${park.Fax}` : "";
    ////////////////////////////////////////////////////////////////
    

// Conditionally build the display for fax and phone together
let contactInfo = '';
if (faxDisplay) {
  contactInfo += `${faxDisplay}<br>`;
}
if (phoneDisplay) {
  contactInfo += phoneDisplay;
}

if (park.hasOwnProperty("Visit")) {
    const link = park.Visit;
    const text = park.LocationName;
    element.innerHTML += `
    <div>Link: <a href="${link}" class="visit-site"> ${text} </a></div><br>
`;
};


    element.innerHTML = `<hr><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <span class="bold"> Location: </span> <span class="thickness">${park.LocationName}</span><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <span class="bold"> ID: </span> <span class="thickness">${park.LocationID}</span><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <span class="bold">State: </span><span class="thickness">${park.State}</span><br>
    
    <span class="contact-info"> ${contactInfo ? `<br>${contactInfo}` : ""}

`;
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