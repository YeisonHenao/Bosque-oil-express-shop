"use client"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useCounter } from "@/hooks/useCounter"
import { useEffect } from "react"
import { AnimatedSection } from "@/components/AnimatedSection"

export function CounterSection() {
  const { ref, isVisible } = useScrollAnimation()
  const { count: products, setIsActive: setProductsActive } = useCounter(2600, 2000)
  const { count: hours, setIsActive: setHoursActive } = useCounter(24, 1000)
  const { count: days, setIsActive: setDaysActive } = useCounter(365, 1500)

  useEffect(() => {
    if (isVisible) {
      setProductsActive(true)
      setHoursActive(true)
      setDaysActive(true)
    }
  }, [isVisible, setProductsActive, setHoursActive, setDaysActive])

  return (
    <section ref={ref} className="py-16 bg-slate-900">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <AnimatedSection animation="scaleIn" delay={100}>
            <div className="space-y-2 group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-green-500 group-hover:animate-pulse">
                {products.toLocaleString()}+
              </div>
              <p className="text-slate-300 text-lg">Productos Disponibles</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={200}>
            <div className="space-y-2 group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-green-500 group-hover:animate-pulse">{hours}</div>
              <p className="text-slate-300 text-lg">Horas Abiertas</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={300}>
            <div className="space-y-2 group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-green-500 group-hover:animate-pulse">{days}</div>
              <p className="text-slate-300 text-lg">Días al Año</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
