import { Page } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async waitForSpinnerToDisappear(selector = '[data-testid="spinner"], .spinner, .loading'): Promise<void> {
    const loader = this.page.locator(selector);
    if (await loader.count().catch(() => 0)) {
      await loader.first().waitFor({ state: 'hidden', timeout: 15000 }).catch(() => undefined);
    }
  }

  async navigateTo(path = '/'): Promise<void> {
    await this.page.goto(path);
  }
}
