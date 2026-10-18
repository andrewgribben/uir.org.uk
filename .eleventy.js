export default function(eleventyConfig) {
  for (const service of ["access", "form", "studio"]) {
    eleventyConfig.addCollection(`${service}Projects`, (collectionApi) =>
      collectionApi
        .getFilteredByGlob(`./src/projects/${service}/*.md`)
        .sort((a, b) => a.data.order - b.data.order)
    );
  }

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addTransform("trim-trailing-whitespace", (content, outputPath) => {
    if (!outputPath || !outputPath.endsWith(".html")) return content;
    return content.replace(/[ \t]+$/gm, "");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "dist"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"]
  };
}
