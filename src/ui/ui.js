export async function displayWeather(data) {
  const weatherContents = document.querySelector(".weatherContents");
  const weatherItem = document.querySelector(".weatherItem");
  const locationContainer = document.querySelector(".locationContainer");
  document.querySelector("#content").classList.add("visible");

  weatherContents.textContent = data.description;

  try {
    // Import dynamique de l'icône météo via Webpack
    const iconModule = await import(`../icons/${data.icon}.svg`);
    const iconUrl = iconModule.default;

    const iconImg = document.createElement("img");
    iconImg.src = iconUrl;
    iconImg.alt = data.description;
    weatherContents.appendChild(iconImg);
    console.log(data.icon)
    
  } catch (error) {
    console.warn("Icône météo introuvable:", error);
  }

  locationContainer.textContent = data.location;
  weatherItem.textContent = `${data.temp}°${data.unit === 'us' ? 'F' : 'C'}`;

}


