import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SchedulingPage } from '../pages/schedulingPage/SchedulingPage';
import { CreateEventModal } from '../pages/schedulingPage/components/CreateEventModal';

test('Create event', async ({ page }) => {
  const EMAIL = 'roeeg@ubeya.com';
  const PASSWORD = '12345678';
  const EVENT_NAME = 'Test Event';
  const DAY = 15;

  const loginPage = new LoginPage(page);
  const schedulingPage = new SchedulingPage(page);
  const createEventModal = new CreateEventModal(page);

  await loginPage.gotoBaseUrl();
  await loginPage.login(EMAIL, PASSWORD);

  await schedulingPage.sideBarComponent.clickSchedulingButton();

  const dayCell = await schedulingPage.getCellByDay(DAY);
  await dayCell.clickPlusButton();

  await createEventModal.fillEventName(EVENT_NAME);
  await createEventModal.selectFirstLocation();
  await createEventModal.clickNextStep();
  await createEventModal.clickAdd();

  await dayCell.validateEventExists(EVENT_NAME);
});
