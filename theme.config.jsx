import { useConfig } from "nextra-theme-docs";

import { useRouter } from "next/router";
import { RiTelegramFill } from "react-icons/ri";
import Footer from "./components/footer";
import Banner from "./components/utils/banner";
import HeaderLogo from "./components/utils/header-logo";

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const config = {
  footer: {
    component: <Footer />,
  },
  themeSwitch: { component: false },
  backgroundColor: { dark: "#000", light: "#fff" },
  color: { hue: 162, saturation: 60, lightness: 50 },
  banner: {
    key: "100",
    content: <Banner />,
    dismissible: false,
  },

  logo: <HeaderLogo />,

  logoLink: "/",

  project: {
    link: "https://github.com/cresteem/Minomax",
  },

  chat: {
    link: "https://t.me/cresteem/8",
    icon: RiTelegramFill({ size: "29" }),
  },

  docsRepositoryBase: "https://github.com/cresteem/Minomax-DocSite/tree/main",

  nextThemes: { defaultTheme: "Light" },
  sidebar: {
    toggleButton: true,
  },

  head() {
    const { frontMatter } = useConfig();
    const { pathname, basePath } = useRouter();
    const url = `https://minomax.cresteem.com${basePath}${pathname}`;
    const title =
      frontMatter.title + " | Minomax Documentation | OpenSource of Cresteem";
    const desc = frontMatter.description;
    const thumbnailUrl = "/thumbnail.webp";
    return (
      <>
        <title>{title}</title>
        <meta name="description" content={desc} />
        {/* favicons links  */}
        <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
        <link
          rel="icon"
          type="image/webp"
          sizes="16x16"
          href="/favicons/favicon-16x16.webp"
        />
        <link
          rel="icon"
          type="image/webp"
          sizes="32x32"
          href="/favicons/favicon-32x32.webp"
        />
        <link
          rel="icon"
          type="image/webp"
          sizes="48x48"
          href="/favicons/favicon-48x48.webp"
        />
        <link rel="manifest" href="/favicons/manifest.webmanifest" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#fff" />
        <meta name="application-name" content="Minomax Documentation" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicons/apple-touch-icon-57x57.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicons/apple-touch-icon-60x60.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/apple-touch-icon-72x72.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-touch-icon-76x76.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicons/apple-touch-icon-114x114.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-touch-icon-120x120.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicons/apple-touch-icon-144x144.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/apple-touch-icon-152x152.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/favicons/apple-touch-icon-167x167.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon-180x180.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="1024x1024"
          href="/favicons/apple-touch-icon-1024x1024.webp"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Minomax Documentation"
        />
        <link
          rel="yandex-tableau-widget"
          href="/favicons/yandex-browser-manifest.json"
        />
        {/*  */}
        <meta name="twitter:card" content={thumbnailUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={thumbnailUrl} />
        <meta name="twitter:creator" content="@cresteem" />
        <meta name="twitter:site" content={url} />
        <meta property="og:image" content={thumbnailUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="CRESTEEM" />
        <meta property="og:description" content={desc} />
        <meta property="og:title" content={title} />
        <meta property="og:locale" content="en_US" />
      </>
    );
  },
};

export default config;
