import * as React from 'react';
import NextHead from 'next/head';
import GoogleFonts from 'next-google-fonts';

type Props = {
  title: string;
  children: React.ReactNode;
};

const fontHref: string = 'https://fonts.googleapis.com/css2?family=Goldman&display=swap';

function Head({ children, title }: Props) {
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
}

export default Head;
