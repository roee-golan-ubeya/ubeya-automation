import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testConfig } from '../config/initConfig';
import { SideBarComponent } from '../pages/basePage/SideBarComponent';
import { SchedulingPage } from '../pages/schedulingPage/SchedulingPage';

test('get started link', async ({ page }) => {
  const EMAIL = 'roeeg@ubeya.com';
  const PASSWORD = '12345678';
  const EVENT_NAME = 'Test Event';
  const DAY = 15;

  const loginPage = new LoginPage(page);
  const sideBarComponent = new SideBarComponent(page);
  const schedulingPage = new SchedulingPage(page);

  await page.goto(testConfig.BASE_URL);
  await loginPage.login(EMAIL, PASSWORD);

  await schedulingPage.sideBarComponent.clickSchedulingButton();
  const dayCell = await schedulingPage.getCellByDay(DAY);
  await dayCell.clickPlusButton();

  await page.getByTestId('event-name-input-field').fill(EVENT_NAME);
  await page.getByTestId('location-select-field').click();
  await page.locator("[data-testid*='select-option']").first().click();

  await page.getByTestId("next-step-button").click();
  await page.getByTestId("add-button").click();

  await dayCell.validateEventExists(EVENT_NAME);
  await dayCell.clickFirstEvent();

  await page.waitForTimeout(10000)
});
