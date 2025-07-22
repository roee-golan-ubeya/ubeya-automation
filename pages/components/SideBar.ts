import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class SideBarComponent extends BasePage {
    public readonly schedulingButton: Locator;


    constructor(page: Page) {
        super(page);
        this.schedulingButton = this.getElementByDataTestId('sidebar-item-scheduling');
    }


}