import { AttributeDirevtivesPage } from './app.po';

describe('attribute-direvtives App', function() {
  let page: AttributeDirevtivesPage;

  beforeEach(() => {
    page = new AttributeDirevtivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
