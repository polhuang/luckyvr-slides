"use client"

import { useState, useEffect, useCallback } from "react"
import { SlideContainer } from "@/components/slides/slide-container"
import { TitleSlide } from "@/components/slides/title-slide"
import { ComparisonSlide } from "@/components/slides/comparison-slide"
import { FeatureSlide, totalFeatures } from "@/components/slides/feature-slide"

// Total slides: Title (1) + Comparison (1) + Feature slides (5) = 7
const TOTAL_SLIDES = 2 + totalFeatures

export default function SlidesPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, TOTAL_SLIDES - 1))
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault()
        goToNext()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        goToPrevious()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToNext, goToPrevious])

  const renderSlide = () => {
    if (currentSlide === 0) {
      return <TitleSlide />
    }
    if (currentSlide === 1) {
      return <ComparisonSlide />
    }
    // Feature slides (index 2+)
    const featureIndex = currentSlide - 2
    return <FeatureSlide featureIndex={featureIndex} />
  }

  return (
    <main className="min-h-screen bg-background">
      <SlideContainer
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onPrevious={goToPrevious}
        onNext={goToNext}
      >
        {renderSlide()}
      </SlideContainer>
    </main>
  )
}
