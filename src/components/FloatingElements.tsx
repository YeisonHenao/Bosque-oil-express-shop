"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Elementos flotantes animados */}
      <div
        className="absolute w-2 h-2 bg-green-500/20 rounded-full animate-pulse"
        style={{
          left: mousePosition.x * 0.1 + 100,
          top: mousePosition.y * 0.1 + 100,
          transition: "all 2s ease-out",
        }}
      />
      <div
        className="absolute w-3 h-3 bg-green-400/10 rounded-full animate-bounce"
        style={{
          left: mousePosition.x * 0.05 + 200,
          top: mousePosition.y * 0.05 + 200,
          transition: "all 3s ease-out",
        }}
      />
      <div
        className="absolute w-1 h-1 bg-green-600/30 rounded-full"
        style={{
          left: mousePosition.x * 0.02 + 300,
          top: mousePosition.y * 0.02 + 150,
          transition: "all 4s ease-out",
        }}
      />
    </div>
  )
}
