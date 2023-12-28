import './App.css'
import Card from './components/Card.jsx'

function App() {

  return (
    <>
    <Card 
      carimg = "/Carimg.svg"
      name = "Sedans"
      desc = "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      background = "orange"
      Learnmore = "yellow"
      border = "kviteli"
    />
    <Card 
      carimg = "/secondcarimg.svg"
      name = "SUVs"
      desc = "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      background="lightblue"
      Learnmore = "blue"
      border = "lurji"
    />
    <Card 
      carimg = "/thirdcarimg.svg"
      name = "Luxury"
      desc = "LeCruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. mon"
      background = "darkblue"
      Learnmore = "dblue"
      border = "mukilurji"
    />
    </>
  )
}

export default App
