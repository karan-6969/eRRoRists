"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export interface IdeaProps {
  id: string
  title: string
  description: string
  tags: string[]
  status: "Open" | "In Progress" | "Done"
}

export default function IdeaCard({ id, title, description, tags, status }: IdeaProps) {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden transition-all duration-200 hover:shadow-glow bg-boulder border-gray/20">
        <CardHeader className="p-4 pb-0">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bebas tracking-wide text-white line-clamp-1">{title}</h3>
            <Badge className={`${getStatusColor(status)} font-medium`}>{status}</Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-gray line-clamp-2 mb-3 text-sm">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-boulder/50 text-gray border-gray/30">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Link href={`/ideas/${id}`} className="w-full">
            <Button
              variant="ghost"
              className="w-full justify-between text-orange hover:text-orange/80 hover:bg-gray/10"
            >
              <span>View Details</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
