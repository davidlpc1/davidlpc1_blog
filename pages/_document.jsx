/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-unresolved
import React from 'react';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        // eslint-disable-next-line react/jsx-props-no-spreading
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <div>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </div>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
