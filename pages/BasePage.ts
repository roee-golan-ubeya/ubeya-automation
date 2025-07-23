import { Page, Locator } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    async goto(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async gotoBaseUrl(): Promise<void> {
        await this.goto(process.env.BASE_URL!);
    }

    getElementByDataTestId(testId: string): Locator {
        return this.page.getByTestId(testId);
    }
}
