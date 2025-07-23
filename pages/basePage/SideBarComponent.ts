import { Page, Locator } from '@playwright/test';

export class SideBarComponent {
    private readonly page: Page;
    public readonly schedulingButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.schedulingButton = this.page.getByTestId('sidebar-item-scheduling');
    }

    async clickSchedulingButton(): Promise<void> {
        await this.schedulingButton.click();
    }
}
