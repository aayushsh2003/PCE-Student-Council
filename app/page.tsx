'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarDays, Users, BookOpen, Bell } from 'lucide-react'
import NewsModal from '@/components/NewsModal'
import EventModal from '@/components/EventModal'

const newsItems = [
  {
    id: 1,
    title: "New Student Center Opening Soon",
    date: "June 15, 2023",
    excerpt: "The long-awaited Student Center will be opening its doors next month, providing a hub for student activities and relaxation.",
    fullStory: "We are thrilled to announce that the new Student Center will be officially opening on July 15, 2023. This state-of-the-art facility is the result of years of planning and construction, designed with input from students, faculty, and staff to create a space that truly meets the needs of our campus community. The center will feature study lounges, a modern cafeteria, recreational areas, and dedicated spaces for student organizations. We believe this new addition to our campus will greatly enhance student life and provide a central location for academic and social activities. Join us for the grand opening ceremony and be among the first to explore this exciting new space!",
    color: "bg-yellow-500"
  },
  {
    id: 2,
    title: "Student Council Elections Approaching",
    date: "June 20, 2023",
    excerpt: "Prepare to cast your vote! Student Council elections will be held in two weeks. Learn about the candidates and their platforms.",
    fullStory: "The upcoming Student Council elections, scheduled for July 5-7, 2023, promise to be an exciting event in our campus calendar. This year, we have an impressive slate of candidates running for various positions, each bringing unique ideas and perspectives to the table. Candidates will be presenting their platforms at a series of town hall meetings over the next two weeks, giving you the opportunity to ask questions and make informed decisions. Remember, your vote is your voice in shaping the future of our campus community. We encourage all students to participate in this important democratic process. Voting will be conducted online through the student portal, making it easy and convenient for everyone to cast their ballot. Stay tuned for more information about the candidates and their campaigns!",
    color: "bg-blue-500"
  },
]

const events = [
  {
    id: 1,
    title: "Spring Festival",
    date: "May 15, 2023",
    time: "11:00 AM - 8:00 PM",
    location: "University Main Quad",
    image: "/placeholder.svg?height=200&width=300",
    color: "bg-green-500",
    description: "Join us for a day of music, food, and fun at our annual Spring Festival! This year's event promises to be bigger and better than ever, featuring live performances from student bands, a variety of food trucks, carnival games, and art exhibitions. Don't miss the grand finale fireworks display at 8:00 PM!",
    schedule: [
      { time: "11:00 AM", activity: "Festival Opens" },
      { time: "12:00 PM", activity: "Student Band Performances Begin" },
      { time: "3:00 PM", activity: "Art Exhibition Opening" },
      { time: "5:00 PM", activity: "Main Stage Headliner" },
      { time: "8:00 PM", activity: "Fireworks Display" },
    ]
  },
  {
    id: 2,
    title: "Career Fair",
    date: "May 20, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Student Center Ballroom",
    image: "/placeholder.svg?height=200&width=300",
    color: "bg-blue-500",
    description: "Explore exciting career opportunities at our annual Career Fair! Meet representatives from top companies across various industries, attend informative workshops on resume building and interview skills, and network with potential employers. This event is open to all students and recent graduates.",
    schedule: [
      { time: "10:00 AM", activity: "Doors Open" },
      { time: "11:00 AM", activity: "Resume Workshop" },
      { time: "1:00 PM", activity: "Industry Panel Discussion" },
      { time: "2:30 PM", activity: "Networking Session" },
      { time: "4:00 PM", activity: "Event Closes" },
    ]
  },
  {
    id: 3,
    title: "Club Showcase",
    date: "May 25, 2023",
    time: "2:00 PM - 6:00 PM",
    location: "Campus Center Plaza",
    image: "/placeholder.svg?height=200&width=300",
    color: "bg-pink-500",
    description: "Discover the diverse range of student clubs and organizations at our Club Showcase! This is your chance to explore new interests, meet like-minded peers, and get involved in campus life. Each club will have a booth showcasing their activities and achievements, with opportunities to sign up and join on the spot.",
    schedule: [
      { time: "2:00 PM", activity: "Showcase Opens" },
      { time: "3:00 PM", activity: "Club Performances Begin" },
      { time: "4:30 PM", activity: "President's Address" },
      { time: "5:00 PM", activity: "Club Awards Ceremony" },
      { time: "6:00 PM", activity: "Event Closes" },
    ]
  },
]

export default function Home() {
  const [selectedNews, setSelectedNews] = useState<(typeof newsItems)[0] | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <div className="relative h-[500px] md:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="https://www.poornima.org/img/slider/new/Website-banner%20(1)%20(2).jpg"
            alt="Campus life"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 "></div>
          <motion.div 
            className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl mb-4 shadow-text">Welcome to the </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 shadow-text">Poornima College of Engineering</h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 shadow-text">Student Council</h1>
            <p className="text-lg md:text-2xl mb-8 max-w-2xl shadow-text">Empowering students and fostering a vibrant campus community. Join us in making a difference!</p>
            <Button asChild size="lg" className="text-lg bg-white text-purple-600 hover:bg-purple-100">
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-purple-600">What We Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: CalendarDays, title: "Organize Events", description: "From festivals to workshops, we bring the campus to life.", color: "bg-pink-500" },
            { icon: Users, title: "Represent Students", description: "We advocate for student interests and concerns.", color: "bg-purple-500" },
            { icon: BookOpen, title: "Support Clubs", description: "We help student organizations thrive and grow.", color: "bg-blue-500" },
            { icon: Bell, title: "Share Updates", description: "Stay informed about important campus news and opportunities.", color: "bg-green-500" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className={`mx-auto ${item.color} text-white rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4`}>
                    <item.icon size={32} />
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-semibold text-gray-800">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-purple-600">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="relative h-48">
                  <Image src={event.image || "https://placehold.co/600x400/png"} alt={event.title} layout="fill" objectFit="cover" />
                  <div className={`absolute inset-0 ${event.color} opacity-50`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-xl md:text-2xl font-bold text-white shadow-text">{event.title}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-gray-600 mb-2">{event.date}</p>
                  <Button variant="outline" className="w-full" onClick={() => setSelectedEvent(event)}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-purple-600">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((news) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + news.id * 0.1, duration: 0.5 }}
            >
              <Card className="hover:shadow-lg transition-shadow h-full overflow-hidden">
                <div className={`${news.color} h-2`}></div>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-semibold text-gray-800">{news.title}</CardTitle>
                  <p className="text-sm text-gray-500">{news.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <Button variant="outline" onClick={() => setSelectedNews(news)}>
                    Read Full Story
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <CardContent className="flex flex-col md:flex-row items-center justify-between p-8">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">Ready to Make a Difference?</h2>
              <p className="text-lg">Join the Student Council and help shape your campus experience!</p>
            </div>
            <Button asChild size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-purple-100">
              <Link href="/get-involved">Join Now</Link>
            </Button>
          </CardContent>
        </Card>
      </motion.section>

      <NewsModal
        isOpen={!!selectedNews}
        onClose={() => setSelectedNews(null)}
        news={selectedNews}
      />

      <EventModal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        event={selectedEvent}
      />
    </div>
  )
}

