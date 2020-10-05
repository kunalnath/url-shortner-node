const { response } = require('express')
const mongoose = require('mongoose')
// const short = require('short-uuid')
const short = require('shorthash')

const Schema = mongoose.Schema

const UrlShortnerSchema = new Schema({
    url : {
        type : String,
        required : true
    },
    urlHash : {
        type : String
    },
    shortUrl : {
        type : String 
    }
})

UrlShortnerSchema.pre('save', function(next) {
    // this.hashedUrl = sh.unique(this.originalUrl)
    // this.urlHash = short.generate(this.url)
    this.urlHash = short.unique(this.url)
    // console.log('in pre save')
    next()
})


const UrlShortner = mongoose.model('UrlShortner',UrlShortnerSchema)

module.exports = UrlShortner