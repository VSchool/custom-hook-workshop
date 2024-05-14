import './App.css'
import { useEffect, useContext } from 'react'
import ThingForm from './components/ThingForm'
import { ThingContext } from './context/ThingProvider'
import ThingList from './components/ThingList'


function App() {

  const { getInitialThings } = useContext(ThingContext)

  useEffect(() => {
    getInitialThings()
  }, [])


  return (
    <div className='app'>
      <nav>
        <h1>Custom Hooks</h1>
      </nav>
      <ThingForm />
      <ThingList />
    </div>
  )
}

export default App
