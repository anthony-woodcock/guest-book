//takes the data from the model and gives it to the view
var bodyParser = require('body-parser')

var guestBookDatas = require('../models/GuestBookData.js')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

function guestBookController (app) {

    app.get('/', function (req, res) {
        res.render('home', {
            guestBookDatas: guestBookDatas.getComments()
        })
    })

    app.post('/', urlencodedParser, function (req, res) {
                guestBookDatas.addComment(req.body.name, req.body.comment )

            res.render('home', {
                guestBookDatas: guestBookDatas.getComments()
            })
    })

    app.delete('/', urlencodedParser, function (req, res) {

        guestBookDatas.removeComment(req.body.id)

            res.render('home', {
                guestBookDatas: guestBookDatas.getComments()
            })

    })

}

module.exports = guestBookController