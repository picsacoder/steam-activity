const { createCanvas, loadImage } = require('canvas')
const cheerio = require('cheerio');
const request = require('request');
const fs = require("fs");
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


        const canvas = createCanvas(1200, 500)
        const ctx = canvas.getContext('2d')


    });

}

scraping('76561198851237529')
