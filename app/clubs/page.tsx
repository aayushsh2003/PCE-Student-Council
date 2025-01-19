'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const clubs = [
  { 
    id: "gdsc",
    name: "Google Developer Student Club (GDSC)", 
    description: "A community for students interested in Google developer technologies.",
    category: "Technology",
    logo: "/logos/gdsc.png",
    color: "from-blue-400 to-blue-600"
  },
  { 
    id: "his",
    name: "Helping In Silence (HIS)", 
    description: "A club dedicated to community service and social impact.",
    category: "Community Service",
    logo: "/logos/his.png",
    color: "from-green-400 to-green-600"
  },
  { 
    id: "udaan",
    name: "Udaan", 
    description: "The aeromodelling and drone club of our college.",
    category: "Engineering",
    logo: "/logos/udaan.png",
    color: "from-yellow-400 to-yellow-600"
  },
  { 
    id: "literary",
    name: "Literary Club", 
    description: "For students passionate about literature, writing, and public speaking.",
    category: "Arts",
    logo: "/logos/literary.png",
    color: "from-purple-400 to-purple-600"
  },
  { 
    id: "helping-hands",
    name: "Helping Hands", 
    description: "A volunteer organization focused on community outreach and support.",
    category: "Community Service",
    logo: "/logos/helping-hands.png",
    color: "from-red-400 to-red-600"
  },
  { 
    id: "wise",
    name: "Women in Science and Engineering (WISE)", 
    description: "Empowering and supporting women in STEM fields.",
    category: "Academic",
    logo: "/logos/wise.png",
    color: "from-pink-400 to-pink-600"
  },
]

export default function Clubs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Discover Our Vibrant Clubs
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the diverse range of student-led organizations and find your perfect fit!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club, index) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Link href={`/clubs/${club.id}`}>
                <Card className="h-full flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">
                  <div className={`h-2 bg-gradient-to-r ${club.color}`} />
                  <CardHeader className="flex-shrink-0 pb-0">
                    <CardTitle className="flex justify-between items-center">
                      <span className="text-lg font-semibold truncate">{club.name}</span>
                      <Badge className={`bg-gradient-to-r ${club.color} text-white`}>
                        {club.category}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between pt-4">
                    <p className="text-gray-600 mb-4 flex-grow">{club.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Image 
                          src={club.logo || "/placeholder.svg"}
                          alt={`${club.name} logo`}
                          width={40}
                          height={40}
                          className="rounded-full mr-2"
                        />
                        <span className="text-sm font-medium text-gray-500">Learn More</span>
                      </div>
                      <motion.div
                        className="text-2xl"
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                      >
                        →
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
            &quot;Can&apos;t Find What You&apos;re Looking For?&quot;
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your own club and make your mark on campus!
          </p>
          <Link 
            href="/start-club" 
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            Start a New Club
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

