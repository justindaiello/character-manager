import * as React from 'react';
import NextHead from 'next/head';
import GoogleFonts from 'next-google-fonts';

interface Props {
  title: string;
}

const fontHref: string = 'https://fonts.googleapis.com/css2?family=Goldman&display=swap';

const Head: React.FC<Props> = ({ children, title }) => {
  return (
    <React.Fragment>
      <GoogleFonts href={fontHref} />
      <NextHead>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />

        <title>{title}</title>

        {children}
      </NextHead>
    </React.Fragment>
  );
};

export default Head;
