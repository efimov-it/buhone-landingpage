import "./app.scss"
import Header from "./components/header"
import MainBanner from "./components/main-banner"
import OurService from "./components/our-service"

import Clients from "./components/clients"
import Reviews from "./components/reviews"
function App() {
  return <>
    <Header />
    <main>
      <MainBanner />
      <OurService />

      <Clients />
      <Reviews />
    </main>
  </>
}

export default App;