import {test, expect} from '@playwright/test';

test('has title', async ({page}) => {
  await page.goto('https://leaftaps.com/opentaps/control/main');
  await page.getByRole('textbox', {name: 'Username'}).click();
  await page.getByRole('textbox', {name: 'Username'}).fill('Demosalesmanager');
  await page.getByRole('textbox', {name: 'Password'}).click();
  await page.getByRole('textbox', {name: 'Password'}).fill('crmsfa');
  await page.getByRole('button', {name: 'Login'}).click();
  await expect(page.locator('#errorDiv')).toContainText('following error occurred during login:user not found.');
  console.log(commit in pipeline);
});
