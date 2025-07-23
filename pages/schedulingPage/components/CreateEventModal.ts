import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class CreateEventModal extends BasePage {
    public readonly eventNameInput: Locator;
    public readonly locationSelectField: Locator;
    public readonly selectOptions: Locator;
    public readonly nextStepButton: Locator;
    public readonly addButton: Locator;

    constructor(page: Page) {
        super(page);
        this.eventNameInput = this.getElementByDataTestId('event-name-input-field');
        this.locationSelectField = this.getElementByDataTestId('location-select-field');
        this.nextStepButton = this.getElementByDataTestId('next-step-button');
        this.addButton = this.getElementByDataTestId('add-button');
        this.selectOptions = this.page.locator("[data-testid*='select-option']");

    }

    async fillEventName(eventName: string): Promise<void> {
        await this.eventNameInput.fill(eventName);
    }

    async selectFirstLocation(): Promise<void> {
        await this.locationSelectField.click();
        await this.selectOptions.first().click();
    }

    async clickNextStep(): Promise<void> {
        await this.nextStepButton.click();
    }

    async clickAdd(): Promise<void> {
        await this.addButton.click();
    }
}
