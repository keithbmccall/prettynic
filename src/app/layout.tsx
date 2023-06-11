import { queryAll } from '@data';
import { DataProvider } from '@providers';
import { Inter } from 'next/font/google';
import './styles/index.css';
import './styles/tachyons.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { posts, pages } = await queryAll();

  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider posts={posts} pages={pages}>
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
