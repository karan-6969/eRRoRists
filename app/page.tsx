"use client";

import AnimatedText from "@/components/animated-text";
import IdeaCard from "@/components/idea-card";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Rocket, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Sample data for featured ideas
const featuredIdeas = [
  {
    id: "1",
    title: "AI-Powered Code Reviewer",
    description:
      "Build an AI tool that reviews code and suggests improvements in real-time.",
    tags: ["AI", "Developer Tools", "SaaS"],
    status: "Open",
  },
  {
    id: "2",
    title: "Decentralized Marketplace",
    description:
      "Create a peer-to-peer marketplace using blockchain technology.",
    tags: ["Blockchain", "Web3", "Marketplace"],
    status: "In Progress",
  },
  {
    id: "3",
    title: "Mental Health Tracker",
    description:
      "An app that helps users track their mental health and provides resources.",
    tags: ["Health", "Mobile App", "AI"],
    status: "Open",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-boulder overflow-hidden relative">
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
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <AnimatedText
                  text="Errorists – Build ideas with people who give a damn."
                  className="text-3xl font-bebas tracking-wide sm:text-5xl xl:text-6xl/none text-white"
                />
                <motion.p
                  className="max-w-[600px] text-gray-300 md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Turn your innovative ideas into real products through
                  collaboration with passionate builders.
                </motion.p>
              </div>
              <motion.div
                className="flex flex-col gap-2 min-[400px]:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Link href="/submit">
                  <Button className="bg-orange text-white hover:bg-orange/80 group">
                    Post an Idea
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/ideas">
                  <Button className="bg-orange text-white hover:bg-orange/80 group">
                    Ideas
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </div>
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
                  alt="Hero Image"
                  className="rounded-lg object-cover relative z-10 bg-boulder"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Ideas Section */}
      <section className="w-full py-20 md:py-24 bg-black">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Featured Ideas"
            subtitle="Discover innovative ideas from our community that are looking for collaborators."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {featuredIdeas.map((idea, index) => (
              <IdeaCard key={idea.id} {...idea} />
            ))}
          </div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/ideas">
              <Button
                variant="outline"
                className="border-orange bg-gray/10 text-gray-300 hover:bg-gray/20 group"
              >
                View All Ideas
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-20 md:py-24 bg-boulder relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange/5 to-transparent opacity-30"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <SectionHeading
            title="How It Works"
            subtitle="Our platform makes it easy to collaborate and bring ideas to life."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Lightbulb className="h-6 w-6 text-orange" />,
                title: "Post your idea",
                description:
                  "Share your concept with our community of builders, designers, and product people.",
              },
              {
                icon: <Users className="h-6 w-6 text-orange" />,
                title: "Invite collaborators",
                description:
                  "Connect with skilled individuals who are passionate about your idea.",
              },
              {
                icon: <Rocket className="h-6 w-6 text-orange" />,
                title: "Build together",
                description:
                  "Collaborate to transform your idea into a real product with our tools and resources.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="border-gray/20 bg-boulder/50 backdrop-blur-sm transition-all duration-300 hover:shadow-glow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-center mb-4">
                      <motion.div
                        className="p-3 rounded-full bg-orange/10"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        {step.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bebas tracking-wide text-center text-white">
                      {step.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-center">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-24 bg-black relative overflow-hidden">
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
              <h2 className="text-3xl font-bebas tracking-wide md:text-4xl text-white">
                Ready to get started?
              </h2>
              <p className="max-w-[700px] text-gray-300 md:text-lg">
                Join our community of innovators and builders today.
              </p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/submit">
                <Button className="bg-orange text-white hover:bg-orange/80 group">
                  Post an Idea
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/join">
                <Button className="bg-orange text-white hover:bg-orange/80 group">
                  Join the Community
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
