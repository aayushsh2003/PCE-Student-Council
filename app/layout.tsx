'use client'

import { useState } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DeveloperModal from '@/components/DeveloperModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Student Council :- Poornima College of Enigneering ",
  description:
    "Poornima College of Engineering Student Council Empowering students and fostering a vibrant campus community. Join us in making a difference!",
  openGraph: {
    title: "Student Council :- Poornima College of Enigneering",
    description:
      "Poornima College of Engineering Student Council Empowering students and fostering a vibrant campus community. Join us in making a difference!",
    images: [
      {
        url: "https://www.poornima.org/img/slider/new/Website-banner%20(1)%20(2).jpg",
        width: 1200,
        height: 630,
        alt: "Poornima College Of Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Council :- Poornima College of Enigneering",
    description:
      "Poornima College of Engineering Student Council Empowering students and fostering a vibrant campus community. Join us in making a difference!",
    images: ["https://www.poornima.org/img/slider/new/Website-banner%20(1)%20(2).jpg"],
  },
}

// export const metadata = {
//   title: 'College Student Council',
//   description: 'Official website of the College Student Council',
// }

const developerInfo = {
  name: 'Aayush Sharma',
  photo: 'https://aayushkimehnat.vercel.app/assets/images/team-1-266x346.jpeg', // Make sure to add this image to your public folder
  role: 'Full Stack Developer',
  bio: 'Aayush Sharma is a passionate full-stack developer with a keen interest in creating user-friendly and efficient web applications. He specializes in React, Next.js, and Node.js, and is always eager to learn new technologies.',
  skills: ['C','C++','Python','Html','Css','JS','React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
  socialLinks: {
    portfolio: 'https://aayush-ki-portfolio.vercel.app/',
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

