import { expect, test } from "@playwright/test";

test("Le premier produit sur le marketplace et Ax-Meta Pavillon 15", async ({
	page,
}) => {
	await page.goto("https://ax-meta.com/");
	await page.getByRole("link", { name: "MARKETPLACE" }).click();

	await expect(page.locator("#root")).toContainText("Ax-Meta Pavillon 15");
});

test("Le premier produit  dans l’onglet des tablettes est Ax-Meta Tab Pro 12.9 pouces", async ({
	page,
}) => {
	await page.goto("https://ax-meta.com/");
	await page.getByRole("link", { name: "MARKETPLACE" }).click();
	await page.getByRole("link", { name: "Tablettes" }).click();
	await expect(page.locator("#root")).toContainText(
		"Ax-Meta Tab Pro 12.9 pouces",
	);
});
