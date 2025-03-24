"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, Users, Clock, MapPin } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        {/* Animated dots pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #61c2a6 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center text-sm font-semibold text-primary px-3 py-1 rounded-full bg-primary/10 mb-3"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            ABOUT THE EVENT
          </motion.span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            VIBHAVA Innovation Summit 2024
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        {/* Event Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
          >
            <Calendar className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Date</h3>
            <p className="text-gray-600">March 27, 2025</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
          >
            <Clock className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Time</h3>
            <p className="text-gray-600">10:00 AM - 6:00 PM</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
          >
            <MapPin className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Venue</h3>
            <p className="text-gray-600">School of Engineering, CUSAT</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
          >
            <Users className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Capacity</h3>
            <p className="text-gray-600">500+ Participants</p>
          </motion.div>
        </div>

        {/* Event Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-gray-600">
              <p>
                VIBHAVA Innovation Summit 2025 is a one-day extravaganza that brings together the brightest minds in technology and entrepreneurship. This flagship event at School of Engineering, CUSAT, serves as a platform for knowledge exchange, networking, and innovation.
              </p>
              <p className="mt-4">
                The summit features an exciting lineup of workshops, panel discussions, and startup stories, designed to inspire and empower the next generation of innovators. Whether you&apos;re a student, professional, or entrepreneur, VIBHAVA offers unique opportunities to learn, connect, and grow.
              </p>
            </div>

            {/* Event Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-gray-600">15+ Expert Speakers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-gray-600">10+ Interactive Workshops</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-gray-600">5 Panel Discussions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-gray-600">20+ Startup Stories</span>
              </div>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about-image.jpg"
                alt="VIBHAVA Innovation Summit"
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/800x1000/61c2a6/ffffff?text=Innovation+Summit";
                }}
              />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-8 -left-8 bg-white rounded-xl p-6 shadow-lg border border-gray-100 max-w-xs"
            >
              <div className="text-lg font-semibold text-gray-900 mb-2">
                Early Bird Registration
              </div>
              <p className="text-gray-600">
                Limited seats available! Register now to secure your spot
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 