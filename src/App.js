import { useState, useEffect } from 'react'
import './App.css'
import DateHeader from './dateHeader'
import itemService from './services/items'
import outputService from './services/outputs'
import OutputTable from './outputTable'

function App() {
  const [dayOutputs, setDayOutput] = useState([])
  const [items, setItems] = useState([])

  useEffect(() => {
    itemService
      .getAll()
      .then(initialItems => {
        setItems(initialItems)
      })

    outputService
      .getAll()
      .then(initialItems => {
        setDayOutput(initialItems)
      }) 
  }, [])

  return (
    <div>
      <h1>URKKI APPI</h1>
      <DateHeader />
      <div>Päivän output: 3,76h</div>
      <OutputTable outputs={dayOutputs} items={items}/>
    </div>
  )
}

export default App
