const router = require('express').Router()
const getData = require('../controllers/getData')

router.get('/fruits',getData.apple )








module.exports = router