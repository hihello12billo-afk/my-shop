import './globals.css';
import Footer from './components/Footer';
import { Inter } from 'next/font/google';
import { Providers } from './context/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LUXE.STORE',
  description: 'Premium E-Commerce Experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}