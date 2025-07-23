import { Page, Locator, expect } from '@playwright/test';
import { MainPage } from '../mainPage/MainPage';

export class DayCell extends MainPage {
    public readonly dayCell: Locator;
    public readonly plusButton: Locator;

    constructor(page: Page, dayCell: Locator) {
        super(page);
        this.dayCell = dayCell;
        this.plusButton = this.dayCell.locator('.plus-button');
        // this.plusButton = this.getElementByDataTestId('plus-button');
        // this.eventNameInput = this.getElementByDataTestId('event-name-input-field');
        // this.locationSelect = this.getElementByDataTestId('location-select-field');
        // this.locationOptions = this.page.locator("[data-testid*='location-select-option']");
        // this.calendarContainer = this.page.locator('[data-testid*="calendar"], .calendar');
    }

    async clickPlusButton(): Promise<void> {
        await this.plusButton.first().click();
    }

    async clickFirstEvent(): Promise<void> {
        await this.getElementByDataTestId('event-cell').first().click();
    }

    async validateEventExists(eventName: string): Promise<void> {
        const eventElement = this.dayCell.getByText(eventName).first();
        await expect(eventElement).toBeVisible();
    }

}