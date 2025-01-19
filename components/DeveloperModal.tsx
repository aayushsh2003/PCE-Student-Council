import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

type DeveloperModalProps = {
  isOpen: boolean
  onClose: () => void
  developer: {
    name: string
    photo: string
    role: string
    bio: string
    skills: string[]
    socialLinks: {
      linkedin?: string
      github?: string
      twitter?: string
    }
  } | null
}

export default function DeveloperModal({ isOpen, onClose, developer }: DeveloperModalProps) {
  if (!developer) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <Image
                    src={developer.photo || "/placeholder.svg"}
                    alt={developer.name}
                    width={80}
                    height={80}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{developer.name}</h2>
                    <p className="text-sm text-gray-500 mt-1">{developer.role}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="prose max-w-none mb-6">
                <p>{developer.bio}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {developer.skills.map((skill, index) => (
                    <span key={index} className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Connect</h3>
                <div className="flex space-x-4">
                  {developer.socialLinks.linkedin && (
                    <a href={developer.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      LinkedIn
                    </a>
                  )}
                  {developer.socialLinks.github && (
                    <a href={developer.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                      GitHub
                    </a>
                  )}
                  {developer.socialLinks.twitter && (
                    <a href={developer.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                      Twitter
                    </a>
                  )}
                  {developer.socialLinks.twitter && (
                    <a href={developer.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

