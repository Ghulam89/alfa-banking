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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="m-0 p-0" style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
