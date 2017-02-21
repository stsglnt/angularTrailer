import { MovieTrailerPage } from './app.po';

describe('movie-trailer App', function() {
  let page: MovieTrailerPage;

  beforeEach(() => {
    page = new MovieTrailerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
