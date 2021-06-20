module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("_includes");
    eleventyConfig.addPassthroughCopy("layouts");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("source");
        data: "_data"
};
