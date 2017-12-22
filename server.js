const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db.js');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile( __dirname + '/index.html');
})

app.get('/getTop20Scores', (req, res) => {
    console.log('getting top scores');
    db.getTop20Scores().then(result => {
        console.log(result);
        res.json(result);
    })
});

app.post('/submit', (req, res) => {
    console.log('submitting score');
    console.log(req.body);
    db.insertScore(req.body.username, req.body.score).then(() => {
        res.json({success:true});
    })
})

app.listen(process.ENV.PORT || 8080, () => console.log('listening on 8080...'));
