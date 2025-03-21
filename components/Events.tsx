"use client";

import { Calendar, Sparkles, Lock, Clock, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const Events = () => {
  return (
    <section
      id="events"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="inline-block text-sm font-semibold text-primary px-3 py-1 rounded-full bg-primary/10 mb-3"
          >
            COMING SOON
          </motion.span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Events & Schedule
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        {/* Mystery box - Yet to be revealed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-2xl p-10 shadow-lg relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary/30 via-primary to-primary/30" />
          
          <motion.div
            className="w-24 h-24 mx-auto mb-8 relative"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div 
              className="absolute inset-0"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              <Lock className="w-full h-full text-primary/30" />
            </motion.div>
            <motion.div 
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            >
              <Sparkles className="w-full h-full text-primary/70" />
            </motion.div>
          </motion.div>
          
          <h3 className="text-3xl font-bold text-center mb-4">Events Yet To Be Revealed</h3>
          
          <p className="text-gray-600 text-center mb-8 max-w-xl mx-auto">
            We're crafting an exciting lineup of innovative events, competitions, and workshops. 
            Stay tuned as we unveil our program soon!
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-10">
            <AlertCircle className="w-4 h-4 text-primary" />
            <span>Event details will be announced shortly</span>
          </div>
          
          {/* Countdown-like visual */}
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-10">
            {[1, 2, 3, 4].map((item) => (
              <motion.div 
                key={item}
                className="bg-gray-50 rounded-lg py-4 px-2 text-center"
                whileHover={{ y: -5, backgroundColor: "rgba(97, 194, 166, 0.1)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * item, duration: 0.5 }}
              >
                <div className="text-2xl font-bold text-primary">??</div>
                <div className="text-xs text-gray-500 mt-1">
                  {["Days", "Hours", "Minutes", "Seconds"][item - 1]}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Notification sign-up */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 p-6 rounded-xl max-w-md mx-auto"
          >
            <h4 className="text-sm font-semibold text-center mb-4">Be the first to know when we announce our events</h4>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary shadow-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-sm"
              >
                Notify Me
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events; 