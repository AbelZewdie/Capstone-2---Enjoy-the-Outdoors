function getPark(park) {
    const element = document.createElement("div"); /* Creating a div */
    element.classList.add("park");

    // If Phone number exists and has a value, it creates a string
    const phoneDisplay = park.Phone ? `<span class="bold">Phone:</span> ${park.Phone}` : "";

    // If Fax number exists and has a value, it creates a string
    const faxDisplay = park.Fax ? `<span class="bold">Fax:</span> ${park.Fax}` : "";


    // Conditionally build the display for fax and phone together
    let contactInfo = '';
    if (faxDisplay) {
        // If a fax value exists, it a string with a line break <br> 
        contactInfo += `${faxDisplay}<br>`;
    }
    if (phoneDisplay) {
        // If a phone value exists, it a string with a line break <br> 
        contactInfo += phoneDisplay;
    }
    // If there is a visit link it creates a link element.
    if (park.hasOwnProperty("Visit")) {
        const link = park.Visit;
        const text = park.LocationName;
        element.innerHTML += `
    <div>Link: <a href="${link}" class="visit-site"> ${text} </a></div><br>`;
    };

    /////////////////////////////////////////  Display  /////////////////////////////////////////////////////////////
    element.innerHTML = `<hr><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <span class="bold"> Location: </span> <span class="thickness">${park.LocationName}</span><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <span class="bold"> ID: </span> <span class="thickness">${park.LocationID}</span><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <span class="bold">State: </span><span class="thickness">${park.State}</span><br> 
    <span class="contact-info"> ${contactInfo ? `<br>${contactInfo}` : ""}`;
    return element;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {

    function showResults() {
        let filtered = [];
        if (locationRadio.checked) {
            // If the location radio is checked, it filters pasrks by state.
            filtered = nationalParksArray.filter(
                o => o.State.toUpperCase() === locations.value.toUpperCase()
            )
        } else {
            // Otherwise, it filters Parks by park type.
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
        if (locationRadio.checked) { //if the location radio is checked the locationlabel block shows
            locationLabel.style.display = "block";
            parkTypeLabel.style.display = "none";
        } else { // otherwise, the block of part type shows
            locationLabel.style.display = "none";
            parkTypeLabel.style.display = "block";
        }
        results.innerHTML = ""; //CLEAR OUT THE OLD

        //   showResults();
    }
    locationRadio.addEventListener("click", handleSearchBy)
    parkTypeRadio.addEventListener("click", handleSearchBy)

    locationsArray
        .map(option) // to create options for the locations 
        .forEach(oe => locations.appendChild(oe)); //displays the dropdown for location

    parkTypesArray
        .map(option) // to create options for the parktypes
        .forEach(pto => parkTypes.appendChild(pto)); //displays the dropdown for parktypes
});