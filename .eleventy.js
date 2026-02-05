const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  
  // Add global data that reads and sorts JSON files
  eleventyConfig.addGlobalData("approachCards", () => {
    const dir = path.join(__dirname, 'src/_data/approach');
    const files = fs.readdirSync(dir);
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')))
      .sort((a, b) => a.order - b.order);
  });
  
  eleventyConfig.addGlobalData("classesData", () => {
    const dir = path.join(__dirname, 'src/_data/classes');
    const files = fs.readdirSync(dir);
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')));
  });
  
  eleventyConfig.addGlobalData("qualificationsData", () => {
    const dir = path.join(__dirname, 'src/_data/qualifications');
    const files = fs.readdirSync(dir);
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')))
      .sort((a, b) => a.order - b.order);
  });
  
  eleventyConfig.addGlobalData("faqData", () => {
    const dir = path.join(__dirname, 'src/_data/faq');
    const files = fs.readdirSync(dir);
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')))
      .sort((a, b) => a.order - b.order);
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
