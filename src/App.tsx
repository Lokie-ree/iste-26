import Dilations from "@/components/lab-guides/Dilations"
import DilationsModulePlanning from "@/components/planning/DilationsModulePlanning"

export function App() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <div id="dilations"><Dilations /></div>
      <div id="dilations-module-planning"><DilationsModulePlanning /></div>
    </div>
  )
}

export default App
