import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DesktopApp from "./desktop/App"
import MobileApp from "./mobile/App"
import BlogIndex from "./blog/BlogIndex"
import BlogPost from "./blog/BlogPost"

const MOBILE_BREAKPOINT = 768

const forceMobile = new URLSearchParams(window.location.search).get('view') === 'mobile'

function Home() {
  const [isMobile, setIsMobile] = useState(
    () => forceMobile || window.innerWidth < MOBILE_BREAKPOINT
  )

  useEffect(() => {
    if (forceMobile) return
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return isMobile ? <MobileApp /> : <DesktopApp />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
