import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InsuranceBanner from './components/InsuranceBanner'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import BookingForm from './components/BookingForm'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <InsuranceBanner />
      <Services />
      <About />
      <Testimonials />
      <BookingForm />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
