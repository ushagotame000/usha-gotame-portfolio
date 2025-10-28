'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Send,
  CheckCircle,
} from 'lucide-react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/Button'
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(5, 'Password must be at least 5 characters'),
})

type AdminFormData = z.infer<typeof contactSchema>

export default function LoginAdmin() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<AdminFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: AdminFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
         
          <div className="grid lg:grid-cols-2 gap-12 items-start">
          

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-background/50 backdrop-blur-sm border-border/50">
                <CardHeader className="p-0 mb-6">
                  <h3 className="text-2xl font-semibold">Admin Authencation</h3>
                </CardHeader>

                <CardContent className="p-0">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-4">
                      <div>
                        <Input
                          {...register('name')}
                          placeholder="Your Name"
                          className="bg-background border-border/50 focus:border-primary"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <Input
                          {...register('email')}
                          type="email"
                          placeholder="Your Email"
                          className="bg-background border-border/50 focus:border-primary"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                       <div>
                        <Input
                          {...register('password')}
                          type="password"
                          placeholder="Your Password"
                          className="bg-background border-border/50 focus:border-primary"
                        />
                        {errors.password && (
                          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                      </div>
                    </div>

                 

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-medium transition-all duration-300 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                        ) : submitStatus === 'success' ? (
                          <CheckCircle className="w-5 h-5 mr-2" />
                        ) : (
                          <Send className="w-5 h-5 mr-2" />
                        )}
                        {isSubmitting ? 'Authencating...' : submitStatus === 'success' ? 'Login Successfully' : 'Login'}
                      </Button>
                    </motion.div>

                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-green-600 text-center py-2"
                      >
                        ✅ Thank you! Your message has been sent successfully.
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-600 text-center py-2"
                      >
                        ❌ Sorry, there was an error in authentication.
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
