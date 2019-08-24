const weatherDefault = [{
  "LocalObservationDateTime":"2019-08-24T15:30:00+03:00","EpochTime":1566649800,"WeatherText":"Mostly sunny","WeatherIcon":2,"HasPrecipitation":false,"PrecipitationType":null,"IsDayTime":true,"Temperature":{"Metric":{"Value":31.9,"Unit":"C","UnitType":17},"Imperial":{"Value":89,"Unit":"F","UnitType":18}},"MobileLink":"http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us","Link":"http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"}];
const forecastDefault = {
  DailyForecasts: [{"Date":"2019-08-24T07:00:00+03:00","EpochDate":1566619200,"Temperature":{"Minimum":{"Value":25.6,"Unit":"C","UnitType":17},"Maximum":{"Value":32.5,"Unit":"C","UnitType":17}},"Day":{"Icon":1,"IconPhrase":"Sunny","HasPrecipitation":false},"Night":{"Icon":33,"IconPhrase":"Clear","HasPrecipitation":false},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us","Link":"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"},{"Date":"2019-08-25T07:00:00+03:00","EpochDate":1566705600,"Temperature":{"Minimum":{"Value":24.4,"Unit":"C","UnitType":17},"Maximum":{"Value":32.5,"Unit":"C","UnitType":17}},"Day":{"Icon":1,"IconPhrase":"Sunny","HasPrecipitation":false},"Night":{"Icon":33,"IconPhrase":"Clear","HasPrecipitation":false},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us","Link":"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"},{"Date":"2019-08-26T07:00:00+03:00","EpochDate":1566792000,"Temperature":{"Minimum":{"Value":23.8,"Unit":"C","UnitType":17},"Maximum":{"Value":31.9,"Unit":"C","UnitType":17}},"Day":{"Icon":1,"IconPhrase":"Sunny","HasPrecipitation":false},"Night":{"Icon":34,"IconPhrase":"Mostly clear","HasPrecipitation":false},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us","Link":"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"},{"Date":"2019-08-27T07:00:00+03:00","EpochDate":1566878400,"Temperature":{"Minimum":{"Value":24.5,"Unit":"C","UnitType":17},"Maximum":{"Value":31.6,"Unit":"C","UnitType":17}},"Day":{"Icon":1,"IconPhrase":"Sunny","HasPrecipitation":false},"Night":{"Icon":34,"IconPhrase":"Mostly clear","HasPrecipitation":false},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us","Link":"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"},{"Date":"2019-08-28T07:00:00+03:00","EpochDate":1566964800,"Temperature":{"Minimum":{"Value":25.6,"Unit":"C","UnitType":17},"Maximum":{"Value":31.5,"Unit":"C","UnitType":17}},"Day":{"Icon":2,"IconPhrase":"Mostly sunny","HasPrecipitation":false},"Night":{"Icon":34,"IconPhrase":"Mostly clear","HasPrecipitation":false},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us","Link":"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"}],
  Headline: {"EffectiveDate":"2019-08-24T20:00:00+03:00","EffectiveEpochDate":1566666000,"Severity":7,"Text":"Warm Saturday night","Category":"heat","EndDate":"2019-08-25T08:00:00+03:00","EndEpochDate":1566709200,"MobileLink":"http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us","Link":"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"}
}
const defaultFavs = [
  {id: 215854, name: 'Tel Aviv'},
  {id: 215853, name: 'Jaffa'},
  {id: 215852, name: 'Ashdod'}
]


module.exports = {
  weatherDefault,
  forecastDefault
}