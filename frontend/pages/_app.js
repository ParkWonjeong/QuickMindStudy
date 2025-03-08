import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Pyodide를 전역적으로 로드 */}
      <Script
        src="https://cdn.jsdelivr.net/pyodide/v0.22.0/full/pyodide.js"
        strategy="beforeInteractive"
        onLoad={() => {
          console.log("Pyodide Loaded");
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
