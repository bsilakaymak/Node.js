'use strict';

const fetch = require('node-fetch');

fetch('http://api.icndb.com/jokes/random')
.then(function(res){
    return res.json();
})
.then(function(json){
    console.log(json.value.joke)
}).catch(function(error){
    console.log(error);
})
