import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

import { CresteemLogo, LicenseFooter, ThemeSwitch } from "./components/utils";

import { useRouter } from "next/router";
import { RiTelegramFill } from "react-icons/ri";

const config: DocsThemeConfig = {
  footer: {
    text: <LicenseFooter />,
  },

  banner: {
    key: "0",
    text: "WIP",
    dismissible: true,
  },

  logo: <CresteemLogo />,

  logoLink: "/",

  project: {
    link: "https://github.com/cresteem/Minomax",
  },

  chat: {
    link: "https://t.me/cresteem/8",
    icon: RiTelegramFill({ size: "29" }),
  },

  docsRepositoryBase: "https://github.com/cresteem/Minomax-DocSite/tree/main",

  nextThemes: { defaultTheme: "dark" },

  themeSwitch: {
    component: <ThemeSwitch />,
  },

  useNextSeoProps: () => {
    const { frontMatter } = useConfig();
    const { pathname, basePath } = useRouter();
    const url = `https://cresteem.com${basePath}${pathname}`;
    const title =
      frontMatter.title + " | Minomax API References | OpenSource at Cresteem";
    return {
      title: title,
      nofollow: false,
      noindex: false,
      themeColor: "system",
      description: frontMatter.description,
      openGraph: {
        images: [
          {
            url: frontMatter.thumbnailUrl,
            width: 1200,
            height: 630,
          },
        ],
        type: "website",
        url: url,
        siteName: "CRESTEEM",
        description: frontMatter.description,
        title: title,
        locale: "en_US",
      },
      twitter: { handle: "@cresteem", site: url },
      additionalLinkTags: [
        {
          rel: "icon",
          type: "image/webp",
          href: "https://cresteem.com/favicon.webp",
        },
      ],
      additionalMetaTags: [
        { name: "twitter:card", content: frontMatter.description },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: frontMatter.description },
        { name: "twitter:image", content: frontMatter.thumbnailUrl },
      ],
    };
  },
};

export default config;
