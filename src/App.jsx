import EtheriumCoinsSection from "./components/EtheriumCoinsSection"
import Header from "./components/Header"
import Hero from "./components/Hero"
import MonthlyTreasures from "./components/MonthlyTreasures"
import TrendingAuction from "./components/TrendingAuction"
import "./index.css"

function App() {

  return (
    <section>
      <Header />
      <Hero />
      <EtheriumCoinsSection />
      <TrendingAuction />
      <MonthlyTreasures />
    </section>
  )
}

export default App
