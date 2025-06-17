"use client"

import { useState } from "react"

export default function DancingMonkey() {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <div className="flex flex-col items-center space-y-4 p-8 border-2 border-black bg-white">
      <div className="relative">
        <div
          className={`text-6xl ${isPlaying ? "animate-dance" : ""} transition-all duration-300`}
          style={{ transformOrigin: "center bottom" }}
        >
          🐵
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black rounded-full opacity-30"></div>
      </div>

      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="px-4 py-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors font-bold font-mono text-sm"
      >
        {isPlaying ? "STOP DANCING" : "START DANCING"}
      </button>

      <div className="text-center font-mono text-xs text-gray-600">
        <p>Click to {isPlaying ? "stop" : "start"} the animation</p>
      </div>
    </div>
  )
}
