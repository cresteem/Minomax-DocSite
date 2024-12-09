import "../stylesheets/globals.scss";

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: Record<any, any>;
}) {
  return <Component {...pageProps} />;
}
