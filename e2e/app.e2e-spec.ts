import { BggDisplayPage } from './app.po';

describe('bgg-display App', () => {
  let page: BggDisplayPage;

  beforeEach(() => {
    page = new BggDisplayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
