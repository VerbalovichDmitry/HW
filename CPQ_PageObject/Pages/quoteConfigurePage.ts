import { Page, expect } from '@playwright/test';

export class QuoteConfigurePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async configureQuote() {
    await this.page.selectOption("//label[@for='orderStatusLabelId']/following-sibling::select[1]", 'VN Preparing');

    // Убедиться, что в Date Modified стоит актуальная дата
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(2);
    const formattedDate = `${day}/${month}/${year}`;
    const dateModified = await this.page.textContent("(//label[@class='control-label']/following-sibling::span)[3]");
    expect(dateModified).toBe(formattedDate);

    const products = await this.page.textContent("//td[contains(@class,'item-column item-column-sticky')]");
    expect(products).toContain("ASUL");
    const dvd = await this.page.textContent("//table[contains(@class,'fiori3-table items-table')]/tbody[1]/tr[2]/td[2]/div[1]");
    expect(dvd).toContain("DVD12X");

    // Получить значения стоимости ASUS Zan и DVD12X из колонки List Price
    const asusZanPrice = await this.page.textContent("//table[contains(@class,'fiori3-table items-table')]/tbody[1]/tr[1]/td[4]/div[1]");
    const dvd12xPrice = await this.page.textContent("//table[contains(@class,'fiori3-table items-table')]/tbody[1]/tr[2]/td[4]/div[1]");

    // Преобразовать строки в числа
    const asusZanPriceValue = asusZanPrice ? parseFloat(asusZanPrice.replace(/[^\d.-]/g, '')) : 0;
    const dvd12xPriceValue = dvd12xPrice ? parseFloat(dvd12xPrice.replace(/[^\d.-]/g, '')) : 0;

    // Сложить значения
    const expectedTotalValue = asusZanPriceValue + dvd12xPriceValue;

    // Убедиться, что в разделе Totals (в самом низу) стоит правильная сумма
    const total = await this.page.textContent("(//div[contains(@class,'flex totals-section')]//div)[2]");
    const totalValue = total ? parseFloat(total.replace(/[^\d.-]/g, '')) : 0;
    expect(totalValue).toBe(expectedTotalValue);

    // Нажать на кнопку Save Quote 
    await this.page.click("//span[text()='Save Quote']");
  }
}
