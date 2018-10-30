////////////////////////////////////////////////////////////////////////////////
// News
////////////////////////////////////////////////////////////////////////////////

let news = {
  page : $('body#news'),
  lock : false
};

if ( news.page.length ) {

  news.articles = $('news-articles');
  news.showmore = $('news-articles + button.show-more');
  news.article = news.articles.find('article');
  news.settings = {
    template : 'news/_articles.twig',
    section  : 'news',
    limit    : news.articles.data('limit'),
    total    : news.articles.data('total'),
    offset   : news.articles.data('limit')
  }

  news.showmore.on('click', (event) => {
    if ( !news.lock ) {
      event.preventDefault();
      news.lock = true;
      fetcher.template(news.settings, (data) => {
        news.lock = false;
        if (data.success) {
          news.articles.append(data.html);
          news.settings.offset = news.settings.offset + news.settings.limit;
          if ( news.settings.offset >= news.settings.total  ) {
            news.showmore.hide();
          }
        } else {

        }
      })
    }
  });

};
