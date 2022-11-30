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

    if(month > 12 || month < 1) {
        res.send({error: 'The month must between 1 and 12.'})
    } else if(day > 31 || day < 1) {
        res.send({error: 'The day must between 1 and 31.'}) 
    } else if(inquiryNb.length != 10) {
        res.send({error: 'The inquiry number must have a length of 10.'})
    } else if(device != 'CTR') { 
        res.send({error: 'The device needs to be set to CTR.'})
    } else {
        let options = {
            mode: 'json',
            args: [`-m ${month}`, `-d ${day}`, inquiryNb, device]
        }
    
        PythonShell.run('mkey.py', options, function(err, results) {
            if(err) {
                console.log(err)
                res.send({error: 'An error has occured. Please check your arguments.'}) 
            } else if (results) {
                res.send({master_key: parseInt(results[0])})
            }
        })
    }
})

app.listen(port, () => {
    console.log(`MKey Generator + API is listening on port ${port}`)
})