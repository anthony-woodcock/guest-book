var express = require('express')

var exphbs = require('express-handlebars')

var app = express()

    app.engine('.hbs', exphbs({
        extname: '.hbs',
        defaultLayout: 'main'
      }))
    app.set('view engine', '.hbs')

    //tell express out css/javascript will be stored in public folder
app.use(express.static('public'))

require('./controllers/guestBookController.js')(app)

app.listen(3000)