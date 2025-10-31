// 'use client'

// import { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'
// import { Button } from './ui/Button'


// const roles = [
//   'Frontend Developer',
//   'React Specialist',
//   'UI/UX Enthusiast',
//   'Animation Expert',
//   'Problem Solver'
// ]

// export default function HeroSection() {
//   const [currentRole, setCurrentRole] = useState(0)
//   const [displayText, setDisplayText] = useState('')
//   const [isTyping, setIsTyping] = useState(true)
//     const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })


//     useEffect(() => {
//     // Set the window size after the component has mounted
//     setWindowSize({
//       width: window.innerWidth,
//       height: window.innerHeight
//     })

//     // Add event listener for window resize
//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight
//       })
//     }

//     window.addEventListener('resize', handleResize)
    
//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
//   }, [])

//   useEffect(() => {
//     const currentText = roles[currentRole]
//     let timeoutId: NodeJS.Timeout

//     if (isTyping) {
//       if (displayText.length < currentText.length) {
//         timeoutId = setTimeout(() => {
//           setDisplayText(currentText.slice(0, displayText.length + 1))
//         }, 100)
//       } else {
//         timeoutId = setTimeout(() => {
//           setIsTyping(false)
//         }, 2000)
//       }
//     } else {
//       if (displayText.length > 0) {
//         timeoutId = setTimeout(() => {
//           setDisplayText(displayText.slice(0, -1))
//         }, 50)
//       } else {
//         setCurrentRole((prev) => (prev + 1) % roles.length)
//         setIsTyping(true)
//       }
//     }

//     return () => clearTimeout(timeoutId)
//   }, [displayText, isTyping, currentRole])

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   return (
//     <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Particles */}
//       <div className="absolute inset-0">
//         {Array.from({ length: 50 }, (_, i) => (
//           <motion.div
//             key={`particle-${i}-${Math.random()}`}
//             className="absolute w-1 h-1 bg-primary/20 rounded-full"
//             initial={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//             }}
//             animate={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Number.POSITIVE_INFINITY,
//               repeatType: 'reverse',
//             }}
//           />
//         ))}
//       </div>

//       {/* Floating geometric shapes */}
//       <motion.div
//         className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rounded-lg"
//         animate={{
//           rotate: 360,
//           y: [-10, 10, -10],
//         }}
//         transition={{
//           rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
//           y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
//         }}
//       />

//       <motion.div
//         className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full"
//         animate={{
//           scale: [1, 1.2, 1],
//           x: [-5, 5, -5],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Number.POSITIVE_INFINITY,
//           ease: "easeInOut",
//         }}
//       />

//       <motion.div
//         className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-accent rounded-xl shadow-lg shadow-green-500/25"
//         animate={{
//           rotate: -360,
//           y: [-5, 5, -5],
//         }}
//         transition={{
//           rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
//           y: { duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
//         }}
//       />

//       {/* Additional colorful elements */}
//       <motion.div
//         className="absolute top-32 right-1/3 w-8 h-8 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full shadow-lg shadow-orange-500/20"
//         animate={{
//           scale: [0.8, 1.2, 0.8],
//           opacity: [0.5, 1, 0.5],
//         }}
//         transition={{
//           duration: 3,
//           repeat: Number.POSITIVE_INFINITY,
//           ease: "easeInOut",
//         }}
//       />

//       <motion.div
//         className="absolute bottom-32 right-10 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-70 shadow-lg shadow-cyan-500/20"
//         animate={{
//           x: [-10, 10, -10],
//           y: [-5, 5, -5],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Number.POSITIVE_INFINITY,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Main Content */}
//       <div className="container mx-auto px-4 text-center relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           {/* Greeting */}
//           <motion.p
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="text-lg md:text-xl text-muted-foreground mb-4"
//           >
//             Hi there! 👋 I'm
//           </motion.p>

//           {/* Name */}
//           <motion.h1
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
//             className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text font-heading"
//           >
//             Usha Gotame
//           </motion.h1>

//           {/* Animated Role */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.6 }}
//             className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 h-16 flex items-center justify-center"
//           >
//             <span className="text-foreground">I'm a </span>
//             <span className="ml-2 text-primary font-heading">
//               {displayText}
//               <motion.span
//                 animate={{ opacity: [1, 0] }}
//                 transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
//                 className="ml-1"
//               >
//                 |
//               </motion.span>
//             </span>
//           </motion.div>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.6 }}
//             className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
//           >
//             I create beautiful, interactive web experiences with modern technologies.
//             Passionate about clean code, smooth animations, and user-centered design.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1, duration: 0.6 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
//           >
//             <Button
//               size="lg"
//               onClick={() => scrollToSection('projects')}
//               className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
//             >
//               <span className="relative z-10">View My Work</span>
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                 whileHover={{ scale: 1.05 }}
//               />
//             </Button>

//             <Button
//               variant="outline"
//               size="lg"
//               onClick={() => scrollToSection('contact')}
//               className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
//             >
//               <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
//               Get In Touch
//             </Button>
//           </motion.div>

//           {/* Social Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.2, duration: 0.6 }}
//             className="flex justify-center space-x-6 mb-16"
//           >
//             {[
//               { icon: Github, href: '#', label: 'GitHub' },
//               { icon: Linkedin, href: '#', label: 'LinkedIn' },
//               { icon: Download, href: '#', label: 'Resume' },
//             ].map((social, index) => (
//               <motion.a
//                 key={social.label}
//                 href={social.href}
//                 whileHover={{ scale: 1.2, y: -2 }}
//                 whileTap={{ scale: 0.9 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:shadow-lg"
//                 aria-label={social.label}
//               >
//                 <social.icon className="w-5 h-5" />
//               </motion.a>
//             ))}
//           </motion.div>

//           {/* Scroll Indicator */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.5, duration: 0.6 }}
//             className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//           >
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//               className="cursor-pointer"
//               onClick={() => scrollToSection('about')}
//             >
//               <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
"use client"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import { Button } from './ui/Button'

const roles = [
  'Frontend Developer',
  'React Specialist',
  'UI/UX Enthusiast',
  'Animation Expert',
  'Problem Solver'
]

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Set the window size after the component has mounted
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })

    // Add event listener for window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const currentText = roles[currentRole]
    let timeoutId: NodeJS.Timeout

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        }, 100)
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [displayText, isTyping, currentRole])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={`particle-${i}-${Math.random()}`}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * windowSize.width,  // Use windowSize here
              y: Math.random() * windowSize.height, // Use windowSize here
            }}
            animate={{
              x: Math.random() * windowSize.width,  // Use windowSize here
              y: Math.random() * windowSize.height, // Use windowSize here
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rounded-lg"
        animate={{
          rotate: 360,
          y: [-10, 10, -10],
        }}
        transition={{
          rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-accent rounded-xl shadow-lg shadow-green-500/25"
        animate={{
          rotate: -360,
          y: [-5, 5, -5],
        }}
        transition={{
          rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          y: { duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            Hi there! 👋 I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text font-heading"
          >
            Usha Gotame
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 h-16 flex items-center justify-center"
          >
            <span className="text-foreground">I'm a </span>
            <span className="ml-2 text-primary font-heading">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                className="ml-1"
              >
                |
              </motion.span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I create beautiful, interactive web experiences with modern technologies.
            Passionate about clean code, smooth animations, and user-centered design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition
                        opacity duration-300"
                whileHover={{ scale: 1.05 }}
              />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center space-x-6 mb-16"
          >
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Download, href: '#', label: 'Resume' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:shadow-lg"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="cursor-pointer"
              onClick={() => scrollToSection('about')}
            >
              <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
