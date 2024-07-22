const { url } = require('inspector')

require('dotenv').config()

const config = {header: {
    apikey: process.env.API_KEY
}}
fetch('https://developer.marvel.com/v1/public/characters',
config).then(response => response).then(response => console.log
(response))

