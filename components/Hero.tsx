"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Rocket, Lightbulb, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [activeTech, setActiveTech] = useState(0);
  
  const techIcons = [
    { icon: <Rocket size={20} />, label: "Startups" },
    { icon: <Lightbulb size={20} />, label: "Ideas" },
    { icon: <Code size={20} />, label: "Tech" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % techIcons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [techIcons.length]);

  const quote = "Innovation is the ability to see change as an opportunity - not a threat";

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-primary/5"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: "radial-gradient(#61c2a6 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main content container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Tech badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 relative h-10 flex justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-primary rounded-full shadow-sm border border-primary/10"
              >
                {techIcons[activeTech].icon}
                <span className="font-medium text-sm">{techIcons[activeTech].label}</span>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          
          {/* Logo */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image 
              src="/VB_lg_blk.svg" 
              alt="VIBHAVA" 
              width={300} 
              height={250} 
              className="mx-auto"
              priority
            />
          </motion.div>
          
          {/* Subtitle */}
          <motion.h2
            className="text-2xl sm:text-3xl text-gray-700 mb-6 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             {/* <span className="text-primary">Innovation</span> Summit 2024 */}
          </motion.h2>
          
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto mb-8 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-primary/10"
          >
            <p className="text-gray-700 italic text-lg">&quot;{quote}&quot;</p>
          </motion.div>
          
          {/* Description */}
          <motion.p
            className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Join us at the School of Engineering, CUSAT for a celebration of
            innovation, technology, and entrepreneurial excellence.
          </motion.p>
          
          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="#events">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-all shadow-md hover:shadow-lg"
            >
              <span className="flex items-center">
                Explore Events
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </motion.button>
            </Link>
            
            {/* <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-gray-800 border border-gray-200 px-8 py-3 rounded-lg font-medium hover:border-primary/50 transition-all shadow-sm hover:shadow-md"
            >
              Register Interest
            </motion.button> */}
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
          style={{ right: '5%', top: '20%' }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
          style={{ left: '5%', bottom: '10%' }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-primary/70 text-sm mb-2">Scroll to explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19M12 19L18 13M12 19L6 13" stroke="#61c2a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 