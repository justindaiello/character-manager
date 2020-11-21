import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

/**
 * Taken from styled-components docs
 * This file will prevent a bug that causes styled components styles to not get injected on page load.
 * Goes over the whole component tree and fetches styled CSS before html is rendered to the page
 */

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
