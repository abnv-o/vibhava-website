"use client";

import { motion } from "framer-motion";
import { Globe, Instagram, Mail, Linkedin, Phone } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Globe className="w-5 h-5" />,
      label: "Vibhava.cusat.co.in",
      href: "https://vibhava.cusat.co.in",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "www.instagram.com/vibhava.cusat",
      href: "https://www.instagram.com/vibhava.cusat",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "vibhava@cusat.ac.in",
      href: "mailto:vibhava@cusat.ac.in",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "linkedin.com/company/vibhavacusat/",
      href: "https://linkedin.com/company/vibhavacusat/",
    },
  ];

  const contactPersons = [
    {
      name: "Romal Josbin",
      role: "Convener",
      phone: "97781 18693",
      phoneLink: "tel:+919778118693",
    },
    {
      name: "Drisya P",
      role: "Head of Outreach",
      phone: "97464 88681",
      phoneLink: "tel:+919746488681",
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Side - Social Media */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg font-medium text-gray-900 mb-4 flex items-center"
            >
              <div className="w-8 h-0.5 bg-primary mr-3" />
              Connect With Us
            </motion.h3>
            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-primary transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-primary mr-3">{link.icon}</span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg font-medium text-gray-900 mb-4 flex items-center"
            >
              <div className="w-8 h-0.5 bg-primary mr-3" />
              Contact
            </motion.h3>
            <div className="space-y-4">
              {contactPersons.map((person, index) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-100 pb-3"
                >
                  <div>
                    <h4 className="font-medium text-gray-900">{person.name}</h4>
                    <p className="text-sm text-gray-500">{person.role}</p>
                  </div>
                  <a
                    href={person.phoneLink}
                    className="flex items-center text-primary mt-1 sm:mt-0 hover:underline"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {person.phone}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative wave pattern */}
        <div className="mt-10 pt-8 border-t border-gray-100">
          <div className="flex justify-center">
            <svg width="400" height="20" viewBox="0 0 400 20" fill="none">
              <path
                d="M0 10C20 18 20 2 40 10C60 18 60 2 80 10C100 18 100 2 120 10C140 18 140 2 160 10C180 18 180 2 200 10C220 18 220 2 240 10C260 18 260 2 280 10C300 18 300 2 320 10C340 18 340 2 360 10C380 18 380 2 400 10"
                stroke="#61c2a6"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            © {new Date().getFullYear()} VIBHAVA Innovation Summit. School of Engineering, CUSAT.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 