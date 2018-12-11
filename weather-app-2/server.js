const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.set('view engine', 'ejs')

const apikey = '11f878d06f6c449cc63de2dcf10e60eb';

app.get('/', (req, res) => {
    res.render('index');
    //res.send('Hello World');
});

app.post('/', (req, res) => {
    
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
    
    request(url, (error, response, body) => {
        if(error){
            res.render('index', {weather: null, error: 'Error, please try again'});
        }else{
            let weather = JSON.parse(body);
            if( weather.main == undefined ){
                res.render('index', {weather: null, error: 'Error, please try again'});
            }else{
                let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!;`
                res.render('index', {weather: weatherText, error: null});
            }
        }
    });
  });

  app.listen( process.env.PORT || 3000, () => { 
    console.log('Running on 3000!');
});