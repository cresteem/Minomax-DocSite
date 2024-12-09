import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  staticImage: true,
});

const config = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
  basePath: "",
  output: "export",
  distDir: "out",
  sassOptions: { silenceDeprecations: ["legacy-js-api"] },
};

export default config;
