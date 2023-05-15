import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import "../styles/heroStyles.css";
import Store from "@/contexts/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  );
}
