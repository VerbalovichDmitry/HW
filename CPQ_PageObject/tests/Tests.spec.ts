import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

test.describe('Adding products to quote', () => {
  let pageManager: PageManager;

  test.beforeEach(async ({ page }) => {
    pageManager = new PageManager(page);
    await pageManager.loginPage.goto();
    await pageManager.loginPage.login('aleonenko', 'StrongPassword123!');
  });

  test('Complete Hardware Purchase Flow', async () => {
    await pageManager.categoriesPage.selectCategory();
    await pageManager.asusZanConfigurePage.configureProduct();
    await pageManager.quoteConfigurePage.configureQuote();
  });
});
