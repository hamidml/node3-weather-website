const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=66f939460282788a18f56e029a10fb10'

    request({url,json:true},(error, response, body) =>{
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        }else if(body.message){
            callback('Weather Error: ' + body.message, undefined)
        }else {
            const weatherInfo =
                body.weather[0].main + ": " + body.weather[0].description + "\r\n" +
                "Temperature: " + body.main.temp + " degrees \r\n" +
                "Pressure: " + body.main.pressure + "\r\n" +
                "Wind Speed: " + body.wind.speed + "\r\n" +
                "Wind Degree: " + body.wind.deg
            callback(undefined, weatherInfo)
        }
    })
}

module.exports = forecast