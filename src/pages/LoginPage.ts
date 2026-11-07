import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly usernameInput = this.page.getByLabel(/username|user id|email/i);
  readonly passwordInput = this.page.getByLabel(/password/i);
  readonly loginButton = this.page.getByRole('button', { name: /log in|sign in/i });

  async open(): Promise<void> {
    await this.navigateTo('/login');
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
