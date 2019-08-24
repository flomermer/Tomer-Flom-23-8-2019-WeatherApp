const getWeatherIconSrc = (iconNumber) => {
  iconNumber = iconNumber<10 ? `0${iconNumber}` : iconNumber;
  const src = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${iconNumber}-s.png`;
  return src;
}

module.exports = {
  getWeatherIconSrc
}
