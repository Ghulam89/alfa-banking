import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Alfa Banking - Secure Transfers',
  description: 'Fast and secure money transfers with Alfa Banking',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxanium:wght@200..800&family=Roboto:ital,wght@0,100..900;1,100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/lufga" rel="stylesheet" />
      </head>
      <body className="m-0 p-0 font-sans">
        {children}
      </body>
    </html>
  );
}
