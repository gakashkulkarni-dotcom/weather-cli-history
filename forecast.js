function getForecast(city, days) {
  if (!city) throw new Error("City required");
  return `${days}-day forecast for ${city}: sunny`;
}
module.exports = { getForecast };
