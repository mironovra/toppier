import { SimplerPage } from './app.po';

describe('simpler App', function() {
  let page: SimplerPage;

  beforeEach(() => {
    page = new SimplerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
