import Hero from './components/hero'
import About from './components/about'
import Products from './components/products'
import Footer from './components/footer'
import Contact from './components/contact'
import Nav from './components/nav'
function App() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
