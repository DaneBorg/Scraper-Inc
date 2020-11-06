const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://aldi.co.uk');
  await page.screenshot({path: 'snapshot.png'});

  await browser.close();
})();