module.exports = function(eleventyConfig) {

    eleventyConfig.addCollection("convocatorias", function(collectionApi) {
      return collectionApi.getFilteredByGlob("content/convocatorias/**/*.md");
    });
    //eleventyConfig.addPassthroughCopy('styles/tailwind.css');
    //eleventyConfig.addPassthroughCopy({ './_site/tailwind.css': './style.css' });
    eleventyConfig.addPassthroughCopy("content/articles/**/*.{jpg,png,css}");
    //eleventyConfig.addPassthroughCopy("img");
    return {
        dir: {
            input: 'content/',
            output: 'build',
            includes: '/_includes',
        }
    }
  }
