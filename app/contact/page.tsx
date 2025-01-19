'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', { name, email, message })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 shadow-xl h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-700">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Email: studentscouncil.pce@poornima.org</p>
                
                <p className="mb-4">ISI-6, RIICO Institutional Area, Sitapura, Jaipur, Rajasthan 302022</p>
                <div className="flex space-x-4">
                  <a href="#" aria-label="Facebook" className="text-purple-600 hover:text-pink-600 transition-colors duration-300">
                    <Facebook size={24} />
                  </a>
                  <a href="https://www.instagram.com/aarohanpoornima/" aria-label="Instagram" className="text-purple-600 hover:text-pink-600 transition-colors duration-300">
                    <Instagram size={24} />
                  </a>
                  <a href="#" aria-label="Twitter" className="text-purple-600 hover:text-pink-600 transition-colors duration-300">
                    <Twitter size={24} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card className="bg-gradient-to-r from-pink-50 to-red-50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pink-700">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

