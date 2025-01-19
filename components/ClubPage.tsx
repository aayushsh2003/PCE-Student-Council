'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Calendar, Download, Users, Trophy, Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type ClubPageProps = {
  club: {
    id: string
    name: string
    description: string
    category: string
    logo: string
    history: string
    howToJoin: string
    benefits: string[]
    leadership: Array<{ name: string; role: string; department: string }>
    contactPerson: { name: string; email: string }
    upcomingEvents: Array<{ name: string; date: string; time: string; location: string }>
    pastEvents: Array<{ name: string; date: string; description: string }>
    achievements: string[]
    resources: Array<{ name: string; url: string }>
    gallery: Array<{ url: string; alt: string }>
    socialMedia: {
      facebook?: string
      instagram?: string
      twitter?: string
    }
  }
}

const gradientClasses = {
  Technology: "from-blue-400 to-blue-600",
  "Community Service": "from-green-400 to-green-600",
  Engineering: "from-yellow-400 to-yellow-600",
  Arts: "from-purple-400 to-purple-600",
  Academic: "from-pink-400 to-pink-600",
}

export default function ClubPage({ club }: ClubPageProps) {
  const gradientClass = gradientClasses[club.category as keyof typeof gradientClasses] || "from-gray-400 to-gray-600"

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-8 sm:py-16">
      <div className="container mx-auto px-2 sm:px-4 max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden"
        >
          <div className={`h-4 w-full bg-gradient-to-r ${gradientClass}`} />
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div className="flex items-center mb-4 md:mb-0">
                <Image src={club.logo || "/placeholder.svg"} alt={`${club.name} logo`} width={80} height={80} className="rounded-full mr-4" />
                <div>
                  <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">{club.name}</h1>
                  <Badge className={`bg-gradient-to-r ${gradientClass} text-white mt-2`}>{club.category}</Badge>
                </div>
              </div>
              <div className="flex space-x-4">
                {club.socialMedia.facebook && (
                  <Link href={club.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                    <Facebook className="text-blue-600 hover:text-blue-800 transition-colors" />
                  </Link>
                )}
                {club.socialMedia.instagram && (
                  <Link href={club.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram className="text-pink-600 hover:text-pink-800 transition-colors" />
                  </Link>
                )}
                {club.socialMedia.twitter && (
                  <Link href={club.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="text-blue-400 hover:text-blue-600 transition-colors" />
                  </Link>
                )}
              </div>
            </div>

            <Tabs defaultValue="about" className="w-full overflow-hidden">
              <TabsList className="grid grid-cols-3 sm:flex sm:flex-nowrap justify-start items-center gap-2 mb-8 p-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-inner">
                {["about", "events", "achievements", "gallery", "join"].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="w-full sm:w-auto text-xs sm:text-sm px-2 sm:px-4 py-2 rounded-full transition-all duration-200 ease-in-out capitalize font-medium
                      data-[state=active]:bg-white data-[state=active]:text-purple-600 data-[state=active]:shadow-md
                      hover:bg-white/50 hover:text-purple-500"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent value="about">
                <Card>
                  <CardHeader>
                    <CardTitle>About Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{club.description}</p>
                    <h3 className="text-xl font-semibold mb-2">History</h3>
                    <p className="mb-4">{club.history}</p>
                    <h3 className="text-xl font-semibold mb-2">Leadership</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {club.leadership.map((leader, index) => (
                        <Card key={index} className="bg-gradient-to-br from-white to-gray-100">
                          <CardContent className="p-4">
                            <h4 className="font-semibold">{leader.name}</h4>
                            <p className="text-sm text-gray-600">{leader.role}</p>
                            <p className="text-sm text-gray-500">{leader.department}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="events">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="mr-2" />
                        Upcoming Events
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {club.upcomingEvents.map((event, index) => (
                        <div key={index} className="mb-4 last:mb-0">
                          <h3 className="text-lg font-semibold">{event.name}</h3>
                          <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
                          <p className="text-sm text-gray-500">Location: {event.location}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Users className="mr-2" />
                        Past Events
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {club.pastEvents.map((event, index) => (
                        <div key={index} className="mb-4 last:mb-0">
                          <h3 className="text-lg font-semibold">{event.name}</h3>
                          <p className="text-sm text-gray-600">{event.date}</p>
                          <p className="text-sm text-gray-500">{event.description}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="achievements">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Trophy className="mr-2" />
                      Our Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {club.achievements.map((achievement, index) => (
                        <li key={index} className="text-gray-700">{achievement}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="gallery">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Camera className="mr-2" />
                      Photo Gallery
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {club.gallery.map((image, index) => (
                        <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                          <Image src={image.url || "/placeholder.svg"} alt={image.alt} layout="fill" objectFit="cover" className="transition-transform duration-300 transform hover:scale-110" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="join">
                <Card>
                  <CardHeader>
                    <CardTitle>Join {club.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-semibold mb-2">How to Join</h3>
                    <p className="mb-4">{club.howToJoin}</p>
                    <h3 className="text-xl font-semibold mb-2">Membership Benefits</h3>
                    <ul className="list-disc list-inside mb-4">
                      {club.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                    <Button className={`bg-gradient-to-r ${gradientClass} text-white hover:opacity-90`}>Apply Now</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {club.resources.map((resource, index) => (
                  <Button key={index} asChild variant="outline" className="w-full">
                    <Link href={resource.url}>
                      <Download className="mr-2 h-4 w-4" /> {resource.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Contact Us</h3>
              <Card>
                <CardContent className="p-4">
                  <p className="font-semibold">{club.contactPerson.name}</p>
                  <p className="text-gray-600">{club.contactPerson.email}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

