const express = require('express')
const router = express.Router()
const UrlShortnerController = require('../app/controllers/UrlShortnerController')

router.get('/urls', UrlShortnerController.list)
router.post('/urls',UrlShortnerController.create)
router.delete('/urls/:id', UrlShortnerController.destroy)
router.put('/urls/:id', UrlShortnerController.update)
router.get('/:hash', UrlShortnerController.search)

module.exports = router