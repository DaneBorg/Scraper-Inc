//This will be just an experimental file! Play with it as you wish!  Have fun!
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = "https://www.aldi.co.uk/c/groceries/fresh-food/meat";
  await page.goto(url);
  const reqProduct = `British Beef Mince`;
  

  const searchedFor = await page.evaluate(() => 
  Array.from(document.querySelectorAll('div.category-item ul>li.category-item__title')).map((product) => product.innerText)
  );

  
  const searchedForPrice = await page.evaluate(() => 
  Array.from(document.querySelectorAll('div.category-item ul>a li.category-item__price')).map((product) => product.innerText)
  );

  const prodPriceList = (first, second) => {
    return first.reduce((acc, val, ind) => {
      acc[val] = second[ind];
      return acc;
    }, {});
  };
  
  const isProduct = function(reqProduct) {
    if(searchedFor[i] === reqProduct ) {
      console.log(searchedFor[i]);
    }
  };


  //const searchedForPrice = await page.evaluate(() => Array.from(document.querySelectorAll('div.category-item ul>a>li')).map((product) => product.innerText));
  //const searchedForPricePerUnit = await page.evaluate(() => Array.from(document.querySelectorAll('div.category-item ul>a li.category-item__pricePerUnit')).map((product) => product.textContent.replace(/(\r\n|\n|\r)/gm, "").trim()));
  
  
  //console.log(searchedFor);
  //console.log(searchedForPrice);
  console.log(prodPriceList(searchedFor, searchedForPrice));

  await browser.close();
})();