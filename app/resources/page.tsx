'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Download, ExternalLink, FileText, Book, Newspaper, Lightbulb } from 'lucide-react'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Access a wealth of student resources, including forms, guidelines, and campus services information provided by the College Student Council.',
  openGraph: {
    title: 'Resources | College Student Council',
    description: 'Access a wealth of student resources, including forms, guidelines, and campus services information provided by the College Student Council.',
    images: [
      {
        url: 'https://www.collegestudentcouncil.com/images/resources-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Student Resources',
      },
    ],
  },
};

const resources = [
  { id: 1, name: "Event Planning Form", url: "#", type: "PDF", icon: FileText, color: "from-red-400 to-red-600" },
  { id: 2, name: "Funding Request Form", url: "#", type: "PDF", icon: FileText, color: "from-blue-400 to-blue-600" },
  { id: 3, name: "Club Registration Form", url: "#", type: "PDF", icon: FileText, color: "from-green-400 to-green-600" },
]

const guidelines = [
  { id: 1, name: "Starting a New Club", url: "#", type: "PDF", icon: Book, color: "from-purple-400 to-purple-600" },
  { id: 2, name: "Funding Policies", url: "#", type: "PDF", icon: Book, color: "from-yellow-400 to-yellow-600" },
  { id: 3, name: "Event Planning Guidelines", url: "#", type: "PDF", icon: Book, color: "from-pink-400 to-pink-600" },
]

const campusResources = [
  { id: 1, name: "Counseling Services", url: "#", type: "External", icon: Lightbulb, color: "from-teal-400 to-teal-600" },
  { id: 2, name: "Academic Support", url: "#", type: "External", icon: Lightbulb, color: "from-indigo-400 to-indigo-600" },
  { id: 3, name: "Student Organizations", url: "#", type: "External", icon: Lightbulb, color: "from-orange-400 to-orange-600" },
]

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Student Resources
          </h1>
          <p className="text-xl text-gray-600">
            Access all the tools and information you need for success!
          </p>
        </motion.div>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">Forms and Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Card className="h-full flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className={`h-2 bg-gradient-to-r ${resource.color}`} />
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{resource.name}</span>
                      <Badge className={`bg-gradient-to-r ${resource.color} text-white`}>{resource.type}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex items-end">
                    <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                      <Link href={resource.url}>
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guidelines.map((guideline, index) => (
              <motion.div
                key={guideline.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Card className="h-full flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className={`h-2 bg-gradient-to-r ${guideline.color}`} />
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{guideline.name}</span>
                      <Badge className={`bg-gradient-to-r ${guideline.color} text-white`}>{guideline.type}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex items-end">
                    <Button asChild className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
                      <Link href={guideline.url}>
                        <FileText className="mr-2 h-4 w-4" /> View
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Campus Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Card className="h-full flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className={`h-2 bg-gradient-to-r ${resource.color}`} />
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{resource.name}</span>
                      <Badge className={`bg-gradient-to-r ${resource.color} text-white`}>{resource.type}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex items-end">
                    <Button asChild className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                      <Link href={resource.url}>
                        <ExternalLink className="mr-2 h-4 w-4" /> Visit Website
                      </Link>
                    </Button>
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

