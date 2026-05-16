import RigidMotions from "@/components/lab-guides/RigidMotions"
import Dilations from "@/components/lab-guides/Dilations"
import PythagoreanTheorem from "@/components/lab-guides/PythagoreanTheorem"
import { useState, useEffect, type ComponentType } from "react"

const GUIDES: Record<string, ComponentType> = {
  "rigid-motions": RigidMotions,
  "dilations": Dilations,
  "pythagorean-theorem": PythagoreanTheorem,
}

function getGuide() {
  const hash = window.location.hash.replace("#", "")
  return GUIDES[hash] ?? RigidMotions
}

export default function App() {
  const [Guide, setGuide] = useState<ComponentType>(getGuide)

  useEffect(() => {
    const handleHashChange = () => setGuide(() => getGuide())
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return <Guide />
}