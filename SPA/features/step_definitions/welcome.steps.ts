import { Given, When, Then, BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import assert from 'assert';

setDefaultTimeout(30 * 1000);

let browser;
let page;
const BASE_URL = 'http://localhost:5173';

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
});

AfterAll(async function () {
  await browser.close();
});

Given('I am a new user entering the system', async function () {
  page = await browser.newPage();
});

When('the application starts', async function () {
  await page.goto(BASE_URL);
});

Then('I should see a welcome page with a description of the application', async function () {
  const heading = await page.textContent('h1');
  assert(heading && heading.includes('Welcome to VibeTest'), 'Heading not found or incorrect');
  const description = await page.textContent('.description');
  assert(description && description.length > 10, 'Description not found or too short');
});

Then('I should see a clear call to action to continue', async function () {
  const cta = await page.$('.cta');
  assert(cta, 'Call to action button not found');
  const ctaText = await page.textContent('.cta');
  assert(ctaText && ctaText.length > 0, 'Call to action button has no text');
});

Given('I am on the welcome page', async function () {
  page = await browser.newPage();
  await page.goto(BASE_URL);
});

When('I click the Get Started button', async function () {
  await page.click('.cta');
});

Then('I should be taken to the main application page', async function () {
  await page.waitForSelector('h2');
  const heading = await page.textContent('h2');
  assert(heading && heading.includes('Main Application Page'), 'Did not navigate to main application page');
});
