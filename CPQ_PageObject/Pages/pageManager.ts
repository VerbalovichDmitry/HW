import { Page } from '@playwright/test';
import { LoginPage } from './loginPage';
import { CategoriesPage } from './categoriesPage';
import { AsusZanConfigurePage } from './asusZanConfigurePage';
import { QuoteConfigurePage } from './quoteConfigurePage';

export class PageManager {
  public loginPage: LoginPage;
  public categoriesPage: CategoriesPage;
  public asusZanConfigurePage: AsusZanConfigurePage;
  public quoteConfigurePage: QuoteConfigurePage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
    this.categoriesPage = new CategoriesPage(page);
    this.asusZanConfigurePage = new AsusZanConfigurePage(page);
    this.quoteConfigurePage = new QuoteConfigurePage(page);
  }
}
