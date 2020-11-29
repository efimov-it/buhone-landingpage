import "./scss/index.scss"
import Header from "./components/header"
import MainBanner from "./components/main-banner"
import OurService from "./components/our-service"
import About from "./components/about"
import Clients from "./components/clients"
import Reviews from "./components/reviews"
import Contacts from "./components/contacts"
import Footer from "./components/footer"
function App() {
  return <>
    <Header id="home" />
    <main>
      <MainBanner />
      <OurService id="service" />
      <About id="about" />
      <Clients id="clients" />
      <Reviews id="reviews" />
      <Contacts id="contacts" />
    </main>
    <Footer />
  </>
}

export default App;