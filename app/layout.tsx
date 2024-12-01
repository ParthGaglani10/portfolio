import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from './components/Navigation';
import { BlogProvider } from './context/BlogContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Parth Gaglani - Futurist Software Engineer',
  description: 'Personal portfolio of a futurist software engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <Navigation />
        <BlogProvider>
          {children}
        </BlogProvider>
      </body>
    </html>
  );
}
