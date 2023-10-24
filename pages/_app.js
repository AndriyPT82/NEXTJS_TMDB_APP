import { Footer, Header } from "@/components";
import GlobalStyle from "@/globalstyles.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <GlobalStyle />
    </>
  );
}
