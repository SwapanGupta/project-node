/* 
Import Required Modules
*/
const chalk = require('chalk');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/register', function (req, res) {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const address = req.body.address;
    const password = req.body.password;
    //const confirmPassword = req.body.confirmpassword;
    //const equalValid = password === confirmPassword ? res.send("Password does match") : res.send("Password doesnot match");
    const valid = fullName && email && address && password !== {} ? res.send("response successful") : res.send("response unsuccessful");
    console.log(req.body);
});
app.listen(3005);
console.log("Server Listening at 3005");