import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'sonner';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gautam Thampy | Software Engineer',
  description:
    'Software engineer with 3+ years of experience building scalable microservices and AI solutions. Open to internship and full-time opportunities.',
  keywords: ['Software Engineer', 'Golang', 'Backend', 'AI', 'ML', 'DevOps', 'Next.js', 'React'],
  authors: [{ name: 'Gautam Thampy' }],
  openGraph: {
    title: 'Gautam Thampy | Software Engineer',
    description: 'Software engineer with 3+ years of experience in backend, DevOps, and AI.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="bg-[#0a0a0a] text-[#fafaf9] font-sans antialiased">
        {children}
        <Toaster
          theme="dark"
          toastOptions={{
            style: {
              background: '#141414',
              border: '1px solid #262626',
              color: '#fafaf9',
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
