export default function(eleventyConfig) {
  // Groups project cards by their optional `group` front matter field,
  // preserving the overall `order` sort. Items without a group come back
  // as their own ungrouped entry; items sharing a group name are batched
  // together under one label. See docs/ADDING_PROJECTS.md.
  eleventyConfig.addFilter("groupProjects", (projects) => {
    const groups = [];
    const byKey = new Map();
    for (const item of projects) {
      const key = item.data.group || "";
      if (!byKey.has(key)) {
        const group = { label: item.data.group || null, items: [] };
        byKey.set(key, group);
        groups.push(group);
      }
      byKey.get(key).items.push(item);
    }
    return groups;
  });

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
