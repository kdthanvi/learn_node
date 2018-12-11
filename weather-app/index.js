const request = require('request');
const argv = require('yargs').argv;

let apikey = '11f878d06f6c449cc63de2dcf10e60eb';
let city = argv.c || 'Tokyo';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;

request(url, (error, response, body) => {
    if(error){
        console.log('Error : ', error);
    }else{
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degress in ${weather.name}`;
        console.log(message);
    }
});