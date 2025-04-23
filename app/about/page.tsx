"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"

// Sample team data
const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Former software engineer with a passion for community-driven innovation.",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "AI researcher and full-stack developer focused on building scalable platforms.",
  },
  {
    name: "Michael Brown",
    role: "Head of Design",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "UX/UI designer with experience creating intuitive and accessible interfaces.",
  },
  {
    name: "Emily Rodriguez",
    role: "Community Manager",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Community builder with a background in product management and user engagement.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-24 bg-boulder relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange/5 to-transparent opacity-30"></div>
          <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border-gray/5 border-r border-b"></div>
            ))}
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bebas tracking-wide sm:text-5xl text-white">About Errorists</h1>
                <p className="max-w-[600px] text-gray md:text-xl">
                  We're building a community where ideas become reality through collaboration.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-orange to-orange/50 opacity-75 blur-xl"></div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="About Errorists"
                  className="rounded-lg object-cover relative z-10 bg-boulder"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-20 md:py-24 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.div
              className="space-y-2 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bebas tracking-wide md:text-4xl text-white">Our Mission</h2>
              <p className="text-gray md:text-xl">
                Errorists is a builder-driven platform to turn raw ideas into real products through community
                collaboration. We believe that great ideas can come from anywhere, but bringing them to life requires a
                diverse team of passionate individuals.
              </p>
              <p className="text-gray md:text-xl mt-4">
                Our platform connects innovators with the talent and resources they need to transform concepts into
                tangible products that solve real problems. We're building a community where creativity meets execution,
                and where everyone has the opportunity to contribute to the next big thing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 md:py-24 bg-boulder">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The passionate individuals behind Errorists who are dedicated to helping ideas come to life."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Avatar className="h-24 w-24 mb-4 border-2 border-orange/20">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback className="bg-orange/10 text-orange">{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </motion.div>
                <h3 className="text-xl font-bebas tracking-wide text-white">{member.name}</h3>
                <p className="text-orange mb-2">{member.role}</p>
                <p className="text-gray text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-20 md:py-24 bg-black">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do at Errorists."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We believe in pushing boundaries and challenging the status quo to create meaningful solutions.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                ),
              },
              {
                title: "Collaboration",
                description:
                  "We foster an environment where diverse perspectives come together to create something greater than the sum of its parts.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
              },
              {
                title: "Integrity",
                description:
                  "We operate with transparency, honesty, and a commitment to doing what's right for our community.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                ),
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-boulder/50 p-6 rounded-lg border border-gray/20 shadow-sm backdrop-blur-sm h-full">
                  <div className="flex justify-center mb-4">
                    <motion.div
                      className="p-3 rounded-full bg-orange/10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {value.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bebas tracking-wide text-center text-white mb-2">{value.title}</h3>
                  <p className="text-gray text-center">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-24 bg-boulder/80 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange/10 to-transparent opacity-30"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center space-y-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bebas tracking-wide md:text-4xl text-white">Join Our Journey</h2>
              <p className="max-w-[700px] text-gray md:text-lg">
                Be part of a community that's building the future, one idea at a time.
              </p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/join">
                <Button className="bg-orange text-white hover:bg-orange/80 group">
                  Join the Community
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/ideas">
                <Button variant="outline" className="border-gray/30 text-white hover:bg-gray/10">
                  Explore Ideas
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
