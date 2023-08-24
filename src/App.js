import './App.css'
import { Footer } from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import Products from './components/Products/Products'
import { Slider } from './components/Slider/Slider'
import Test from './components/Test/Test'
import Virtual from './components/Virtual/Virtual'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Test />
      <Footer />
    </div>
  )
}

export default App
