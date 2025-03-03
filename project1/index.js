
const express = require('express');
const app = express();
path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("index");
});

app.get("/profile/abhi", function(req, res){
    res.render("chal raha hai");
})

app.listen(3000, function(){
    console.log("it is running on port 3000");
}) 