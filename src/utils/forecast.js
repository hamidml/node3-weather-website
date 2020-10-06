const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=66f939460282788a18f56e029a10fb10'

    request({url,json:true},(error, response, body) =>{
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        }else if(body.message){
            callback('Weather Error: ' + body.message, undefined)
        }else {
            callback(undefined, "It is currently " + body.main.temp + " degrees out.")
        }
    })
}

module.exports = forecast