// components/Services.jsx
'use client'

import { Sparkles, Clock, Truck, Shield } from 'lucide-react'
import { motion, useInView, cubicBezier } from 'framer-motion'
import { useRef } from 'react'
import Pricing from './Pricing'
import Receipt from './laundry-receipt'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Wash & Fold",
      description: "Professional washing, drying, and folding service. Your clothes returned fresh and neatly organized.",
      price: "From $1.50/lb"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Express Service",
      description: "Need it fast? Get your laundry cleaned and delivered within 24 hours with our express option.",
      price: "From $2.00/lb"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Pickup & Delivery",
      description: "Free pickup and delivery at your doorstep. Schedule at your convenience, we handle the rest.",
      price: "Free with order"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Dry Cleaning",
      description: "Expert care for delicate garments, suits, and formal wear. Professional results guaranteed.",
      price: "From $5.99/item"
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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.25, 0.1, 0.25, 1)
      }
    }
  }

  return (
    <section className="py-20 bg-gray-50" id="services" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, ease: cubicBezier(0.25, 0.1, 0.25, 1) }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quality laundry care tailored to your needs. We make keeping your clothes fresh effortless.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2, type: "spring", stiffness: 200 }}
                className="text-blue-600 mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <p className="text-blue-600 font-semibold">
                {service.price}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: cubicBezier(0.25, 0.1, 0.25, 1) }}
          className="text-center mt-12"
        >
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(37, 99, 235, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
      <Pricing />
      <Receipt />
    </section>
  )
}