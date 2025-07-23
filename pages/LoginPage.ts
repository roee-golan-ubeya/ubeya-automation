import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = this.getElementByDataTestId('email-input-field');
        this.passwordInput = this.getElementByDataTestId('password-input-field');
        this.loginButton = this.getElementByDataTestId('login-button');
    }

    async login(email: string, password: string): Promise<void> {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('load');
    }
}