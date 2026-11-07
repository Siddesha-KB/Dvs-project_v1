import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  readonly dashboardHeading = this.page.getByRole('heading', { name: /dashboard|welcome/i });

  async isLoaded(): Promise<boolean> {
    return await this.dashboardHeading.isVisible().catch(() => false);
  }

  async expectDashboardVisible(): Promise<void> {
    await expect(this.dashboardHeading).toBeVisible();
  }
}
