import React, { useState } from 'react'
import "./index.css"
const App = () => {
  let [cnt, setSnt] = useState(0)
  let [value, setValue] = useState()
  let [data, setData] = useState([cnt])

  function hendelPlus() {
    setSnt(cnt + 1)

    setData([...data, cnt + 1])
  }

  function hendelMinus() {
    setSnt(cnt - 1)

    setData([...data, cnt - 1])
  }

  return (
    <div>
      <h1 className=''>{cnt}</h1>
      <button className='w-10 h-10 bg-gray-50' onClick={hendelPlus}>+</button>
      <button className='w-10 h-10 bg-gray-50' onClick={hendelMinus}>-</button>

      <input className='border-1' type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <h1 className='text-center'>{value}</h1>
      <div className='flex justify-center gap-[30px] flex-wrap pl-10 pr-10'>
        {data.map((el) => {
          return <h1 className='text-[34px]'>{el}</h1>
        })}
      </div>
    </div>
  )
}

export default App
