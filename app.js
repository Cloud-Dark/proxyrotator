
import { proxyGenerator } from './helper.js'
import * as cheerio from 'cheerio'
import request from 'request'

const options = {
  url: "https://www.forextradingbig.com/10-facts-you-must-know-on-online-forex-trading/",
  method: "GET",
  proxy: proxyGenerator()
};

request(options, function(error, response, html) {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    let article_headings = $("h2").text();
    console.log(article_headings);
  } else {
    console.log("Error scraping site, please try again");
  }
});
