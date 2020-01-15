// Init weather object
const weather = new Weather('London', 'UK');

weather.getWeather()
.then(result => {
    console.log(result);
})
.catch(err => console.log(err));