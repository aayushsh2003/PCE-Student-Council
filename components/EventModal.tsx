import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

type EventModalProps = {
  isOpen: boolean
  onClose: () => void
  event: {
    title: string
    date: string
    time: string
    location: string
    description: string
    schedule: Array<{ time: string; activity: string }>
  } | null
}

export default function EventModal({ isOpen, onClose, event }: EventModalProps) {
  if (!event) return null

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
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{event.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">{event.date} | {event.time}</p>
                  <p className="text-sm text-gray-500">{event.location}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="prose max-w-none mb-6">
                <p>{event.description}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Event Schedule</h3>
                <ul className="space-y-2">
                  {event.schedule.map((item, index) => (
                    <li key={index} className="flex">
                      <span className="font-medium w-24">{item.time}</span>
                      <span>{item.activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

