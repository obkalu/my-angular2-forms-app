import { MyAngular2FormsAppPage } from './app.po';

describe('my-angular2-forms-app App', function() {
  let page: MyAngular2FormsAppPage;

  beforeEach(() => {
    page = new MyAngular2FormsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
