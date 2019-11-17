const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const Joi = require('joi');
const bodyParser = require('body-parser');

const app = express();




//Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Bodyparser
app.use(bodyParser.urlencoded({ extended: false }));


//app.use('/users', require('./router/users'))
app.get('/', (req, res) => res.render('index', { layout: "landing" }));

app.post('/add', (req, res) => {
    //console.log(req.body);
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    })
    Joi.validate(req.body, schema, (err, result) => {
        if (err) {
            res.send('an error has occurred');
        }
       // console.log(result)
        return res.send('successfully posted data')
    })
    res.send('Successfully posted data')
})

const PORT = process.env.PORT || 1111;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))


