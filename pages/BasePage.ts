import { Page, Locator } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    async goto(url: string): Promise<void> {
        await this.page.goto(url);
    }

    getElementByDataTestId(testId: string): Locator {
        return this.page.getByTestId(testId);
    }
}
