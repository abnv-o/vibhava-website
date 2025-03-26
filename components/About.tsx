"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Clock, MapPin } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="space-y-16">
          {/* Header and Description */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-base font-semibold text-primary uppercase tracking-wide mb-3">
              About The Event
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-8">
              VIBHAVA Innovation Summit 2024
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              VIBHAVA Innovation Summit 2025 is a one-day extravaganza that brings together the brightest minds in technology and entrepreneurship. This flagship event at School of Engineering, CUSAT, serves as a platform for knowledge exchange, networking, and innovation.
            </p>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <Calendar className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-gray-900">Date</h4>
              <p className="text-gray-600">March 27, 2025</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <Clock className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-gray-900">Time</h4>
              <p className="text-gray-600">10:00 AM - 6:00 PM</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-gray-900">Venue</h4>
              <p className="text-gray-600">School of Engineering, CUSAT</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <Users className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-gray-900">Capacity</h4>
              <p className="text-gray-600">500+ Participants</p>
            </motion.div>
          </div>

          {/* Event Features */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                The summit features an exciting lineup of workshops, panel discussions, and startup stories, designed to inspire and empower the next generation of innovators. Whether you&apos;re a student, professional, or entrepreneur, VIBHAVA offers unique opportunities to learn, connect, and grow.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">13+</div>
                  <div className="text-sm text-gray-600">Expert Speakers</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-gray-600">Interactive Workshops</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">2</div>
                  <div className="text-sm text-gray-600">Panel Discussions</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-gray-600">Startup Stories</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 