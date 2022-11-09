const express = require('express')
const app = express()
const port = 3001

const { PythonShell } = require("python-shell")

app.get('/', (req, res) => {
    month = req.query.m
    day = req.query.d
    inquiryNb = req.query.inquiryNumber
    device = req.query.device

    res.set('Access-Control-Allow-Origin', '*');

    let options = {
        mode: 'json',
        args: [`-m ${month}`, `-d ${day}`, inquiryNb, device]
    }

    PythonShell.run('mkey.py', options, function(err, results) {
        if(err) {
            console.log(err)
            res.send({error: 'An error occured. Please check your arguments.'}) 
        } else if (results) {
            res.send({master_key: parseInt(results[0])})
        }
    })
})

app.listen(port, () => {
    console.log(`MKey Generator + API is listening on port ${port}`)
})