import pluginWebc from "@11ty/eleventy-plugin-webc";

export default function(eleventyConfig) {
  eleventyConfig.setInputDirectory("content");
  eleventyConfig.setIncludesDirectory("../includes");
	eleventyConfig.addPlugin(pluginWebc, {
		components: [
			"components/**/*.webc",
		]
	});
	eleventyConfig.addPassthroughCopy({"copy/css": "css"})
};
