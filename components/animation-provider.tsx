"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import PageTransition from "@/components/page-transition"

type AnimationContextType = {
  isFirstLoad: boolean
  setIsFirstLoad: (value: boolean) => void
}

const AnimationContext = createContext<AnimationContextType>({
  isFirstLoad: true,
  setIsFirstLoad: () => {},
})

export const useAnimation = () => useContext(AnimationContext)

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimationContext.Provider value={{ isFirstLoad, setIsFirstLoad }}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <div key="loader" className="fixed inset-0 bg-boulder flex items-center justify-center z-50">
            <div className="text-center">
              <h1 className="font-bebas text-6xl text-white mb-4 tracking-wider">
                ERROR<span className="text-orange">ISTS</span>
              </h1>
              <div className="loader">
                <div className="loader-bar"></div>
              </div>
            </div>
          </div>
        ) : (
          <PageTransition key="page">{children}</PageTransition>
        )}
      </AnimatePresence>
    </AnimationContext.Provider>
  )
}
