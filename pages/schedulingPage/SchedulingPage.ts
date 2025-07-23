import { Page, Locator } from '@playwright/test';
import { DayCell } from './components/DayCell';
import { MainPage } from '../mainPage/MainPage';

export class SchedulingPage extends MainPage {
    public readonly calendarDaysCells: DayCell[];
    private readonly calendarDaysCellElements: Locator;

    constructor(page: Page) {
        super(page);
        this.calendarDaysCellElements = this.page.locator('[data-testid="month-view-cell"]');
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