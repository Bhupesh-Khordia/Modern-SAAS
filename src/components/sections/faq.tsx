'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What is ADmyBRAND AI Suite?',
    answer: 'ADmyBRAND AI Suite is a comprehensive AI-powered marketing platform that helps businesses create, optimize, and scale their marketing campaigns. It includes AI content generation, smart audience targeting, advanced analytics, and campaign automation tools.'
  },
  {
    question: 'How does the AI content generation work?',
    answer: 'Our AI content generation uses advanced natural language processing models trained on millions of marketing campaigns. Simply provide a brief description of your target audience and campaign goals, and our AI will generate high-quality, engaging content in seconds.'
  },
  {
    question: 'What types of content can the AI generate?',
    answer: 'Our AI can generate various types of content including social media posts, email campaigns, blog articles, ad copy, landing page content, product descriptions, and more. The content is tailored to your brand voice and target audience.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes! We offer a 14-day free trial for all our plans. You can explore all features and see how ADmyBRAND AI Suite can transform your marketing efforts. No credit card required to start your trial.'
  },
  {
    question: 'What integrations are available?',
    answer: 'We integrate with popular marketing tools including Mailchimp, HubSpot, Salesforce, Google Analytics, Facebook Ads, Google Ads, LinkedIn Ads, and many more. We also offer custom API access for enterprise customers.'
  },
  {
    question: 'How secure is my data?',
    answer: 'Security is our top priority. We use bank-level encryption, SOC 2 compliance, and follow industry best practices for data protection. Your data is never shared with third parties and is stored in secure, encrypted databases.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. You\'ll continue to have access to your account until the end of your current billing period.'
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes! We offer 24/7 customer support via live chat, email, and phone. Enterprise customers also get a dedicated account manager and priority support. Our support team is always ready to help you succeed.'
  },
  {
    question: 'How many team members can use the platform?',
    answer: 'The number of team members depends on your plan. Starter plans include up to 5 team members, Professional plans include unlimited team members, and Enterprise plans include unlimited team members with advanced collaboration features.'
  },
  {
    question: 'What makes ADmyBRAND AI Suite different from other marketing tools?',
    answer: 'ADmyBRAND AI Suite stands out with its advanced AI capabilities, comprehensive feature set, and focus on automation. Unlike traditional marketing tools, our AI learns from your campaigns and continuously optimizes for better results.'
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50">
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
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about ADmyBRAND AI Suite. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you get the most out of ADmyBRAND AI Suite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Contact Support
              </button>
              <button className="btn-secondary">
                Schedule a Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ 