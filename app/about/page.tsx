'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">Our Mission</h2>
          <Card className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
            <CardContent className="text-lg italic text-center p-6">
            &quot;To represent and advocate for the student body, fostering a vibrant campus community and enhancing the college experience for all students.&quot;
            </CardContent>
          </Card>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">Our History</h2>
          <Card className="bg-gradient-to-r from-orange-100 to-red-100">
            <CardContent className="p-6">
              <p className="text-lg mb-4">Founded in 1950, the Student Council has been at the forefront of student advocacy and campus life for over seven decades. Throughout our history, we have:</p>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li>Implemented numerous initiatives to improve student life</li>
                <li>Organized countless events and activities</li>
                <li>Served as a bridge between students and administration</li>
                <li>Championed causes important to the student body</li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Jane Doe", role: "President", image: "/placeholder.svg?height=150&width=150", color: "from-purple-400 to-pink-400" },
              { name: "John Smith", role: "Vice President", image: "/placeholder.svg?height=150&width=150", color: "from-blue-400 to-teal-400" },
              { name: "Emily Johnson", role: "Treasurer", image: "/placeholder.svg?height=150&width=150", color: "from-green-400 to-yellow-400" },
              { name: "Michael Brown", role: "Secretary", image: "/placeholder.svg?height=150&width=150", color: "from-red-400 to-orange-400" },
              { name: "Sarah Davis", role: "Events Coordinator", image: "/placeholder.svg?height=150&width=150", color: "from-indigo-400 to-purple-400" },
              { name: "David Wilson", role: "Communications Director", image: "/placeholder.svg?height=150&width=150", color: "from-pink-400 to-red-400" },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <Card className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader className="p-0">
                    <div className="relative h-48">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} layout="fill" style={{ objectFit: 'cover' }} className="transition-transform duration-300 transform hover:scale-110" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-60`}></div>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center p-4">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <Badge className={`bg-gradient-to-r ${member.color}`}>{member.role}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

