// weather.js
const API_KEY = 'W294BKGYVFHTC7EGA4VRCPQ5G';

export async function getWeatherData(city, unit = 'metric') {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=${unit}&key=${API_KEY}&contentType=json`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Ville non trouvée");
    const data = await res.json();

    return {
      location: data.resolvedAddress,
      temp: data.currentConditions.temp,
      description: data.currentConditions.conditions,
      icon: data.currentConditions.icon,
      unit, 
    };
  } catch (err) {
    console.error(err);
    return null;
  }
}
