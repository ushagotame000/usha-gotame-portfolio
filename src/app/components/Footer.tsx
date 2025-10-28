'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'
import { Button } from './ui/Button'
import { useState } from 'react'
import LoginAdmin from './admin/LoginAdmin'


const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
]

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]



export default function Footer() {
  const [openAdmin, setOpenAdmin]= useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()
  
const handleAdmin=()=>{
 setOpenAdmin(true); 
}
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="font-mono text-2xl font-bold gradient-text mb-4">
                  {'<Dev />'}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
                  Frontend Developer passionate about creating beautiful,
                  interactive web experiences with modern technologies.
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
                  <span>using Next.js & Framer Motion</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <nav className="space-y-2">
                  {quickLinks.map((link) => (
                    <motion.button
                      key={link.label}
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: 5 }}
                      className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </nav>
              </motion.div>
            </div>

            {/* Connect Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold mb-4">Connect</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <social.icon className="w-4 h-4 mr-3" />
                      {social.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-border/50 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-sm text-muted-foreground">
                © {currentYear} Frontend Developer. All rights reserved.
              </div>

                  <button onClick={handleAdmin} className='bg-green-500 p-3 rounded-xl shadow-lg'>Admin</button>
 {openAdmin && <LoginAdmin />}
              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:shadow-lg"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>

              {/* Back to Top */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={scrollToTop}
                  className="group hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <ArrowUp className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Back to Top
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        </div>
      </div>
    </footer>
  )
}
