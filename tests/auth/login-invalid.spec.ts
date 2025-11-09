//invalid login credentials

import { test, expect } from "@playwright/test";
import { invalidUser } from "../utils/test-data";
import { BASE_URL } from "../utils/config";

test("should disable login button for credentials shorter than 8 characters", async ({
  page,
}) => {
  await page.goto(BASE_URL);

  await page.getByTestId("login-input").fill(invalidUser.username);
  await page.getByTestId("password-input").fill(invalidUser.password);

  await expect(page.getByTestId("login-button")).toBeDisabled();
});
