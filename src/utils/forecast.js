const request = require('request')
const chalk = require('chalk')

/*Alt+ ↑ / ↓ Move line up/down 
 *Shift+Alt + ↓ / ↑ Copy line up/down 
 *Ctrl+Shift+K Delete line
 *Ctrl+Enter Insert line below 
 *Ctrl+Shift+Enter Insert line above 
 *Ctrl+Shift+\ Jump to matching bracke
 *Ctrl+↑ / ↓  Scroll line up/down
 *Ctrl+K Ctrl+C Add line comment 
 *Ctrl+K Ctrl+U Remove line commen 
 * Shift+Alt+A Toggle block comment 
 * Alt+enter  select all occurences of find match
 * 
*/




const forecast = (latitude,longitude, callback) =>{

    //used object destructuring for object 'response' and object syntax shorthand for 'url'
    let url = 'https://api.darksky.net/forecast/b0bd6075421ef7394af818a576948e97/'+latitude+','+longitude+'?units=si'
    request(
            {url,json:true},
            (error, {body}) =>{
        
            if(error){
                    callback(chalk.red.inverse('Unable to connect to the weather service!'))
            } 
            else if(body.message === 'Not Authorized - Invalid Token'){
        
                callback(chalk.red.inverse('Please check that you supply valid access token!'))
                return
            }
            else if(body.error){
                callback(chalk.red.inverse('Response code: '+ body.code + ' Unable to find location, please verify query string for location is valid and try again!'))
            }
            else{
        
                let chanceOfRain;
                let outfitChoice;
        
                const temp = body.currently.temperature
                const precipProb = body.currently.precipProbability
        
                if(precipProb <= 25 && !body.daily.data[0].summary.includes('rain')){
        
                    chanceOfRain = 'not need'
                }
                else{
                        chanceOfRain = 'need'
                }
                if(temp >= 15){
                    outfitChoice ='worm weather'
                }
                else{
                      outfitChoice = 'cold weather'
                }
                
                console.log(chalk.green.inverse('The weather will be '+ body.daily.data[0].summary + '.'+ ' Temperature out is '+ temp + ' degrees celcius and there is ' + precipProb + '% chance of rain, you might ' + chanceOfRain+ ' your umbrella today and put on outfit for ' + outfitChoice ))
        
            }
        })

    }

    module.exports = forecast

    