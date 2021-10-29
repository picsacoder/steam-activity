const { createCanvas, loadImage, registerFont } = require('canvas')
const cheerio = require('cheerio');
const request = require('request');
const fs = require("fs");
registerFont('../Roboto-Regular.ttf', { family: 'Roboto' })

async function scraping(steam_id) { 
    request({
        method: 'GET',
        url: `https://steamcommunity.com/profiles/${steam_id}`
    }, (err, res, body) => {

        if (err) return console.error(err);
    
        let $ = cheerio.load(body);
    
        let title = $('title');
        let name = $('.actual_persona_name')
        let status = $('.profile_in_game_header');


        console.log(title.text());
        console.log(status.text());
        console.log(name.text())


        const canvas = createCanvas(626, 417)
        const ctx = canvas.getContext('2d')




        ctx.font = '20px "Roboto Regular"'
        ctx.fillText(name.text(), 250, 35)

        ctx.font = '15px "Roboto Regular"'
        ctx.fillText(status.text(), 150, 75)


        console.log(canvas.toDataURL())
        
    });

}

scraping('76561198851237529')
