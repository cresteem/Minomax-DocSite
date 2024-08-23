import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

import { CresteemLogo, LicenseFooter, ThemeSwitch } from "./components/utils";

import { useRouter } from "next/router";
import { RiTelegramFill } from "react-icons/ri";

const config: DocsThemeConfig = {
  footer: {
    text: <LicenseFooter />,
  },
  head: (
    <>
      <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="48x48"
        href="/favicons/favicon-48x48.png"
      />
      <link rel="manifest" href="/favicons/manifest.webmanifest" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#fff" />
      <meta name="application-name" content="Minomax-DocSite" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicons/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicons/apple-touch-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicons/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicons/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicons/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicons/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicons/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicons/apple-touch-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href="/favicons/apple-touch-icon-167x167.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon-180x180.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="1024x1024"
        href="/favicons/apple-touch-icon-1024x1024.png"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="Minomax-DocSite" />
      <link
        rel="yandex-tableau-widget"
        href="/favicons/yandex-browser-manifest.json"
      />
    </>
  ),
  banner: {
    key: "0.1.0",
    text: "Minomax 0.1.0 released 🚀",
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
  sidebar: {
    toggleButton: true,
  },

  useNextSeoProps: () => {
    const { frontMatter } = useConfig();
    const { pathname, basePath } = useRouter();
    const url = `https://cresteem.com${basePath}${pathname}`;
    const title =
      frontMatter.title + " | Minomax API References | OpenSource of Cresteem";
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
