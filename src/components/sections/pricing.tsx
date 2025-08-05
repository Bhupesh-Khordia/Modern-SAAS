'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, X, Star } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for small businesses and startups',
    features: [
      'AI Content Generation (50/month)',
      'Basic Analytics',
      'Email Support',
      '5 Team Members',
      'Basic Templates',
      'Standard Integrations'
    ],
    notIncluded: [
      'Advanced Analytics',
      'Priority Support',
      'Custom Integrations',
      'White-label Solutions'
    ],
    popular: false,
    color: 'border-gray-200'
  },
  {
    name: 'Professional',
    price: 99,
    description: 'Ideal for growing businesses and marketing teams',
    features: [
      'AI Content Generation (500/month)',
      'Advanced Analytics & Reporting',
      'Priority Support',
      'Unlimited Team Members',
      'Custom Templates',
      'Advanced Integrations',
      'A/B Testing',
      'Campaign Automation'
    ],
    notIncluded: [
      'White-label Solutions',
      'Dedicated Account Manager'
    ],
    popular: true,
    color: 'border-primary-500'
  },
  {
    name: 'Enterprise',
    price: 299,
    description: 'For large organizations with advanced needs',
    features: [
      'Unlimited AI Content Generation',
      'Enterprise Analytics & BI',
      '24/7 Dedicated Support',
      'Unlimited Team Members',
      'Custom Templates & Branding',
      'All Integrations',
      'Advanced A/B Testing',
      'Full Campaign Automation',
      'White-label Solutions',
      'Dedicated Account Manager',
      'Custom API Access',
      'SLA Guarantee'
    ],
    notIncluded: [],
    popular: false,
    color: 'border-gray-200'
  }
]

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const getPrice = (basePrice: number) => {
    return billingCycle === 'yearly' ? basePrice * 10 : basePrice
  }

  const getSavings = (basePrice: number) => {
    return billingCycle === 'yearly' ? basePrice * 2 : 0
  }

  return (
    <section id="pricing" className="py-20 bg-gray-50">
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
            Simple, Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
              {billingCycle === 'yearly' && (
                <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Save 20%
                </span>
              )}
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-sm font-medium">
                    <Star className="w-4 h-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <Card className={`h-full ${plan.popular ? 'ring-2 ring-primary-500 shadow-2xl' : ''} ${plan.color}`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">${getPrice(plan.price)}</span>
                      <span className="text-gray-500 ml-2">/{billingCycle === 'yearly' ? 'year' : 'month'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-sm text-green-600 font-medium mt-2">
                        Save ${getSavings(plan.price)} per year
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.notIncluded.length > 0 && (
                      <>
                        <h4 className="font-semibold text-gray-900 mb-4 mt-6">Not included:</h4>
                        {plan.notIncluded.map((feature) => (
                          <div key={feature} className="flex items-center">
                            <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                            <span className="text-gray-500">{feature}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                  
                  <Button 
                    className={`w-full mt-8 ${plan.popular ? 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700' : ''}`}
                    variant={plan.popular ? 'gradient' : 'primary'}
                  >
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600">
            Have questions?{' '}
            <a href="#faq" className="text-primary-600 hover:text-primary-700 font-medium">
              Check our FAQ
            </a>{' '}
            or{' '}
            <a href="#contact" className="text-primary-600 hover:text-primary-700 font-medium">
              contact our sales team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing 