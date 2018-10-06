const puppeteer = require('puppeteer');

async function getUrls(atags) {
    links=[]

    
    for (i = 0; i < atags.length; i++) {
        atag = atags[i];
        links.push(atag.getAttribute('href'));
    }
    var httpsStuff = links.filter(link => (link + '').startsWith('https'));
    return httpsStuff;
}

async function grabLinks(page, item) {
    await page.$$eval('a', getUrls).then(function (output) {
        console.log(output);
    });
}


async function scraper(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await grabLinks(page);
    await browser.close();
}

scraper('https://www.noodle.com/articles/32-innovative-online-tools-to-use-in-2015');