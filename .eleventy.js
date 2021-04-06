module.exports = function(eleventyConfig) {

    //eleventyConfig.addCollection("stories", function(collectionApi) {
    //  return collectionApi.getFilteredByGlob("src/content/creaciones/**/*.md");
    //});
    eleventyConfig.addPassthroughCopy('styles/tailwind.css');
    eleventyConfig.addPassthroughCopy({ './_site/tailwind.css': './style.css' })
    return {
        dir: {
            output: 'dist',
            //includes: '/includes',
        }
    }
  }