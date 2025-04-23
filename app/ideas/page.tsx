"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import IdeaCard from "@/components/idea-card"
import { Input } from "@/components/ui/input"
import { Search, Plus } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

// Sample data for ideas
const ideas = [
  {
    id: "1",
    title: "AI-Powered Code Reviewer",
    description: "Build an AI tool that reviews code and suggests improvements in real-time.",
    tags: ["AI", "Developer Tools", "SaaS"],
    status: "Open",
  },
  {
    id: "2",
    title: "Decentralized Marketplace",
    description: "Create a peer-to-peer marketplace using blockchain technology.",
    tags: ["Blockchain", "Web3", "Marketplace"],
    status: "In Progress",
  },
  {
    id: "3",
    title: "Mental Health Tracker",
    description: "An app that helps users track their mental health and provides resources.",
    tags: ["Health", "Mobile App", "AI"],
    status: "Open",
  },
  {
    id: "4",
    title: "Sustainable Fashion Platform",
    description: "Connect eco-friendly fashion brands with conscious consumers.",
    tags: ["E-commerce", "Sustainability", "Web App"],
    status: "Done",
  },
  {
    id: "5",
    title: "Remote Team Collaboration Tool",
    description: "Build a better way for remote teams to collaborate and share ideas.",
    tags: ["Productivity", "SaaS", "Collaboration"],
    status: "In Progress",
  },
  {
    id: "6",
    title: "Smart Home Energy Manager",
    description: "IoT solution to optimize home energy usage and reduce bills.",
    tags: ["IoT", "Energy", "Hardware"],
    status: "Open",
  },
  {
    id: "7",
    title: "Language Learning Game",
    description: "Create an immersive game that makes learning new languages fun and effective.",
    tags: ["Education", "Gaming", "Mobile App"],
    status: "Open",
  },
  {
    id: "8",
    title: "Community-Driven Recipe Platform",
    description: "Platform for sharing and discovering recipes with a focus on dietary restrictions.",
    tags: ["Food", "Community", "Web App"],
    status: "In Progress",
  },
]

export default function IdeasPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredIdeas = ideas.filter((idea) => {
    const matchesSearch =
      idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesStatus = statusFilter === "all" || idea.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-16 md:py-20 bg-boulder">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h1 className="text-3xl font-bebas tracking-wide text-white">Ideas</h1>
              <p className="text-gray mt-1">Discover and collaborate on innovative ideas</p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link href="/submit">
                <Button className="bg-orange text-white hover:bg-orange/80 group">
                  <Plus className="mr-2 h-4 w-4" />
                  Post an Idea
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative flex-grow">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray" />
              <Input
                type="search"
                placeholder="Search ideas..."
                className="pl-8 bg-boulder border-gray/30 focus-visible:ring-orange text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="px-3 py-2 rounded-md border border-gray/30 bg-boulder text-white focus:outline-none focus:ring-2 focus:ring-orange"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="open">Open</option>
              <option value="in progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </motion.div>

          {filteredIdeas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIdeas.map((idea) => (
                <IdeaCard key={idea.id} {...idea} />
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray text-lg mb-4">No ideas match your search criteria.</p>
              <Button
                variant="outline"
                className="border-gray/30 text-white hover:bg-gray/10"
                onClick={() => {
                  setSearchQuery("")
                  setStatusFilter("all")
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}

          {filteredIdeas.length > 0 && (
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button variant="outline" className="border-gray/30 text-white hover:bg-gray/10">
                Load More
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
