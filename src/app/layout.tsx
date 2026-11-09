import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kingsley Pictures',
  description: 'Streaming de cinema e séries em foco',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
