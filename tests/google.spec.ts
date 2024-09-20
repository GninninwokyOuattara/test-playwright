import { expect, test } from "@playwright/test";

test("test", async ({ page }) => {
	await page.goto("https://www.google.ci/");
	await page.getByLabel("Rech.").click();
	await page.getByLabel("Rech.").fill("hello world");
	await page.getByLabel("Recherche Google").first().click();
	await page.getByRole("link", { name: "Hello world Wikipédia https" }).click();
	await expect(page.locator("#firstHeading")).toContainText("Hello world");
	await page
		.getByRole("link", { name: "programme informatique", exact: true })
		.click();
	await expect(
		page.getByRole("link", { name: "Wikipédia l'encyclopédie libre" }),
	).toBeVisible();
	await page.getByRole("link", { name: "informatique", exact: true }).click();
	await expect(page.locator("#mw-content-text")).toContainText("informatique");
});
