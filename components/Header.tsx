'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/clubs', label: 'Clubs' },
  { href: '/events', label: 'Events' },
  { href: '/resources', label: 'Resources' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md relative z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="https://aiclassof26.vercel.app/assets/favicon-32x32.png"
            alt="PCE Student Council Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-2xl font-bold">PCE Student Council</span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className={`hover:text-yellow-300 transition-colors ${
                  pathname === item.href ? 'text-yellow-300' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden text-white z-50">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <div
          className={`absolute top-full left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <ul className="py-4">
            {navItems.map((item) => (
              <li key={item.href} className="px-4 py-2">
                <Link 
                  href={item.href} 
                  className={`block hover:text-yellow-300 transition-colors ${
                    pathname === item.href ? 'text-yellow-300' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 py-2">
            <Button variant="secondary" className="w-full" onClick={() => setIsOpen(false)}>Login</Button>
          </div>
        </div>

        {/* Desktop login button */}
        <Button variant="secondary" className="hidden md:block">Login</Button>
      </nav>
    </header>
  )
}

