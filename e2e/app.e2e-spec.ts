import { ContactfirePage } from './app.po';

describe('contactfire App', () => {
  let page: ContactfirePage;

  beforeEach(() => {
    page = new ContactfirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
