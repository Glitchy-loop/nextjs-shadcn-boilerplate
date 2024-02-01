"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion"

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={cn(
          "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
          className
        )}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  )
}

export default MaxWidthWrapper
