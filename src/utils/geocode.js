const request = require('request')
const chalk = require('chalk')


const geocode  = (address, callback) => {

    //use object property shorthand syntax for url inside the object cos it has been referenced with the same name with already declared variable
    //use object destructuring for 'response' object returned back by the request (response.body ==> body)
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicHNhbG1sIiwiYSI6ImNqc3llNmRveDA4enI0NHA0OXA5Y3pxZ2kifQ.t8MIHnC7bn2h8oGpqQaYcA'
    request({url, json:true},(error,{body}) => {

        if(error){

            callback(chalk.red.inverse('Unable to connect to the weather service!'), undefined)
        }
        else if(body.message === 'Not Authorized - Invalid Token'){
            
            callback(chalk.red.inverse('Please check that you supply valid access token!'), undefined)
            return
        }
        else if(body.features.length === 0){
            console.log(chalk.red.inverse('No information is returned for the specified location, ensure you provide valid location name to the query string!'))
        } 
        else{
               callback(undefined,{

                            latitude:body.features[0].center[1],
                            longitude:body.features[0].center[0],
                            location:body.features[0].place_name
            })

            //console.log(chalk.green.inverse('The latitude for ' + callback.location + ' is: ' + callback.latitude + ' and its longitude is: '+ callback.longitude))
            // const latitude = response.body.features[0].center[1]
            // const longitude = response.body.features[0].center[0]
            // const location = response.body.features[0].place_name
    
        }
    })
}

module.exports = geocode

