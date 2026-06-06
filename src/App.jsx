import { HeroSection } from './components/HeroSection'
import { InnovationOverview } from './components/InnovationOverview'
import { InnovationDetail } from './components/InnovationDetail'
import { TechArchitecture } from './components/TechArchitecture'
import { DemoShowcase } from './components/DemoShowcase'
import { CallToAction } from './components/CallToAction'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">
      <HeroSection />
      <InnovationOverview />
      <InnovationDetail />
      <TechArchitecture />
      <DemoShowcase />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App