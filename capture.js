const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:8000/index.html', { waitUntil: 'networkidle0' });
  await new Promise(resolve => setTimeout(resolve, 3000)); // wait for images/fonts
  await page.screenshot({ path: '/Users/mahitamanikandan/.gemini/antigravity/brain/a451a77b-56dd-4aab-a2b7-4348626a4c8d/homepage_full.png', fullPage: true });
  await browser.close();
})();
