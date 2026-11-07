import { After, Before, Status } from '@cucumber/cucumber';
import { Browser, Page, chromium } from '@playwright/test';
import { PageManager } from '../support/pageManager';

let browser: Browser;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
  this.page = page;
  this.pageManager = new PageManager(page);
});

After(async function ({ result }) {
  if (page) {
    await page.close();
  }

  if (browser) {
    await browser.close();
  }

  if (result?.status === Status.FAILED) {
    console.log('Feature scenario failed.');
  }
});
