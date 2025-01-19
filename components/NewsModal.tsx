import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

type NewsModalProps = {
  isOpen: boolean
  onClose: () => void
  news: {
    title: string
    date: string
    fullStory: string
  } | null
}

export default function NewsModal({ isOpen, onClose, news }: NewsModalProps) {
  if (!news) return null

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
                  <h2 className="text-2xl font-bold text-gray-800">{news.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">{news.date}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="prose max-w-none">
                <p>{news.fullStory}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

