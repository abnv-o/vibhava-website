"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, Instagram, Linkedin } from "lucide-react";

const contactPersons = [
  {
    name: "Romal Josbin",
    role: "Convener",
    phone: "97781 18693",
    tel: "tel:+919778118693",
  },
  {
    name: "Drisya P",
    role: "Head of Outreach",
    phone: "97464 88681",
    tel: "tel:+919746488681",
  },
];

const socialLinks = [
  {
    name: "Website",
    url: "https://vibhava.cusat.co.in",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/vibhava.cusat",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    name: "Email",
    url: "mailto:vibhava@cusat.ac.in",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/vibhavacusat/",
    icon: <Linkedin className="w-5 h-5" />,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />

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
            className="inline-block text-sm font-semibold text-primary px-3 py-1 rounded-full bg-primary/10 mb-3"
          >
            GET IN TOUCH
          </motion.span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h3>
              <div className="space-y-6">
                {contactPersons.map((person) => (
                  <div key={person.name} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{person.name}</h4>
                      <p className="text-sm text-gray-500 mb-1">{person.role}</p>
                      <a href={person.tel} className="text-gray-600 hover:text-primary transition-colors">
                        {person.phone}
                      </a>
                    </div>
                  </div>
                ))}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:vibhava@cusat.ac.in" className="text-gray-600 hover:text-primary transition-colors">
                      vibhava@cusat.ac.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Website</h4>
                    <a href="https://vibhava.cusat.co.in" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                      vibhava.cusat.co.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Download Brochure Button */}
            <motion.a
              href="/brochure.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl group text-lg"
            >
              <Download className="w-6 h-6 mr-3" />
              Download Event Brochure
            </motion.a>
          </motion.div>

          {/* Location Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Location</h3>
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.214196161891!2d76.32281937497697!3d10.045896090060724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c379e04e30d%3A0x71dd4da2e5396e51!2sSchool%20of%20Engineering%2C%20CUSAT!5e0!3m2!1sen!2sin!4v1710837058953!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                <p className="text-gray-600">
                  School of Engineering, CUSAT<br />
                  Kochi, Kerala<br />
                  India - 682022
                </p>
                <a 
                  href="https://maps.google.com/?q=School+of+Engineering+CUSAT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark text-sm mt-2 inline-block"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 