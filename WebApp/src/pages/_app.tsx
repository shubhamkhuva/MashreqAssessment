// import theme from "@/core/theme";
// import "@/styles/globals.css";
// import { ThemeProvider } from "@mui/material";
// import { NextIntlClientProvider } from "next-intl";
// import type { AppProps } from "next/app";
// import { useRouter } from "next/router";
// // import nextI18NextConfig from "../../next-i18next.config";

// // import { appWithTranslation } from "next-i18next";

// export default function App({ Component, pageProps }: AppProps) {
//   const router = useRouter();
//   return (
//     <ThemeProvider theme={theme}>
//       <NextIntlClientProvider
//         locale={router.locale}
//         timeZone="Europe/Vienna"
//         messages={pageProps.messages}
//       >
//         <Component {...pageProps} />
//       </NextIntlClientProvider>
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// }
// // export default appWithTranslation(App, nextI18NextConfig);

// import { AppProps } from "next/app";
// import { useRouter } from "next/router";
// import { NextIntlClientProvider } from "next-intl";

// export default function App({ Component, pageProps }: AppProps) {
//   const router = useRouter();

//   return (

//     <NextIntlClientProvider
//       locale={router.locale}
//       messages={pageProps.messages}
//     >
//       <Component {...pageProps} />
//     </NextIntlClientProvider>
//   );
// }
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

App.getInitialProps = async function getInitialProps(context: any) {
  const { locale } = context.router;
  return {
    ...(await NextApp.getInitialProps(context)),
    messages: require(`../localization/${locale || "en"}.json`),
  };
};

export default App;
