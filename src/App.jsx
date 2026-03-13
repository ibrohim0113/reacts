import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  let api = "http://localhost:3001/data"
  let [user, setUser] = useState([])

  async function getUser() {
    try {
      let { data } = await axios.get(api)
      setUser(data)
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    getUser()
  }, [])

  return (
    <div>
      {user.map((el)=>{
        <div key={}>
          <h1>{el.name}</h1>
          <p>{el.job}</p>
        </div>
      })}
    </div>
  )
}

export default App
