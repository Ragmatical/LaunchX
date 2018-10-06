const puppeteer = require('puppeteer');

async function getUrls(links) {
    links=[]
    html = file_get_contents(url);

    dom = new DOMDocument();
    dom.loadHTML(html);

    // grab all the on the page
    xpath = new DOMXPath($dom);
    hrefs = xpath.evaluate("/html/body//a");

    for (i = 0; i < hrefs.length; i++) {
        href = hrefs[i];
        links += href.getAttribute('href');
    }
    var httpsStuff = links.map((link, index) => {
        return {
            url: link[index]
        }
    }).filter(link => (link + '').startsWith('https'));
    return httpsStuff;
}

async function grabLinks(page, item) {
    await page.$eval('a', getUrls).then(function (output) {
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