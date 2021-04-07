module.exports = function(eleventyConfig) {

    eleventyConfig.addCollection("convocatorias", function(collectionApi) {
      return collectionApi.getFilteredByGlob("content/convocatorias/**/*.md");
    });
    eleventyConfig.addPassthroughCopy('styles/tailwind.css');
    eleventyConfig.addPassthroughCopy({ './_site/tailwind.css': './style.css' })
    return {
        dir: {
            output: 'dist',
            //includes: '/includes',
        }
    }
  }