const express = require('express');
const scraping = require('./controllers/user');
const app = express();
const port = 5050;
const path = require('path');
//scraping('76561198851237529')


app.get('/api/:id', (req, res) => {
    let id = req.params.id
    var options = {
        root: path.join(__dirname)
    };

    scraping(`${id}`) //writing info in the image
    
    var fileName = `${id}.png`; //name of the file
    
    //sending file
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Sent:', fileName);
            console.log(id)
        }
    });

})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})