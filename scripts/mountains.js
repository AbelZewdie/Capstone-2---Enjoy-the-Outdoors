// function that can "fetch" the sunrise/sunset times
// Asynchronous function allow us to handle data fetching from external sources without blocking the main thread.
async function getSunsetForMountain(lat, lng) { //2 arguements latitude and longitude.
  let response = await fetch( // makes the fetch request and pause the excusion 
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`); //date=today to specify fetching data for the current day
  let data = await response.json(); // pause the excusion again until the JSON parsing is complete.
  return data; //return data containing Sunrise and Sunset information.
}


//waits for the page to be loaded before running the script.
document.addEventListener("DOMContentLoaded", () => {

  for (mountain of mountainsArray) {// after this code mountainArray is represented with "Mountain"
    const name = mountain.name; // After this code mountain.name is represented with "name"
    const o = option(name) // after this code, option(name) is represented with "o"
    mountainList.appendChild(o); //Displaying the option in a dropdown
  }

  mountainList.addEventListener("change", async e => { //event listner listens when there is a change.
    const mountain = mountainsArray[mountainList.selectedIndex - 1]; //getting info from mountainArray
    const sunData = await getSunsetForMountain(mountain.coords.lat, mountain.coords.lng); // fetching sunrise and sunset data to display

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    mountainResults.innerHTML = `
<br><h3>${mountain.name}</h3><br>
<img src="../images/${mountain.img}" class="mountain-image"> <br><br>
<span class="bold">Elevation:</span> ${mountain.elevation} feet<br>
<span class="bold">Lattitute/Longitude:</span> (${mountain.coords.lat}, ${mountain.coords.lng}) <br>
<span class="bold">Effort:</span> ${mountain.effort}<br> <br> <p> ${mountain.desc} </p><br>
<span class="bold">Sunrise:</span> ${sunData.results.sunrise}     | 
<span class="bold">Sunset:</span> ${sunData.results.sunset}
`;
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  });
}); //end loaded