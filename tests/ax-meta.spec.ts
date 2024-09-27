import { expect, test } from "@playwright/test";

test("Le site ax-meta est accessible en ligne", async ({ page }) => {
	await page.goto("https://ax-meta.com/");
});

test("Contrôle des informations sur la page d'acceuil", async ({ page }) => {
	await page.goto("https://ax-meta.com/");
	await expect(page.getByText("AX-META s'est rapidement")).toBeVisible();
	await expect(page.getByText("Chez AX-META, notre mission")).toBeVisible();
	await page
		.locator("#articles div")
		.filter({ hasText: "LaptopProvide high-" })
		.first()
		.click();
	await expect(page.locator("h2")).toContainText("Articles vedettes");
	await expect(
		page
			.locator("#articles div")
			.filter({ hasText: "LaptopProvide high-" })
			.first(),
	).toBeVisible();
	await expect(page.locator("#section-container")).toContainText(
		"Ne manquez plus nos actualités et conseils !",
	);
	await expect(page.getByPlaceholder("Votre mail")).toBeVisible();
	await expect(page.getByRole("button", { name: "S'abonner" })).toBeVisible();
	await expect(page.locator("h1")).toContainText("Partenaires");
	await expect(page.locator("#partenaires")).toBeVisible();
});

test("Le premier produit sur le marketplace et Ax-Meta Pavillon 15", async ({
	page,
}) => {
	await page.goto("https://ax-meta.com/");
	await page.getByRole("link", { name: "MARKETPLACE" }).click();
	await expect(page.locator("#root")).toContainText("Ax-Meta Pavillon 15");
});
