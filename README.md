
# proxy rotator

![Logo](https://i.ibb.co/ssXnqcK/image.png)


## Isi file

- package.json (berisi module yang di gunakan dan configurasi npm)
- app.js (aplikasi node js rotator)


## Support

For support, email syahdanfilsafan58@gmail.com or [whats app](https://wa.me/628998937095/) .


## How To Install
 1. clone this repository
 2. run npm Install
 3. run npm start


## How to Use / Example

```js

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

```


## Refrensi
https://zenscrape.com/how-to-build-a-simple-proxy-rotator-in-node-js/
