import "./app.scss"
import Header from "./components/header"
import MainBanner from "./components/main-banner"
import OurService from "./components/our-service"

import Clients from "./components/clients"
function App() {
  return <>
    <Header />
    <main>
      <MainBanner />
      <OurService />

      <Clients />
    </main>
  </>
}

export default App;