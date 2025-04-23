"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Check } from "lucide-react"
import { motion } from "framer-motion"

export default function JoinUsPage() {
  const benefits = [
    "Collaborate with talented individuals across disciplines",
    "Build your portfolio with meaningful projects",
    "Access resources and tools to bring ideas to life",
  ]

  return (
    <div className="container px-4 md:px-6 py-16">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
        <Link href="/" className="inline-flex items-center text-orange hover:text-orange/80 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl font-bebas tracking-wide text-white mb-4">Join Our Community</h1>
          <p className="text-gray mb-6">
            Become part of a growing community of innovators, builders, and creators who are passionate about turning
            ideas into reality.
          </p>
          <ul className="space-y-3 mb-6">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
              >
                <div className="mr-2 mt-1 bg-orange/20 p-1 rounded-full">
                  <Check className="h-4 w-4 text-orange" />
                </div>
                <span className="text-gray">{benefit}</span>
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative hidden md:block"
          >
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-orange to-orange/50 opacity-75 blur-xl"></div>
            <Image
              src="/placeholder.svg?height=300&width=400"
              width={400}
              height={300}
              alt="Community illustration"
              className="rounded-lg relative z-10 bg-boulder"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-boulder/50 p-6 rounded-lg border border-gray/20 shadow-sm backdrop-blur-sm"
        >
          <h2 className="text-xl font-bebas tracking-wide text-white mb-4">Sign up to join</h2>
          <form className="space-y-4">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Label htmlFor="name" className="text-white">
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                className="bg-boulder border-gray/30 focus-visible:ring-orange text-white"
              />
            </motion.div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Label htmlFor="email" className="text-white">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="bg-boulder border-gray/30 focus-visible:ring-orange text-white"
              />
            </motion.div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Label htmlFor="role" className="text-white">
                Your Role
              </Label>
              <Select>
                <SelectTrigger className="bg-boulder border-gray/30 focus:ring-orange text-white">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent className="bg-boulder border-gray/30 text-white">
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="designer">Designer</SelectItem>
                  <SelectItem value="pm">Product Manager</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Label htmlFor="interests" className="text-white">
                What are you interested in?
              </Label>
              <Select>
                <SelectTrigger className="bg-boulder border-gray/30 focus:ring-orange text-white">
                  <SelectValue placeholder="Select your interests" />
                </SelectTrigger>
                <SelectContent className="bg-boulder border-gray/30 text-white">
                  <SelectItem value="ai">Artificial Intelligence</SelectItem>
                  <SelectItem value="web">Web Development</SelectItem>
                  <SelectItem value="mobile">Mobile Apps</SelectItem>
                  <SelectItem value="blockchain">Blockchain</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div
              className="flex items-start space-x-2 pt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <input
                type="checkbox"
                id="terms"
                className="rounded border-gray/30 text-orange focus:ring-orange mt-1 bg-boulder"
              />
              <Label htmlFor="terms" className="text-sm text-gray font-normal">
                I agree to the{" "}
                <Link href="#" className="text-orange hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-orange hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button type="submit" className="w-full bg-orange text-white hover:bg-orange/80">
                Join the Community
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
