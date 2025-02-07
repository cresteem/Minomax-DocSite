import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "../stylesheets/globals.scss";

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: Record<any, any>;
}) {
  return (
    <MantineProvider defaultColorScheme="light" forceColorScheme="light">
      <ColorSchemeScript />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
