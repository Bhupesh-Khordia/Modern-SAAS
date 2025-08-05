'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechFlow Inc.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    content: 'ADmyBRAND AI Suite has completely transformed our marketing strategy. The AI content generation saves us hours every week, and the targeting capabilities have increased our conversion rates by 300%.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupXYZ',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'As a startup, we needed a solution that could scale with us. This platform not only meets our current needs but has features we\'ll use as we grow. The ROI has been incredible.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Digital Marketing Manager',
    company: 'Global Retail Co.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'The analytics and reporting features are game-changing. We can now track every campaign in real-time and make data-driven decisions. Our team productivity has increased by 40%.',
    rating: 5
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Founder',
    company: 'Innovation Labs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'The AI-powered content generation is incredibly accurate and saves us so much time. The platform is intuitive and the support team is always helpful. Highly recommended!',
    rating: 5
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'VP of Marketing',
    company: 'Enterprise Solutions',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    content: 'We\'ve tried many marketing platforms, but none compare to the AI capabilities and ease of use. The automation features alone have saved us countless hours.',
    rating: 5
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Loved by{' '}
            <span className="gradient-text">10,000+</span>{' '}
            Marketers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers have to say about their experience with ADmyBRAND AI Suite.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="absolute w-full"
            >
              <Card className="glass-card p-8 md:p-12">
                <CardContent className="p-0">
                  <div className="text-center">
                    {/* Quote Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-8">
                      <Quote className="w-8 h-8 text-primary-600" />
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-gray-900">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-gray-600">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">500%</div>
            <div className="text-gray-600">Average ROI Increase</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">10K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 