"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, X } from "lucide-react"
import { motion } from "framer-motion"

export default function SubmitIdeaPage() {
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState("")

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault()
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()])
      }
      setTagInput("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="container px-4 md:px-6 py-16">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
        <Link href="/" className="inline-flex items-center text-orange hover:text-orange/80 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bebas tracking-wide text-white">Submit Your Idea</h1>
          <p className="text-gray mt-2">Share your innovative idea with our community of builders.</p>
        </motion.div>

        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Label htmlFor="title" className="text-white">
              Idea Title
            </Label>
            <Input
              id="title"
              placeholder="Enter a clear, concise title for your idea"
              className="bg-boulder border-gray/30 focus-visible:ring-orange text-white"
            />
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Label htmlFor="description" className="text-white">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Describe your idea in detail. What problem does it solve? Who is it for? What makes it unique?"
              className="min-h-[200px] bg-boulder border-gray/30 focus-visible:ring-orange text-white"
            />
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Label htmlFor="tags" className="text-white">
              Tags
            </Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge variant="secondary" className="bg-gray/10 text-gray gap-1 pl-2">
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="ml-1 rounded-full hover:bg-gray/20 p-1"
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove {tag} tag</span>
                    </button>
                  </Badge>
                </motion.div>
              ))}
            </div>
            <Input
              id="tags"
              placeholder="Add tags (press Enter after each tag)"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleAddTag}
              className="bg-boulder border-gray/30 focus-visible:ring-orange text-white"
            />
            <p className="text-xs text-gray">
              Add relevant tags to help others find your idea (e.g., AI, Mobile App, Fintech)
            </p>
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Label htmlFor="status" className="text-white">
              Status
            </Label>
            <Select>
              <SelectTrigger className="bg-boulder border-gray/30 focus:ring-orange text-white">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent className="bg-boulder border-gray/30 text-white">
                <SelectItem value="open">Open - Looking for collaborators</SelectItem>
                <SelectItem value="in-progress">In Progress - Already working on it</SelectItem>
                <SelectItem value="done">Done - Completed project</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <Button type="submit" className="w-full bg-orange text-white hover:bg-orange/80">
              Submit Idea
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  )
}
