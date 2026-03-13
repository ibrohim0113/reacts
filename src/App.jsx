import React, { useState } from 'react'
import "./index.css"

const App = () => {
  let [data, setData] = useState([
    {
      id: 1,
      name: "Ismoil",
      age: 20,
      status: false
    },
    {
      id: 2,
      name: "Ismoil",
      age: 20,
      status: false
    },
    {
      id: 3,
      name: "Ismoil",
      age: 20,
      status: false
    },
  ])

  let [nameEdit, setNameEdit] = useState("")
  let [ageEdit, setAgeEdit] = useState("")
  let [idx, setIdxEdit] = useState(null)
  let [statusEdit, setStatusEdit] = useState(null)
  let [serch, setserch] = useState("")
  let [select, setSelect] = useState("")


  let showEdit = (user) => {
    setNameEdit(user.name)
    setAgeEdit(user.age)
    setIdxEdit(user.id)
    setStatusEdit(user.status)
  }

  let handelEdit = (event) => {
    event.preventDefault()
    let obj = {
      id: idx,
      name: nameEdit,
      age: ageEdit,
      status: statusEdit
    };
    setData(data.map((e) => (e.id == idx ? obj : e)))
    setNameEdit("")
    setAgeEdit("")
    setIdxEdit(null)
    setStatusEdit(null)
  }

  function deleteUser(idd) {
    let filters = data.filter((el) => el.id != idd)
    setData(filters)
  }

  return (
    <>
      <div className='p-10'>
        {data
          .filter((e) => select == "true" ? e.status : select == "false" ? !e.status : e)
          .filter((e) => e.name.toLowerCase().includes(serch.trim().toLowerCase()))
          .map((user) => {
            return <div className='pt-10' key={user.id}>
              <h1>{user.name}</h1>
              <p>{user.age}</p>
              <p>{user.status ? "active" : "Inactive"}</p>
              <div className='flex gap-10'>
                <input type="checkbox" checked={user.status} className='border' onChange={() => setData(data.map((el) => el.id == user.id ? { ...el, status: !user.status } : el))} />
                <button className='border' onClick={() => showEdit(user)}>Edit</button>
                <button className='border' onClick={() => deleteUser(user.id)}>delete</button>
              </div>
            </div>
          })}
      </div>
      <div>
        <form onSubmit={handelEdit}>
          <input type="text" name='name' value={nameEdit} className='border' onChange={(e) => setNameEdit(e.target.value)} />
          <input type="text" name='age' value={ageEdit} className='border' onChange={(e) => setAgeEdit(e.target.value)} />
          <button type='submit'>sibmit</button>
        </form>

        <input type="search" className='m-10 border' value={serch} onChange={(e) => setserch(e.target.value)} />
        <select onChange={(e) => setSelect(e.target.value)}>
          <option value="">All</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      </div>
    </>
  )
}

export default App 
