import puppeteer from 'puppeteer';

export default async function getTheLastThreeInstagramPosts() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.instagram.com/davidlpc1/');

  const imagesLists = await page.evaluate(() => {
    const nodeList = document.querySelectorAll('article img');
    const imageArray = [...nodeList];
    const srcOfAllIMages = imageArray.map(
      ({ src }) => ({ src }),
    );
    return srcOfAllIMages.slice(0, 3);
  });

  return imagesLists;
}
