const express = require('express')
const path = require('path')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')

let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join('public')));

// view engine setup
app.set('views', path.join('views'));
//app.set('view engine', 'jade');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html')

app.get('/home', (req, res) => {
	res.status(200)
	res.render('index', {title: 'RealtyHub.com'});
})

app.get('/help', (req, res) => {
	res.status(200).send('helping')
})

app.listen(3000)