'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Involved',
  description: 'Discover ways to get involved with the College Student Council. Join committees, volunteer for events, and make a difference on campus.',
  openGraph: {
    title: 'Get Involved | College Student Council',
    description: 'Discover ways to get involved with the College Student Council. Join committees, volunteer for events, and make a difference on campus.',
    images: [
      {
        url: 'https://www.collegestudentcouncil.com/images/get-involved-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Get Involved with College Student Council',
      },
    ],
  },
};

export default function GetInvolved() {
  const [feedback, setFeedback] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Feedback submitted:', feedback)
    setFeedback('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-teal-100 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get Involved
        </motion.h1>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500">Membership Information</h2>
          <Card className="bg-gradient-to-r from-green-50 to-teal-50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-700">Join the Student Council</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Interested in making a difference on campus? Join the Student Council!</p>
              <p className="mb-4">To become a member:</p>
              <ol className="list-decimal list-inside mb-4">
                <li>Attend our next general meeting</li>
                <li>Fill out a membership application</li>
                <li>Interview with current council members</li>
              </ol>
              <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 transition-all duration-300">Apply Now</Button>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Volunteer Opportunities</h2>
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-700">Upcoming Volunteer Events</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside mb-4">
                <li>Campus Clean-up Day - May 15</li>
                <li>Freshman Orientation - August 20-22</li>
                <li>Food Drive - September 10</li>
              </ul>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300">Sign Up to Volunteer</Button>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">Feedback Form</h2>
          <Card className="bg-gradient-to-r from-yellow-50 to-red-50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-700">Share Your Thoughts</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Feedback
                  </label>
                  <Textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Share your suggestions or concerns..."
                    rows={4}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <Button type="submit" className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 transition-all duration-300">Submit Feedback</Button>
              </form>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}

