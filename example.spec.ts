import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test orange', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.locator('input[name=\'username\']').fill('Admin')
  await page.locator('input[name=\'password\']').fill('admin123')
  await page.keyboard.press('Enter')

  await expect(page.locator('//div[contains(@class, \'oxd-sidepanel-header\')]')).toBeVisible()

  await page.locator('//ul[contains(@class, \'oxd-main-menu\')]//li[1]//span').click()
  await page.locator('//div[contains(@class, \'orangehrm-header-container\')]//button//i').click()
  await page.locator('form i').nth(0).click();
  await page.getByRole('option', { name: 'Adm' }).click();
  await page.locator('form i').nth(1).click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('textbox').nth(3).fill('prueba1')
  await page.getByPlaceholder('Type for hints...').click();
  await page.getByPlaceholder('Type for hints...').fill('sav');
  await page.getByText('savina dulvin dulvin').first().click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('Samir Xavier');
  await page.getByRole('textbox').nth(4).fill('prueba1')
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Samir Xavier').click();
  
  await page.pause()

});
