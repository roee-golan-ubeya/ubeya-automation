import { Page, Locator } from '@playwright/test';
import { BasePage } from '../BasePage';

export class SideBarComponent extends BasePage {
    private readonly dashboardButton: Locator;
    private readonly peopleButton: Locator;
    private readonly timesheetButton: Locator;
    private readonly schedulingButton: Locator;
    private readonly financeButton: Locator;
    private readonly communicationButton: Locator;
    private readonly reportsButton: Locator;
    private readonly clientsButton: Locator;
    private readonly agenciesButton: Locator;
    private readonly administrationButton: Locator;

    private readonly employeesSubMenuButton: Locator;
    private readonly complianceSubMenuButton: Locator;

    constructor(page: Page) {
        super(page);
        this.dashboardButton = this.page.getByTestId('sidebar-item-');
        this.peopleButton = this.page.getByTestId('sidebar-item-people');
        this.timesheetButton = this.page.getByTestId('sidebar-item-timesheet');
        this.schedulingButton = this.page.getByTestId('sidebar-item-scheduling');
        this.financeButton = this.page.getByTestId('sidebar-item-finance');
        this.communicationButton = this.page.getByTestId('sidebar-item-communication');
        this.reportsButton = this.page.getByTestId('sidebar-item-reports');
        this.clientsButton = this.page.getByTestId('sidebar-item-clients');
        this.agenciesButton = this.page.getByTestId('sidebar-item-agencies');
        this.administrationButton = this.page.getByTestId('sidebar-item-administration');

        this.employeesSubMenuButton = this.page.getByTestId('sidebar-sub-menu-item-employees');
        this.complianceSubMenuButton = this.page.getByTestId('sidebar-sub-menu-item-compliance');
    }

    async clickDashboardButton(): Promise<void> {
        await this.dashboardButton.click();
    }

    async clickEmployeesButton(): Promise<void> {
        await this.peopleButton.hover();
        await this.employeesSubMenuButton.click();
    }

    async clickComplianceButton(): Promise<void> {
        await this.peopleButton.hover();
        await this.complianceSubMenuButton.click();
    }

    async clickTimesheetButton(): Promise<void> {
        await this.timesheetButton.click();
    }

    async clickSchedulingButton(): Promise<void> {
        await this.schedulingButton.click();
    }

    async clickFinanceButton(): Promise<void> {
        await this.financeButton.click();
    }

    async clickCommunicationButton(): Promise<void> {
        await this.communicationButton.click();
    }

    async clickReportsButton(): Promise<void> {
        await this.reportsButton.click();
    }

    async clickClientsButton(): Promise<void> {
        await this.clientsButton.click();
    }

    async clickAgenciesButton(): Promise<void> {
        await this.agenciesButton.click();
    }

    async clickAdministrationButton(): Promise<void> {
        await this.administrationButton.click();
    }
}
