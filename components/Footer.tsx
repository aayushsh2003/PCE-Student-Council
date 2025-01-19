import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

type FooterProps = {
  onDeveloperClick: () => void
}

export default function Footer({ onDeveloperClick }: FooterProps) {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Student Council</h2>
            <p className="text-sm md:text-base">Empowering students, fostering community.</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-yellow-300 transition-colors">About Us</Link></li>
              <li><Link href="/clubs" className="hover:text-yellow-300 transition-colors">Clubs</Link></li>
              <li><Link href="/events" className="hover:text-yellow-300 transition-colors">Events</Link></li>
              <li><Link href="/resources" className="hover:text-yellow-300 transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm md:text-base">Email: studentscouncil.pce@poornima.org</p>
            <p className="text-sm md:text-base">Address: ISI-6, RIICO Institutional Area, Sitapura, Jaipur, Rajasthan 302022 </p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="hover:text-yellow-300 transition-colors">
                <Facebook />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-yellow-300 transition-colors">
                <Instagram />
              </Link>
              <Link href="#" aria-label="Twitter" className="hover:text-yellow-300 transition-colors">
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm md:text-base">
          <p>&copy; {new Date().getFullYear()} College Student Council. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Developed and Designed by{' '}
            <button 
              onClick={onDeveloperClick}
              className="text-yellow-300 hover:text-yellow-100 transition-colors cursor-pointer"
            >
              Aayush Sharma
            </button>
          </p>
        </div>
      </div>
    </footer>
  )
}

