export default function(eleventyConfig) {
    eleventyConfig.setInputDirectory("views");
    eleventyConfig.setLayoutsDirectory("_layouts");
    eleventyConfig.addPassthroughCopy({
        "./public/": "/"
    })
};
