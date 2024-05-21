// function that can "fetch" the sunrise/sunset times
async function getSunsetForMountain(lat, lng) {
  let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
  let data = await response.json();
  return data;
}



document.addEventListener("DOMContentLoaded", () => {
  // mountainResults.innerHTML = "Hello"

  for (mountain of mountainsArray) {
    const name = mountain.name;
    const o = option(name)
    mountainList.appendChild(o);
  }

  mountainList.addEventListener("change", async e => {
    const mountain = mountainsArray[mountainList.selectedIndex - 1]; //getting info
    const sunData = await getSunsetForMountain(mountain.coords.lat, mountain.coords.lng);

    mountainResults.innerHTML = `
<br>

    <h3>${mountain.name}</h3>
    <img src="../images/${mountain.img}" class="mountain-image">
<br>
<br>
<span class="bold">Elevation:</span> ${mountain.elevation} feet<br>
<span class="bold">Lattitute/Longitude:</span> (${mountain.coords.lat}, ${mountain.coords.lng}) <br>
<span class="bold">Effort:</span> ${mountain.effort}<br>
<br>
<p> ${mountain.desc} </p>
<br>

<span class="bold">Sunrise:</span> ${sunData.results.sunrise}     | 
<span class="bold">Sunset:</span> ${sunData.results.sunset}
`;
  });
}); //end loaded