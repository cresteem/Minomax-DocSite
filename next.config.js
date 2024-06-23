const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
});

console.log(
  "\n###################################################\n",
  "Localhost: http://localhost:3000/opensource/minomax",
  "\n####################################################\n"
);
module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
  basePath: "/opensource/minomax",
  output: "export",
  distDir: "opensource/minomax",
};
