import { useState } from 'react'
import Re from './components/re'

const App = () => {
  const [open, setOpen] = useState(true)
  return (
    <div>
      {open ? <Re /> : null}
      <button className='border' onClick={() => setOpen((prev) => !prev)}>open</button>
    </div>
  )
}

export default App
