require("dotenv").config();
const axios = require("axios");
var keys = require("./keys.js");
var moment = require('moment');
moment().format();
// var spotify = new Spotify(keys.spotify);



function concertThis(artist) {
var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
axios.get(URL).then(function (response) {
    response.data.forEach(element => {
        console.log("Venue name: "+element.venue.name)
        console.log("Venue location:"+element.venue.city+", "+element.venue.region)
        console.log(moment(element.datetime).format("MM/DD/YYYY"));
        console.log("\n")
    });

  })
  .catch(function (error) {
    console.log(error);
  });
}
concertThis("taylor swift");