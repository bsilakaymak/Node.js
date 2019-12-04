'use strict';

const fetch = require('node-fetch');
fetch('https://reservation100-sandbox.mxapps.io/api/reservations', 
{method: 'POST', 
 headers:{'Content-Type': 'application/json'}, 
 body: {
    "name": "Sila Kaymak",
    "numberOfPeople": 35
  }
}).then(function(res){
    console.log(res);
}).catch(function(error){
    console.log(error);
})