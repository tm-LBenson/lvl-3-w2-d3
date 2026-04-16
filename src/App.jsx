import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PetButtons from './components/PetButtons'
import PetPreview from './components/PetPreview'

function App() {
// TODO: Unselect when pressing the button
  const [pet, setPet] = useState("")

  return (
    <div className='app'>
      <Header pet={ pet }/>
      <PetButtons setPet={setPet} pet={pet} />
      <PetPreview pet={pet}/>
    </div>
  )
}

export default App
