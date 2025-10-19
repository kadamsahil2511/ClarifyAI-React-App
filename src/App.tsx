import './App.css'
import Hero from './components/Hero'
import Features from './components/Features'
import Demo from './components/Demo'
import Install from './components/Install'
import Roadmap from './components/Roadmap'
import Ethics from './components/Ethics'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Hero />
      <Features />
      <Demo />
      <Install />
      <Roadmap />
      <Ethics />
      <Footer />
    </div>
  )
}

export default App
