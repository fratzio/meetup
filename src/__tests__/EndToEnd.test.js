import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    // browser = await puppeteer.launch({ headless: false, slowMo: 250 });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.Event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const extra = await page.$('.Event .eventSummary .unfurlEventDetails');
    expect(extra).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.Event .eventButton');

    const extra = await page.$('.Event .eventSummary .unfurlEventDetails');
    expect(extra).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.Event .eventButton');

    const extra = await page.$('.Event .eventSummary .unfurlEventDetails');
    expect(extra).toBeNull();
  });
});

describe('Filter events by city', () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    // browser = await puppeteer.launch({ headless: false, slowMo: 250 });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.Event');
  });

  afterAll(() => {
    browser.close();
  });
  test('By default, when user hasn’t searched for a city, show upcoming events based on the user’s location', async () => {
    const extra = await page.$('.Event');
    expect(extra).toBeDefined();
    const suggestions = await page.$('.suggestions');
    expect(suggestions).toBeDefined();
  });
  test('User should see a list of suggestions when they search for a city', async () => {
    await page.type('.city', 'Munich');
    const suggestions = await page.$('.suggestions');
    expect(suggestions).toBeDefined();
  });
  test('User can select a city from the suggested list', async () => {
    await page.click('.suggestions li');
    const suggestions = await page.$('.suggestions li');
    expect(suggestions).toBeNull();
  });
});
