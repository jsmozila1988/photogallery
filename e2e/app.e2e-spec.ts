import { PhotogalleryPage } from './app.po';

describe('photogallery App', () => {
  let page: PhotogalleryPage;

  beforeEach(() => {
    page = new PhotogalleryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
