import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Кейтеринг Демидов — концепция редизайна',
  description: 'Неофициальная концепция современного сайта Кейтеринг Демидов для портфолио.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
