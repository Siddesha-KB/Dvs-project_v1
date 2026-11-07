import { Locator, Page } from '@playwright/test';

export class NavigationComponent {
  readonly accessGovernanceLink: Locator;

  constructor(private readonly page: Page) {
    this.accessGovernanceLink = this.page.getByRole('link', { name: /access governance/i });
  }
}
