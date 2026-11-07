import { Locator, Page } from '@playwright/test';

export class HeaderComponent {
  readonly brand: Locator;
  readonly userMenu: Locator;

  constructor(private readonly page: Page) {
    this.brand = this.page.getByRole('link', { name: /northbridge|home/i });
    this.userMenu = this.page.getByRole('button', { name: /user|profile/i });
  }
}
