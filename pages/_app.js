import Layouts from "@/components/Layouts";
import { AuthProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layouts>
        <Head>
          <title>TodoApps</title>
        </Head>
        <Component {...pageProps} />
      </Layouts>
    </AuthProvider>
  );
}
