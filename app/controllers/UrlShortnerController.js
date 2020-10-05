const UrlShortnerController = {}
const UrlShortner = require('../models/UrlShortner')
// const short = require('short-uuid')

UrlShortnerController.list = (req,res) => {
    UrlShortner.find()
    .then((urls) => {
        res.json(urls)
    })
    .catch((err) =>{
        res.json(err)
    })
}

// UrlShortnerController.create = (req, res) => {
//     const body = req.body
//     // const translator = short()
//     // const shURL = translator.new()
//     const shUrl = short.generate(body.url)
//     const bodyRes ={
//         url : body.url,
//         urlHash : shUrl,
//         shortUrl : `http://localhost:3055/${shUrl}`
//     }
//     const urlShortner = new UrlShortner(bodyRes)
//     urlShortner.save()
//     .then((response)=>{
//         res.json(response)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// }

UrlShortnerController.create = (req, res) => {
    const body = req.body
    const newurl = new UrlShortner(body)
    newurl.save()
    .then((response)=> {
        res.json(response)
    })  
    .catch((err)=>{
        res.json(err)
    })    
}

UrlShortnerController.search = (req,res) => {
    const hashedUrl = req.params.hash
    // console.log('hashedUrl',hashedUrl)
    UrlShortner.findOneAndUpdate({ hashedUrl })
    .then((response) => {
        // console.log('response',response)
        res.redirect(response.url)
    })
    .catch((err) =>{
        res.json(err)
    })
}

UrlShortnerController.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    UrlShortner.findByIdAndUpdate(id, body, {new: true, runValidators: true})
    .then((response) => {
        if(response) {
            res.json(response)
        } else {
            res.json({})
        }
    })
    .catch((err) => {
        res.json(err)
    })
}

UrlShortnerController.destroy = (req,res) => {
    const id = req.params.id
    UrlShortner.findByIdAndDelete(id)
    .then((response) => {
        if(response) {
            res.json(response)
        } else {
            res.json({})
        }
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports = UrlShortnerController