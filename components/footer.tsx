"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray/20 bg-boulder py-6">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-6">
        <p className="text-sm text-gray">Made by Errorists © {new Date().getFullYear()}</p>
        <div className="flex items-center gap-4">
          <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-gray hover:text-orange transition-colors" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-gray hover:text-orange transition-colors" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Link href="mailto:hello@errorists.com" aria-label="Email">
              <Mail className="h-5 w-5 text-gray hover:text-orange transition-colors" />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
