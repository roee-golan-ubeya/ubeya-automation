import { Page, Locator } from '@playwright/test';
import { SideBarComponent } from './SideBarComponent';
import { HeaderComponent } from './headerComponent';
import { BasePage } from '../BasePage';

export class MainPage extends BasePage {
    public readonly sideBarComponent: SideBarComponent;
    public readonly headerComponent: HeaderComponent;

    constructor(page: Page) {
        super(page);
        this.sideBarComponent = new SideBarComponent(page);
        this.headerComponent = new HeaderComponent(page);
    }
}
