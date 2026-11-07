import { Page } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';
import { LoginPage } from '../pages/LoginPage';

export class PageManager {
  constructor(private readonly page: Page) {}

  loginPage(): LoginPage {
    return new LoginPage(this.page);
  }

  dashboardPage(): DashboardPage {
    return new DashboardPage(this.page);
  }
}
