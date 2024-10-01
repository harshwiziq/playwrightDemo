import { test, expect } from '@playwright/test';

test.only('test', async ({ page }) => {
  // await page.goto('about:blank');
  await page.goto('https://www.google.com/?gws_rd=ssl');
  await page.getByRole('link', { name: 'Store' }).click();
  await page.getByLabel('Browse through the new Pixel').click();
});