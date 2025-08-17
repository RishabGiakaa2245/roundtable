import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Roundtable - Giakaa Capital',
  description: 'A boilerplate project with Next.js 15 and Tailwind CSS 3.4.17',
  icons: {
    icon: [
      { url: '/images/favicon.ico', type: 'image/x-icon' }
    ],
  },
};

import ClientLayout from './client-layout';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
          </ClientLayout>
      </body>
    </html>
  );
}
