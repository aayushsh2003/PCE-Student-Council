'use client'

import { useState } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DeveloperModal from '@/components/DeveloperModal'
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'College Student Council',
    template: '%s | College Student Council',
  },
  description: 'Official website of the College Student Council, empowering students and fostering a vibrant campus community.',
  keywords: ['student council', 'college', 'campus life', 'student organizations', 'events'],
  authors: [{ name: 'College Student Council' }],
  creator: 'College Student Council',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.collegestudentcouncil.com',
    siteName: 'College Student Council',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@collegestudentcouncil',
    creator: '@collegestudentcouncil',
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
};

const developerInfo = {
  name: 'Aayush Sharma',
  photo: 'https://github.com/aayushsh2003/AIClassOf26/blob/main/rbi_aayush.png?raw=true', // Make sure to add this image to your public folder
  role: 'Full Stack Developer',
  bio: 'Aayush Sharma is a passionate full-stack developer with a keen interest in creating user-friendly and efficient web applications. He specializes in React, Next.js, and Node.js, and is always eager to learn new technologies.',
  skills: ['C','C++','Python','Html','Css','JS','React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
  socialLinks: {
    linkedin: 'https://in.linkedin.com/in/aayush-sharma-a44062299',
    github: '#',
    twitter: '#',
    instagram:'#',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDeveloperModalOpen, setIsDeveloperModalOpen] = useState(false)

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer onDeveloperClick={() => setIsDeveloperModalOpen(true)} />
        <DeveloperModal
          isOpen={isDeveloperModalOpen}
          onClose={() => setIsDeveloperModalOpen(false)}
          developer={developerInfo}
        />
      </body>
    </html>
  )
}

