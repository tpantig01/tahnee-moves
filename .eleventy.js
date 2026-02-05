module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  
  // Create collections from data files
  eleventyConfig.addCollection("approach", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/_data/approach/*.json");
  });
  
  eleventyConfig.addCollection("classes", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/_data/classes/*.json");
  });
  
  eleventyConfig.addCollection("qualifications", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/_data/qualifications/*.json");
  });
  
  eleventyConfig.addCollection("faq", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/_data/faq/*.json");
  });
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
