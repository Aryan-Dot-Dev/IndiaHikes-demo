import { useEffect, useRef } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Reviews from "../components/Reviews"
import Advantages from "../components/Advantages"
import Faqs from "../components/Faqs"
import Footer from "../components/Footer"

const Home = () => {
  const sectionsRef = useRef([])

  useEffect(() => {
    const sections = sectionsRef.current.filter(Boolean)

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is 50% out of view
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          const currentIndex = sections.indexOf(entry.target)
          const nextIndex = currentIndex + 1

          // If there's a next section and we're scrolling down
          if (nextIndex < sections.length && entry.boundingClientRect.top < 0) {
            // Small delay to prevent rapid firing
            setTimeout(() => {
              sections[nextIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              })
            }, 100)
          }
        }
      })
    }, observerOptions)

    // Observe all sections
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col pb-20 md:pb-0">
      <Header />
      <div ref={addToRefs} className="section-snap">
        <Hero />
      </div>
      <div ref={addToRefs} className="section-snap">
        <Reviews />
      </div>
      <div ref={addToRefs} className="section-snap">
        <Advantages />
      </div>
      <div ref={addToRefs} className="section-snap">
        <Faqs />
      </div>
      <div ref={addToRefs} className="section-snap">
        <Footer />
      </div>
    </div>
  )
}

export default Home