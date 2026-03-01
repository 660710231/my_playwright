import { test, expect } from '@playwright/test';

test('login failed test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('wrong_pass');
  await page.locator('[data-test="login-button"]').click();

  const error = page.locator('.error-message-container');
  
  await expect(error).toBeVisible();
  await expect(error).toContainText('do not match');

  await expect(page.locator('[data-test="username"]')).toHaveClass(/error/);

  await page.locator('[data-test="error-button"]').click();
  await expect(page.locator('[data-test="error"]')).not.toBeVisible();

});