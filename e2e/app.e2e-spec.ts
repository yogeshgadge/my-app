import { AppPage } from './app.po';

describe('my-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Application title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Product create');
  });
});
