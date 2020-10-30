var request = require('postman-request')


const geoCode = (address, callback) =>{
    const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiYXNod2luNjU5OCIsImEiOiJja2cwZTcxNTAwMGNpMnlwaHFiMzZtMmE0In0.CBBZO9AuRsYtGYFscFegeg"
console.log(geoUrl)
request({url:geoUrl,json:true},(error,{body}) =>{
    if(error)
    {
        callback("Network not found",undefined)
    }
    else if(body.features.length==0)
    {
        callback("Location not found",undefined)
    }
    else
    {
        console.log(body)
    callback(undefined, {latitude:body.features[0].center[1],longitude : body.features[0].center[0],location:body.features[0].place_name})
}})
}

module.exports = {
    GeoCode : geoCode
}