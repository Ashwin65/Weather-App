var request = require('postman-request')
const weatherCode = (latitude,longitude,callback) =>{
    const url = "http://api.weatherstack.com/current?access_key=e0e9c1c3be2fa8793f29a84213b9dc79&query="+latitude+","+longitude+"&units=m"

    request({url, json:true}, (error,{body}) => {
if(error)
{
    callback("Network not found",undefined);
}
else if(body.error){
    callback("something went wrong",undefined)
}
else {
callback(undefined,{temperature:body.current.temperature,feelsLike:body.current.feelslike})
}
}
    )
}

module.exports = {
    weathercode : weatherCode
}

