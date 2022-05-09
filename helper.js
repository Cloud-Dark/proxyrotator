import * as cheerio from 'cheerio'
import request from 'request'

function proxyGenerator() {
  let ip_addresses = [];
  let port_numbers = [];

  request("https://sslproxies.org/", function(error, response, html) {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      $("td:nth-child(1)").each(function(index, value) {
        ip_addresses[index] = $(this).text();
      });

      $("td:nth-child(2)").each(function(index, value) {
        port_numbers[index] = $(this).text();
      });
    } else {
      console.log("Error loading proxy, please try again");
    }

    ip_addresses.join(", ");
    port_numbers.join(", ");

    let random_number = Math.floor(Math.random() * 100);

    let proxy = 'http://' + ip_addresses[random_number] + ':' + port_numbers[random_number];
    console.log("use proxy: "+proxy);



  });
}
export { proxyGenerator }
