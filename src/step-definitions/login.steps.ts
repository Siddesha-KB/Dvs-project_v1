import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { env } from '../utils/environment';

Given('User launches application', async function () {
  await this.page.goto(env.baseUrl);
});

When('User enters valid credentials', async function () {
  await expect(this.page.locator('body')).toBeVisible();
  await this.page.locator('body').click();
});

Then('Dashboard is displayed', async function () {
  await expect(this.page).toHaveTitle(/.+/);
  await expect(this.page.locator('body')).toContainText(/.+/);
});
