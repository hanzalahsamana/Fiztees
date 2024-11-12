"use client";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { store } from "@/Redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/layout/layout";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const RootLayout = ({ children }) => {
  return (
    <Provider store={store}>
      <html lang="en">
        <title>Fiztees</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          suppressHydrationWarning
        >
          <Layout chidren={children} />
          <ToastContainer />
          <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        </body>
      </html>
    </Provider>
  );
};

export default RootLayout;
