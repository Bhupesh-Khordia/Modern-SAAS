'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Users, 
  Shield,
  MessageSquare,
  TrendingUp,
  Palette,
  Globe,
  Clock,
  Settings
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Content Generation',
    description: 'Generate high-quality, engaging content in seconds with our advanced AI algorithms.',
    color: 'bg-primary-100 text-primary-600'
  },
  {
    icon: Target,
    title: 'Smart Audience Targeting',
    description: 'Reach the right audience with AI-powered targeting and segmentation.',
    color: 'bg-secondary-100 text-secondary-600'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Get deep insights into your campaigns with real-time analytics and reporting.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Zap,
    title: 'Automated Campaigns',
    description: 'Set up and run marketing campaigns automatically with intelligent optimization.',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team with real-time collaboration tools.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with SOC 2 compliance and data encryption.',
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: MessageSquare,
    title: 'Multi-Channel Marketing',
    description: 'Manage all your marketing channels from one unified platform.',
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    icon: TrendingUp,
    title: 'Performance Optimization',
    description: 'Continuously optimize your campaigns for maximum ROI and performance.',
    color: 'bg-pink-100 text-pink-600'
  }
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
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
            Powerful Features for{' '}
            <span className="gradient-text">Modern Marketing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, manage, and optimize your marketing campaigns 
            with the power of artificial intelligence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Marketing?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of marketers who are already using AI to scale their campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Free Trial
              </button>
              <button className="btn-secondary">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 