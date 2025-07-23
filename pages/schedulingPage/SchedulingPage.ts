import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../basePage/BasePage';
import { DayCell } from './DayCell';

export class SchedulingPage extends BasePage {
    // Calendar related locators
    public readonly calendarDaysCells: DayCell[];
    private readonly calendarDaysCellElements: Locator;

    // public readonly plusButton: Locator;
    // public readonly eventNameInput: Locator;
    // public readonly locationSelect: Locator;
    // public readonly locationOptions: Locator;
    // public readonly calendarContainer: Locator;

    constructor(page: Page) {
        super(page);
        this.calendarDaysCellElements = this.page.locator('[data-testid="month-view-cell"]');
        // this.plusButton = this.getElementByDataTestId('plus-button');
        // this.eventNameInput = this.getElementByDataTestId('event-name-input-field');
        // this.locationSelect = this.getElementByDataTestId('location-select-field');
        // this.locationOptions = this.page.locator("[data-testid*='location-select-option']");
        // this.calendarContainer = this.page.locator('[data-testid*="calendar"], .calendar');
    }

    async getAllCalendarDays(): Promise<DayCell[]> {
        await this.calendarDaysCellElements.first().waitFor({ state: 'visible' });
        const locators = await this.calendarDaysCellElements.all();
        const dayCells: DayCell[] = [];

        for (const locator of locators) {
            dayCells.push(new DayCell(this.page, locator));
        }

        return dayCells;
    }

    getCellByDay(day: number): DayCell {
        const locator = this.page.locator(`[data-testid="month-view-cell"][data-date-day="${day}"]`);
        return new DayCell(this.page, locator);
    }
}