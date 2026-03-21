import { useState, useEffect } from "react"
import DesktopApp from "./desktop/App"
import MobileApp from "./mobile/App"

const MOBILE_BREAKPOINT = 768

function App() {
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth < MOBILE_BREAKPOINT
  )

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return isMobile ? <MobileApp /> : <DesktopApp />
}

export default App
