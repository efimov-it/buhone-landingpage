import "./app.scss"
import Header from "./components/header"
import MainBanner from "./components/main-banner"
import OurService from "./components/our-service"
import About from "./components/about"
import Clients from "./components/clients"
import Reviews from "./components/reviews"

import Footer from "./components/footer"
function App() {
  return <>
    <Header />
    <main>
      <MainBanner />
      <OurService />
      <About />
      <Clients />
      <Reviews />

      <Footer />
    </main>
  </>
}

export default App;