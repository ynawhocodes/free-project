import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local';

const myeongjo = localFont({
  src: '../../public/fonts/NanumMyeongjo.ttf',
  display: 'swap',
  variable: '--myeongjo',
});

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: '영원',
  description: '영원 House',
  generator: '영원',
  applicationName: '영원 House',
  referrer: 'origin-when-cross-origin',
  keywords: ['FREE', '영원', 'Home'],
  authors: [
    { name: '영원' },
    { name: 'Developer', url: 'https://free.yangnawon.com' },
  ],
  // colorScheme: 'dark',
  creator: '영원',
  publisher: '영원',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://free.yangnawon.com'),
  openGraph: {
    title: '영원',
    description: '영원 also means ✧FREE✧',
    url: 'https://free.yangnawon.com',
    siteName: '영원 EVENT',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
      },
      // {
      //   url: 'https://nextjs.org/og-alt.png',
      //   width: 1800,
      //   height: 1600,
      //   alt: 'My custom alt',
      // },
    ],
    locale: 'ko_KO',
    type: 'website',
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/icon.png',
    apple: '/icon.png',
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} ${myeongjo.variable}`}>{children}</body>
    </html>
  )
}
