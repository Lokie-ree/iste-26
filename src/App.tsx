import RigidMotions from "@/components/lab-guides/RigidMotions"
import Dilations from "@/components/lab-guides/Dilations"
import PythagoreanTheorem from "@/components/lab-guides/PythagoreanTheorem"

export function App() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <div id="rigid-motions"><RigidMotions /></div>
      <div id="dilations"><Dilations /></div>
      <div id="pythagorean-theorem"><PythagoreanTheorem /></div>
    </div>
  )
}

export default App
