import { Page } from '@playwright/test';

export class CategoriesPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectCategory() {
    await this.page.click("//a[@title='Collapse/Expand Subcategory']");
    await this.page.click("(//span[@class='categories-tree']/following-sibling::a)[2]");
  }
}
