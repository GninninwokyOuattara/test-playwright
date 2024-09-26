import { expect, test } from "@playwright/test";

test("search nutrisnax", async ({ page }) => {
	await page.goto("https://www.google.ci/");
	await page.getByLabel("Rech.").fill("nutrisnax ");
	await page.getByLabel("Recherche Google").first().click();
	await page.getByRole("link", { name: "NUTRISNAX - Digestive" }).click();
	await page.getByText("FCFA").nth(1).click();
	await page.getByText("FCFA").nth(1).click();
});

test("manipulating todos", async ({ page }) => {
	await page.goto("https://demo.playwright.dev/todomvc/");
	await page.goto("https://demo.playwright.dev/todomvc/#/");
	await page.getByPlaceholder("What needs to be done?").fill("nothing");
	await page.getByPlaceholder("What needs to be done?").press("Enter");
	await page.getByPlaceholder("What needs to be done?").fill("need");
	await page.getByPlaceholder("What needs to be done?").press("Enter");
	await page.getByPlaceholder("What needs to be done?").fill("to be");
	await page.getByPlaceholder("What needs to be done?").press("Enter");
	await page.getByPlaceholder("What needs to be done?").fill("done");
	await page.getByPlaceholder("What needs to be done?").press("Enter");
	await expect(page.locator("body")).toContainText("done");
	await page.getByText("nothing").click();
	await expect(page.locator("body")).toContainText("nothing");
	await page
		.locator("li")
		.filter({ hasText: "to be" })
		.getByLabel("Toggle Todo")
		.check();
	await expect(
		page.locator("li").filter({ hasText: "to be" }).getByLabel("Toggle Todo"),
	).toBeChecked();
});
