// components/Contact.jsx
'use client'

import { Mail, Instagram, MapPin, Phone, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactDetails = [
    {
      icon: MapPin,
      title: "Address",
      content: "Orchid Road, opposite Applewood Mall, off Oba Akinloye Drive, Eti-Osa, Lekki 112104, Lagos"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+234 812 209 9927"
    },
    {
      icon: Mail,
      title: "Email",
      content: "hello@evertidy.com",
      isLink: true
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 7:00 AM - 8:00 PM\nSat - Sun: 8:00 AM - 6:00 PM"
    }
  ]

  return (
    <section className="py-20 bg-gray-50" id="contact" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon
                return (
                  <motion.div 
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex items-start"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                    >
                      <Icon className="w-6 h-6 text-blue-600" />
                    </motion.div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">{detail.title}</h4>
                      {detail.isLink ? (
                        <a href={`mailto:${detail.content}`} className="text-blue-600 hover:text-blue-700">
                          {detail.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 whitespace-pre-line">{detail.content}</p>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Social Links */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="border-t border-gray-200 pt-8"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:hello@evertidy.com"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6 text-white" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://instagram.com/evertidy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 rounded-lg flex items-center justify-center transition-all group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.tiktok.com/@evertidy.laundry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black hover:bg-gray-800 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label="TikTok"
                > 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z"/>
                  </svg>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/message/QXZRVT3NLXWRP1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label="WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Location
            </h3>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-2xl overflow-hidden shadow-xl h-125"
            >
              <iframe
              // <iframe src=""></iframe>
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7029773560207!2d3.565595074752462!3d6.4321876935589515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7fa8fd8e535%3A0xefb7d87397de649f!2severtidy%20laundry%20services!5e0!3m2!1sen!2sng!4v1770971907962!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="EverTidy Location"
              ></iframe>
            </motion.div>
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-sm text-gray-500 mt-4 text-center"
            >
              Click on the map to get directions
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}