var express = require('express');
const app=express();
const bodyParser=require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get("/", urlencodedParser, function (req, res) {
    res.sendFile(__dirname + "/registration.html");
});

app.post('/registration', urlencodedParser,(req,res) => {
    if(!req.body) return response.sendStatus(400);
    res.end();
})
app.listen(3007);


