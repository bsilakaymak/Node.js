'use strict';

const fetch = require('node-fetch');

fetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books', {
    headers: { 'Authorization': `Basic YWRtaW46aHZnWDhLbFZF` }
}).then(function(res){
    return res.json()
}).then(function(json){
    console.log(json);
}).catch(function(error){
    console.log(error);
})