const express = require('express');
const router  = express.Router();
const Airports = require("../models/Airports")

/* GET home page */
router.get('/map', (req, res, next) => {
  Airports.find({continent: "EU"}).select({lon:1, lat:1, name: 1}).then(allAirports => {
    res.render('map', {layout: false, allAirports: JSON.stringify(allAirports)});
  })
});

router.get("/getAirportsByContinent/:continentID", (req, res) =>{
  Airports.find({$and: [{continent: req.params.continentID}, {lat: {$exists: true}}, {name: {$ne: null}}]}).select({lon:1, lat:1, name: 1}).then(allAirports => {
    res.json(allAirports)
  })
})

router.get('/mapByAxios', (req, res, next) => {
  res.render('mapByAxios', {layout: false});
});

module.exports = router;
