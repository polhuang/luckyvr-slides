"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SlideContainerProps {
  children: React.ReactNode
  currentSlide: number
  totalSlides: number
  onPrevious: () => void
  onNext: () => void
}

export function SlideContainer({
  children,
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
}: SlideContainerProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8">
        {children}
      </div>

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrevious}
          disabled={currentSlide === 0}
          className="rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        <span className="text-sm text-muted-foreground min-w-[60px] text-center">
          {currentSlide + 1} / {totalSlides}
        </span>

        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
