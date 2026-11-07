import { expect, test } from '@playwright/test';
import { env } from '../src/utils/environment';

test('smoke: application loads', async ({ page }) => {
  await page.goto(env.baseUrl);
  await expect(page).toHaveTitle(/.+/);
});
