import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Proof } from './components/Proof'
import { OperatingModel } from './components/OperatingModel'
import { Services } from './components/Services'
import { Embedded } from './components/Embedded'
import { Industries } from './components/Industries'
import { Work } from './components/Work'
import { Stats } from './components/Stats'
import { Quote } from './components/Quote'
import { About } from './components/About'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Proof />
        <OperatingModel />
        <Services />
        <Embedded />
        <Industries />
        <Work />
        <Stats />
        <Quote />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
