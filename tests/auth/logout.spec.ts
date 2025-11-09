//logout

import { test, expect } from '@playwright/test';
import { validUser } from '../utils/test-data';
import { BASE_URL } from '../utils/config';

test('should log out and return to login page', async ({ page }) => {
  // Step 1: Log in with valid credentials
  await page.goto(BASE_URL);
  await page.getByTestId('login-input').fill(validUser.username);
  await page.getByTestId('password-input').fill(validUser.password);
  await page.getByTestId('login-button').click();

  // Step 2: Confirm user is logged in
  await expect(page.getByTestId('user-name')).toHaveText(validUser.name);

  // Step 3: Click the logout button
  await page.getByTestId('logout-button').click();

  // Step 4: Verify that the login form is visible again
  await expect(page.getByTestId('login-input')).toBeVisible();
  await expect(page.getByTestId('password-input')).toBeVisible();
});
