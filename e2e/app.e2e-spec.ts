import { WondercheckFrontEndPage } from './app.po';

describe('wondercheck-front-end App', () => {
  let page: WondercheckFrontEndPage;

  beforeEach(() => {
    page = new WondercheckFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
