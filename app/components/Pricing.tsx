// components/Pricing.jsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { easeOut } from 'framer-motion'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const pricingPlans = [
    {
      name: 'Wash & Fold',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800',
      description: 'Perfect for everyday laundry needs',
      features: [
        'Professional washing & drying',
        'Neatly folded & packaged',
        'Eco-friendly detergents',
        '48-hour turnaround'
      ]
    },
    {
      name: 'Dry Cleaning',
      image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800',
      description: 'Premium care for delicate garments',
      features: [
        'Expert stain removal',
        'Pressed & ready to wear',
        'Garment inspection',
        'Special fabric care'
      ],
      featured: true
    },
    {
      name: 'Wash & Iron',
      image: 'https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=800',
      description: 'Crisp, wrinkle-free clothes ready to wear',
      features: [
        'Professional washing',
        'Expert ironing & pressing',
        'Starch options available',
        'Hung or folded delivery'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  }

  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Easy, Transparent, And Reliable
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No surprises. Pick your service, and we make sure your laundry is ready when you need it.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                plan.featured ? 'ring-4 ring-blue-600' : ''
              }`}
            >
              {plan.featured && (
                <motion.div 
                  initial={{ x: 100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg z-10"
                >
                  Most Popular
                </motion.div>
              )}

              {/* Image */}
              <motion.div 
                initial={{ scale: 1.2, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative h-48 w-full"
              >
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <motion.h3 
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="absolute bottom-4 left-6 text-2xl font-bold text-white"
                >
                  {plan.name}
                </motion.h3>
              </motion.div>

              {/* Content */}
              <div className="p-8">
                <p className="text-black text-xl font-semi-bold mb-6">{plan.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features?.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.2 + idx * 0.1 }}
                      className="flex items-start"
                    >
                      <svg
                        className="w-5 h-5 text-blue-600 mr-3 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.featured
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Choose Plan
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            Need a custom solution? We offer flexible plans for businesses and bulk orders.
          </p>
          <motion.a
            href="https://wa.me/message/QXZRVT3NLXWRP1" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-600 hover:text-blue-700 font-semibold underline"
          >
            Contact us for custom pricing
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}