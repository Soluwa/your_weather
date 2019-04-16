const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

 
// console.log(path.join(__dirname,'../public'))

//setting up path
const publicDirectory = path.join(__dirname,'../public')
const viewDirectory = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')

//the problem before was your run command cos you was navigating to src directory then call app.js
//the directory is now in src and cannot see view which is in root

 //call to generate a new instance of the application 
const app = express()

//setting up handlebar engine and views location
app.set('view engine','hbs')
app.set('views',viewDirectory)
hbs.registerPartials(partialPath)

//setting up static directory
//app.use(express.static(publicDirectory))

//Route handlers

app.get('',(req, res) => {

        res.render('index',
        {
            name:'Psalawrence'
        }
        )
})

// app.get('/weather', (req,res) => {

//     if(!req.query.address){

//        return  res.send({

//             error:'Please ensure you enter the location that you want weather update for!'
//         })
//     }

//     geocode(req.query.address,(error,
//         {latitude,longitude,location}) => {

//             if(error){

//                 return res.send({error})
//             }
//            forecast(latitude,longitude,(error,forecastData) => {
//             if(error){

//                 return res.send({error})
//             }

//                 res.send(
//                     {

//                         forecast:forecastData,
//                         location,
//                         address:req.query.address
//                     })
//            }) 

//     })
//     // res.send(
//     // {
//     //         forecaste:'the weather is..',
//     //         location: req.query.location
//     // })
// })

// app.get('/about',(req,res) =>{

//     res.render('about', 
//     {

//         title:'About me',
//         name:'Sam lawrence'        
//     })
// })

// app.get('/help',(req,res) =>{

//     res.render('help', 
//     {

//         title:'Help',
//         message:'Need help, get help!!',
//         menuname:'Help',
//         name:'Sam lawrence'        
//     })
// })

// app.get('/help/*',(req,res) => {

//     res.render('404',
//     {

//         title:'404',
//         name:'Sam lawrence',
//         errorMessage:'Help article not found'
//     })
// })

// app.get('*', (req,res) => {

//     res.render('404',
//     {
//         title:'404',
//         name:'Sam lawrence',
//         errorMessage:'Page not found!'
//     })

// })

app.listen(3000,() => {

    console.log('Web server up an running on port 3000!')
})

// app.get('/detail',(req,res) => {

//     res.send({

//         name: 'Samson',
//         profession:'Software Developer in Test',
//         workplace:'IBM',
//         level:'6BH'
//     })
// })

// app.get('/forecast',(req,res) =>{

//     res.send([
//         {
//                 city:'Coventry',
//                 region:'West Midlands',
//                 street:'Clara street'
//         },
//         {
//                 temperature:15,
//                 unit:'celcius',
//                 precipPossibility:'25%',
//                 summary:'Mostly cloudy with light rain in the evening'
//         }
// ])
// })
// app.get('/whatisweatherlike',(req,res) =>{

//     res.send('<h1> Your weather</h1>')
// })


