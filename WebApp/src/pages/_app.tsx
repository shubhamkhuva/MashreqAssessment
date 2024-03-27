import { ThemeProvider } from "@mui/material";
import theme from "@/core/theme";
import { IntlProvider } from "next-intl";
import NextApp from "next/app";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store, persistor } from "@/context/store";
import { PersistGate } from "redux-persist/integration/react";

function App({ Component, messages, pageProps }: any) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <IntlProvider
            locale="en"
            messages={{ ...messages, ...pageProps.messages }}
            timeZone="Asia/Dubai"
          >
            <Component {...pageProps} />
            <Toaster />
          </IntlProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

App.getInitialProps = async function getInitialProps(appContext: any) {
  const { locale } = appContext.router;

  // Import messages dynamically based on the locale
  const messages = await import(`../localization/${locale}.json`);

  return {
    ...(await NextApp.getInitialProps(appContext)),
    messages,
  };
};

export default App;
