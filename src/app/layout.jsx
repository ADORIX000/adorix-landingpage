import './globals.css';
import MainLayout from '../components/MainLayout';

export const metadata = {
  title: 'ADORIX - Enterprise Solutions',
  description: 'Future-Ready IT Solutions for Modern Enterprises',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
