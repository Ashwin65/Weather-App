const { request, response } = require('express');
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('../utils/geocode')
const weathercode= require('../utils/weathercode')
const app = express();


 const publicPath = path.join(__dirname,"../public")
 const viewsPath = path.join(__dirname,"../templates/views")
 const partialsPath = path.join(__dirname,"../templates/partials")
 let resObj;
app.set('view engine', 'hbs');
app.set('views',viewsPath)
hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));


app.get("",(request, response)=>{
    response.render('index',{
        title: 'Home',
        name:"Ashwin"
    });
})

app.get("/weather",(request,res)=>{
    if(!request.query.address)
    {
     return res.send({
         error: "Address should be provided"
     })
    }
    geocode.GeoCode(request.query.address,(error,{latitude,longitude,location}={}) =>{
        if(error)
        {
            return res.send({
                error           
            })
        }
        else{
        weathercode.weathercode(latitude,longitude,(error,response) =>{
            if(error){
                return res.send({
                    error           
                })
            }
            
            else{
                return res.send({
                    address:request.query.address,
                    location,
                    forecast:response
                })
            resObj = response;
            console.log(resObj)
        }
        })
    }
    })
})
app.get("/help",(request,response)=>{
    response.render("help",{
        title: 'help',
        name:"Ashwin"
    });
})
app.get("/about",(request,response)=>{
    response.send("<h1>Title</h1>")
})

app.get("*",(req,res)=>{
    res.render('notfound',{
        title: "pagenotfound"
    })
})

app.listen('3000',()=>{
    console.log("hey")
})