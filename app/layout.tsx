import type { Metadata } from 'next';
import { Poppins, Bebas_Neue } from 'next/font/google';
import './globals.css';
import { FitnessAssistant } from '@/components/FitnessAssistant';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
});

export const metadata: Metadata = {
  title: 'FitZone - Premium Fitness & Wellness Center',
  description: 'Transform your body and mind at FitZone. Premium fitness equipment, expert trainers, diverse classes, and comprehensive wellness programs. Join 15,000+ members achieving their fitness goals.',
  keywords: 'fitness, gym, personal training, group classes, wellness, nutrition, strength training, cardio, yoga, HIIT',
  authors: [{ name: 'FitZone Team' }],
  creator: 'FitZone',
  publisher: 'FitZone',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fitzone.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FitZone - Premium Fitness & Wellness Center',
    description: 'Transform your body and mind at FitZone. Join 15,000+ members achieving their fitness goals with expert guidance.',
    url: 'https://fitzone.com',
    siteName: 'FitZone',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FitZone Fitness Center',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FitZone - Premium Fitness & Wellness Center',
    description: 'Transform your body and mind at FitZone. Join 15,000+ members achieving their fitness goals.',
    images: ['/og-image.jpg'],
    creator: '@fitzone',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-code-here',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${bebasNeue.variable}`}>
      <body className="font-poppins bg-dark-950 text-white antialiased">
        {children}
        <FitnessAssistant />
      </body>
    </html>
  );
} 