import type { Metadata } from 'next';
import './globals.css';
import { RootLayoutClient } from './layout.client';

export const metadata: Metadata = {
  title: 'tauri-sample',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <RootLayoutClient />
        { children }
      </body>
    </html>
  )
}
