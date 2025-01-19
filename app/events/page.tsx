'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const events = [
  { id: 1, name: "Student Council Meeting", date: new Date(2025, 4, 15), location: "Room 101", time: "3:00 PM", category: "Meeting", color: "from-blue-400 to-indigo-400" },
  { id: 2, name: "Spring Festival", date: new Date(2025, 4, 20), location: "Campus Quad", time: "12:00 PM", category: "Festival", color: "from-green-400 to-teal-400" },
  { id: 3, name: "Career Fair", date: new Date(2025, 4, 25), location: "Student Center", time: "10:00 AM", category: "Career", color: "from-purple-400 to-pink-400" },
]

export default function Events() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const selectedEvents = events.filter(
    (event) => event.date.toDateString() === selectedDate?.toDateString()
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Events Calendar
        </motion.h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="bg-white shadow-xl">
              <CardContent className="p-4">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Events on {selectedDate?.toDateString()}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedEvents.length > 0 ? (
                  <div className="space-y-4">
                    {selectedEvents.map((event) => (
                      <Card key={event.id} className="overflow-hidden transform transition-all duration-300 hover:scale-105">
                        <div className={`h-2 bg-gradient-to-r ${event.color}`} />
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-semibold">{event.name}</h3>
                            <Badge className={`bg-gradient-to-r ${event.color}`}>{event.category}</Badge>
                          </div>
                          <p>Time: {event.time}</p>
                          <p>Location: {event.location}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500 italic">No events scheduled for this date.</p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

