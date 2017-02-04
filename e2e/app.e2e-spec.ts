import { TopHereAndPage } from './app.po';

describe('top-here-and App', function() {
  let page: TopHereAndPage;

  beforeEach(() => {
    page = new TopHereAndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
