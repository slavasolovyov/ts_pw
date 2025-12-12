import { test, expect } from '@playwright/test';

test('test 1', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Playwright/);
  const getStarted = page.getByRole('link', { name: 'Get started' });
  await expect(getStarted).toBeVisible();

  await getStarted.click();
  await expect(page).toHaveURL(/.*docs\/intro/);
});

test('test 2', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Playwright/)
  ;
  const getStarted = page.getByRole('link', { name: 'Get started' });
  await expect(getStarted).toBeVisible();

  await getStarted.click();
  await expect(page).toHaveURL(/.*docs\/intro/);
});

