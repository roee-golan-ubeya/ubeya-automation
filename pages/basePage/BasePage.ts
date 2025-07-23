import { Page, Locator } from '@playwright/test';
import { SideBarComponent } from './SideBarComponent';
import { HeaderComponent } from './headerComponent';

export class BasePage {
    protected page: Page;
    public readonly sideBarComponent: SideBarComponent;
    public readonly headerComponent: HeaderComponent;


    constructor(page: Page) {
        this.page = page;
        this.sideBarComponent = new SideBarComponent(page);
        this.headerComponent = new HeaderComponent(page);
    }

    async goto(url: string): Promise<void> {
        await this.page.goto(url);
    }

    getElementByDataTestId(testId: string): Locator {
        return this.page.getByTestId(testId);
    }
}
