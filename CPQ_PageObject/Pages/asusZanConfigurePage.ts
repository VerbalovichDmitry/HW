import { Page } from '@playwright/test';

export class AsusZanConfigurePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async configureProduct() {
    await this.page.click("//div[@class='config-button']//a");
    await this.page.check("//input[@value='11582']/following-sibling::span[1]");
    await this.page.check("//label[@id='radioButton_170711570']/span[1]");
    await this.page.click("//button[contains(@class,'btn btn-primary')]//span[1]");
  }
}
