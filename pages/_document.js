import Document, { Html, Head, Main, Next, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <div id="notifications"></div>
      </Html>
    );
  }
}

export default MyDocument;
