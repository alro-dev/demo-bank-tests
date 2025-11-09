//valid login

import { test, expect } from "@playwright/test";
import { validUser } from "../utils/test-data";
import { BASE_URL } from "../utils/config";

test("should log in with valid credentials and display user name", async ({
  page,
}) => {
  await page.goto(BASE_URL);

  await page.getByTestId("login-input").fill(validUser.username);
  await page.getByTestId("password-input").fill(validUser.password);
  await page.getByTestId("login-button").click();

  await expect(page.getByTestId("user-name")).toHaveText(validUser.name);
});