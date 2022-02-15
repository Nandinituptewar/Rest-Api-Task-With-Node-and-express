const express = require('express')
const fs = require("fs");

const app = express()
const port = 3000

app.get('/customers', (req, res) => {
    fs.readFile("assets/customer.json", 'utf-8', function(err, data) {
        if (err) throw err;
        const users = JSON.parse(data);   
        res.send(users);
    });  
})

app.get('/customers/:firstName', (req, res) => {
    fs.readFile("assets/customer.json", 'utf-8', function(err, data) {
        if (err) throw err;
        const users = JSON.parse(data); 
        let person = users.find(info=>info.firstName===req.params.firstName);
        if(!person){
            res.status(404).send("<h1>Oh, something went wrong</h1>");
        }
        else{
            res.send(person);
        }
        
    });  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})