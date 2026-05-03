import Dilations from "@/components/lab-guides/Dilations"
import DilationsModulePlanning from "@/components/planning/DilationsModulePlanning"
import RigidMotions from "@/components/lab-guides/RigidMotions"
import PythagoreanTheorem from "@/components/lab-guides/PythagoreanTheorem"

export function App() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto gap-3">
      <RigidMotions />
      <Dilations />
      <PythagoreanTheorem />
      <DilationsModulePlanning />
    </div>
  )
}

export default App
