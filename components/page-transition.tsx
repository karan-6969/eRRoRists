"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useAnimation } from "@/components/animation-provider"
import { useEffect } from "react"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const { isFirstLoad, setIsFirstLoad } = useAnimation()

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false)
    }
  }, [isFirstLoad, setIsFirstLoad])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  )
}
