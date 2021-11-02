const express = require('express');
const scraping = require('./controllers/user');
const app = express();
const port = 5050;
//scraping('76561198851237529')


app.get('/:id', (req, res) => {
    let id = req.id
    res.send({ 
        message: scraping(id)
    })

})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})