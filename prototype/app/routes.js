const express = require('express')
const router = new express.Router()

// Add your routes here - above the module.exports line

// GET SPRINT NAME - useful for relative templates

// route middleware that will happen on every request
router.use('/', (req, res, next) => {
     res.locals.currentURL = req.originalUrl; //current screen
     res.locals.prevURL = req.get('Referrer'); // previous screen
     console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL );
     next();
});

// Old versions
router.use('/version-16', require('./views/version-16/_routes'))

///////////////////////////////////////// New router functionality /////////////////////////////////////////

// User Research and design versions
router.use('/version-29', require('./views/version-29/_routes'))
router.use('/version-30', require('./views/version-30/_routes'))
router.use('/version-31', require('./views/version-31/_routes'))
router.use('/version-32', require('./views/version-32/_routes'))
router.use('/version-33', require('./views/version-33/_routes'))

module.exports = router