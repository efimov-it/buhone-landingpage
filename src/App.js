import "./app.scss"
import Header from "./components/header"
import MainBanner from "./components/main-banner"
import OurService from "./components/our-service"
function App() {
  return <>
    <Header />
    <main>
      <MainBanner />
      <OurService />
    </main>
  </>
}

export default App;