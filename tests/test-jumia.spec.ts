import { expect, test } from "@playwright/test";

test("test", async ({ page }) => {
	// Recording...
	await page.goto("https://www.jumia.ci/");
	await page
		.getByRole("button", { name: "newsletter_popup_close-cta" })
		.click();
	await page
		.getByRole("link", { name: 'Nasco Slim TV LED 32" - HD-' })
		.first()
		.click();
	await page.getByRole("link", { name: "Voir plus" }).click();
	await page
		.getByRole("heading", { name: "je sur fièr de ce produit" })
		.click();
	await expect(page.getByRole("main")).toContainText(
		"je sur fièr de ce produit",
	);
});
