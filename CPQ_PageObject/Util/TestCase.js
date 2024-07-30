import { test, expect } from '@playwright/test';

test.describe('Adding products to quote', () => {
  test.beforeEach(async ({ page }) => {
    // Авторизоваться на сайте по кредам aleonenko, StrongPassword123!
    await page.goto('https://claritylabs-tst.cpq.cloud.sap/');
    await page.fill('//label[@id="ctl00_MainContentPlaceHolder_lbUsername"]/following-sibling::input[1]', 'aleonenko');
    await page.fill('//label[@id="ctl00_MainContentPlaceHolder_lbPassword"]/following-sibling::input[1]', 'StrongPassword123!');
    await page.click('//li[@class="mainloginbtn"]//input[1]');
  });

  test('Complete Hardware Purchase Flow', async ({ page }) => {
    // Нажать на дропдаун QA: Hardware, затем выбрать QA:Laptops
    await page.click("//a[@title='Collapse/Expand Subcategory']");
    await page.click("(//span[@class='categories-tree']/following-sibling::a)[2]");

    // Нажать на Configure продукта ASUS Zan (ASUL)
    await page.click("//div[@class='config-button']//a");

    // Выбрать HD150 и DVD12X 
    await page.check("//input[@value='11582']/following-sibling::span[1]");
    await page.check("//label[@id='radioButton_170711570']/span[1]");
    await page.click("//button[contains(@class,'btn btn-primary')]//span[1]");

    // В дропдауне "Статус" выбрать VN Preparing
    await page.selectOption("//label[@for='orderStatusLabelId']/following-sibling::select[1]", 'VN Preparing');

    // Убедиться, что в Date Modified стоит актуальная дата
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(2);
    const formattedDate = `${day}/${month}/${year}`;
    const dateModified = await page.textContent("(//label[@class='control-label']/following-sibling::span)[3]");
    expect(dateModified).toBe(formattedDate);



const products = await page.textContent("'ASUL'");
expect(products).toContain("ASUL");
const dvd = await page.textContent("'DVD12X'");
expect(dvd).toContain("DVD12X");




    // Получить значения стоимости ASUS Zan и DVD12X из колонки List Price
    const asusZanPrice = await page.textContent("//table[contains(@class,'fiori3-table items-table')]/tbody[1]/tr[1]/td[4]/div[1]");
    const dvd12xPrice = await page.textContent("//table[contains(@class,'fiori3-table items-table')]/tbody[1]/tr[2]/td[4]/div[1]");

    // Преобразовать строки в числа
    const asusZanPriceValue = parseFloat(asusZanPrice.replace(/[^\d.-]/g, ''));
    const dvd12xPriceValue = parseFloat(dvd12xPrice.replace(/[^\d.-]/g, ''));

    // Сложить значения
    const expectedTotalValue = asusZanPriceValue + dvd12xPriceValue;

    // Убедиться, что в разделе Totals (в самом низу) стоит правильная сумма
    const total = await page.textContent("(//div[contains(@class,'flex totals-section')]//div)[2]");
    const totalValue = parseFloat(total.replace(/[^\d.-]/g, ''));
    expect(totalValue).toBe(expectedTotalValue);

    // Нажать на кнопку Save Quote 
    await page.click("//span[text()='Save Quote']");
  });
});
