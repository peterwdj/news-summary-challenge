(function(exports) {
  function storiesArticlesShouldBeTenLong() {
    var stories = new Stories();
    var xhrBuilder = new MockXhrBuilder('https://content.guardianapis.com/search?api-key=', apiKey(), false);

    stories.getHeadlines(xhrBuilder);

    if (stories.articles.length !== 10) {
      console.log(stories.articles);
      throw new Error("Not all articles were added");
    } else {
      console.log("All stories were added; your test passed")
    }
  };

  storiesArticlesShouldBeTenLong();
})(this);


// Stub the xhrBuilder with a MockXHRBuilder that can return an array of ten that can then be added
