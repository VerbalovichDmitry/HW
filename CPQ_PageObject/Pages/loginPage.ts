import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://claritylabs-tst.cpq.cloud.sap/');
  }

  async login(username: string, password: string) {
    await this.page.fill('//label[@id="ctl00_MainContentPlaceHolder_lbUsername"]/following-sibling::input[1]', username);
    await this.page.fill('//label[@id="ctl00_MainContentPlaceHolder_lbPassword"]/following-sibling::input[1]', password);
    await this.page.click('//li[@class="mainloginbtn"]//input[1]');
  }
}
