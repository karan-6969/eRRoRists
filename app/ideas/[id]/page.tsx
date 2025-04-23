"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowLeft, MessageSquare, Share2, ThumbsUp } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// This would normally come from a database
const getIdeaById = (id: string) => {
  const ideas = [
    {
      id: "1",
      title: "AI-Powered Code Reviewer",
      description:
        "Build an AI tool that reviews code and suggests improvements in real-time. The tool would integrate with popular IDEs and GitHub to provide feedback during the development process. It would analyze code quality, identify potential bugs, suggest optimizations, and ensure adherence to best practices. The AI would learn from user feedback to improve its suggestions over time.",
      tags: ["AI", "Developer Tools", "SaaS"],
      status: "Open",
      createdAt: "2023-09-15",
      createdBy: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Software Engineer",
      },
      contributors: [
        {
          name: "Sarah Chen",
          avatar: "/placeholder.svg?height=40&width=40",
          role: "AI Researcher",
        },
        {
          name: "Michael Brown",
          avatar: "/placeholder.svg?height=40&width=40",
          role: "UX Designer",
        },
      ],
      comments: [
        {
          id: "c1",
          user: {
            name: "David Kim",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content: "This is a great idea! I'd love to help with the machine learning aspects.",
          createdAt: "2023-09-18",
        },
        {
          id: "c2",
          user: {
            name: "Emily Rodriguez",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content: "Have you considered how this would handle different programming languages?",
          createdAt: "2023-09-20",
        },
      ],
    },
    // More ideas would be here
  ]

  return ideas.find((idea) => idea.id === id)
}

export default function IdeaDetailsPage({ params }: { params: { id: string } }) {
  const [idea, setIdea] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIdea(getIdeaById(params.id))
      setLoading(false)
    }, 500)
  }, [params.id])

  if (loading) {
    return (
      <div className="container px-4 md:px-6 py-20 flex justify-center items-center min-h-[50vh]">
        <div className="loader">
          <div className="loader-bar"></div>
        </div>
      </div>
    )
  }

  if (!idea) {
    return (
      <div className="container px-4 md:px-6 py-20">
        <h1 className="text-2xl font-bebas tracking-wide text-white">Idea not found</h1>
        <Link href="/ideas">
          <Button variant="link" className="p-0 text-orange">
            Back to ideas
          </Button>
        </Link>
      </div>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-900/20 text-green-400 border-green-900/30"
      case "In Progress":
        return "bg-blue-900/20 text-blue-400 border-blue-900/30"
      case "Done":
        return "bg-purple-900/20 text-purple-400 border-purple-900/30"
      default:
        return "bg-gray-900/20 text-gray-400 border-gray-900/30"
    }
  }

  return (
    <div className="container px-4 md:px-6 py-16">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
        <Link href="/ideas" className="inline-flex items-center text-orange hover:text-orange/80 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to ideas
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bebas tracking-wide text-white">{idea.title}</h1>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-sm text-gray">Posted on {idea.createdAt}</p>
                <Badge className={`${getStatusColor(idea.status)} font-medium`}>{idea.status}</Badge>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-gray/30 text-white hover:bg-gray/10 group">
                <ThumbsUp className="mr-2 h-4 w-4 group-hover:text-orange transition-colors" />
                Support
              </Button>
              <Button variant="outline" size="sm" className="border-gray/30 text-white hover:bg-gray/10 group">
                <Share2 className="mr-2 h-4 w-4 group-hover:text-orange transition-colors" />
                Share
              </Button>
            </div>
          </div>

          <div className="prose max-w-none mb-8 text-white prose-headings:text-white prose-strong:text-white">
            <p className="text-gray whitespace-pre-line">{idea.description}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {idea.tags.map((tag: string) => (
              <Badge key={tag} variant="outline" className="bg-boulder/50 text-gray border-gray/30">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bebas tracking-wide mb-4 text-white">Comments</h2>
            {idea.comments.map((comment: any, index: number) => (
              <motion.div
                key={comment.id}
                className="border-b border-gray/10 py-4 last:border-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={comment.user.avatar || "/placeholder.svg"} alt={comment.user.name} />
                    <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-white">{comment.user.name}</p>
                      <span className="text-xs text-gray">{comment.createdAt}</span>
                    </div>
                    <p className="text-gray mt-1">{comment.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-bebas tracking-wide mb-2 text-white">Add a comment</h3>
              <textarea
                className="w-full p-3 border border-gray/30 rounded-md focus:outline-none focus:ring-2 focus:ring-orange min-h-[100px] bg-boulder text-white"
                placeholder="Share your thoughts or ask a question..."
              ></textarea>
              <Button className="mt-2 bg-orange text-white hover:bg-orange/80 group">
                <MessageSquare className="mr-2 h-4 w-4" />
                Post Comment
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <div className="lg:col-span-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-gray/20 bg-boulder/50 backdrop-blur-sm">
              <CardHeader>
                <h2 className="text-xl font-bebas tracking-wide text-white">Created by</h2>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={idea.createdBy.avatar || "/placeholder.svg"} alt={idea.createdBy.name} />
                    <AvatarFallback>{idea.createdBy.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-white">{idea.createdBy.name}</p>
                    <p className="text-sm text-gray">{idea.createdBy.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-gray/20 bg-boulder/50 backdrop-blur-sm">
              <CardHeader>
                <h2 className="text-xl font-bebas tracking-wide text-white">Contributors</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {idea.contributors.map((contributor: any, index: number) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={contributor.avatar || "/placeholder.svg"} alt={contributor.name} />
                        <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-white">{contributor.name}</p>
                        <p className="text-sm text-gray">{contributor.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mt-4"
                >
                  <Button className="w-full bg-orange text-white hover:bg-orange/80">Join as Contributor</Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-gray/20 bg-boulder/50 backdrop-blur-sm">
              <CardHeader>
                <h2 className="text-xl font-bebas tracking-wide text-white">Similar Ideas</h2>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Link href="/ideas/2" className="text-orange hover:text-orange/80 hover:underline">
                      AI Code Generator for Boilerplate
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Link href="/ideas/3" className="text-orange hover:text-orange/80 hover:underline">
                      Developer Productivity Analytics
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Link href="/ideas/4" className="text-orange hover:text-orange/80 hover:underline">
                      Collaborative IDE with AI Assistance
                    </Link>
                  </motion.li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
