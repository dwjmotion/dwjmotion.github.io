export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  // Projects, ordered by the `order` field in each project's front matter.
  eleventyConfig.addCollection("projects", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("src/projects/*.md")
      .sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999))
  );

  eleventyConfig.addFilter("isoDate", (date) => new Date(date).toISOString().slice(0, 10));
}

export const config = {
  dir: {
    input: "src",
    output: "_site",
  },
  templateFormats: ["njk", "md"],
  htmlTemplateEngine: "njk",
  markdownTemplateEngine: "njk",
};
