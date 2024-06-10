import './globals.css';
import { Montserrat } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata = {
  title: 'Blog app',
  description: 'Blog app for NF1HW',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
