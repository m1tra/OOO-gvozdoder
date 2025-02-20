"use client"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { Button } from "@/components/ui/button"
import { Wrap } from "./ui/wrapper"

export default function HeroWithCanvasReveal() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Canvas Reveal Effect Background */}
      <div className="absolute inset-0">
        <CanvasRevealEffect
          animationSpeed={2}
          containerClassName="bg-[#0A0A0A]"
          colors={[
            [180, 180, 180], // Lighter gray
            [160, 160, 160], // Light gray
            [140, 140, 140], // Medium gray
          ]}
          dotSize={3}
          opacities={[0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.7]}
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 via-transparent to-[#0A0A0A]/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <Wrap>
          <h1 className="text-4xl text-center sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Welcome to the Future
          </h1>
        </Wrap>
        <Wrap>
        <p className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of innovation with ur cutting-edge gvozdi. Ein us on a journey to transform ur home.
        </p>
        </Wrap>
      </div>
    </div>
  )
}