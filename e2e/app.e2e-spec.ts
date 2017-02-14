import { InvoiceManagerPage } from './app.po';

describe('invoice-manager App', function() {
  let page: InvoiceManagerPage;

  beforeEach(() => {
    page = new InvoiceManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
