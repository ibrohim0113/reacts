import React, { useState } from 'react'


function App() {

  let [users, setUsers] = useState([
    {
      "id": 1,
      "name": "Alex Rivera",
      "age": 28,
      "status": true,
      "city": "New York",
      "about": "Full-stack developer with a passion for high-performance React components."
    },
    {
      "id": 2,
      "name": "Jordan Lee",
      "age": 34,
      "status": false,
      "city": "London",
      "about": "Digital nomad focusing on minimalist UX design and accessibility."
    },
    {
      "id": 3,
      "name": "Sarah Chen",
      "age": 25,
      "status": true,
      "city": "Singapore",
      "about": "Data scientist specializing in machine learning and predictive modeling."
    },
    {
      "id": 4,
      "name": "Marcus Thorne",
      "age": 41,
      "status": false,
      "city": "Berlin",
      "about": "Product manager with 10+ years experience in fintech and crypto."
    },
    {
      "id": 5,
      "name": "Elena Rossi",
      "age": 30,
      "status": true,
      "city": "Milan",
      "about": "Graphic designer and illustrator who loves vibrant color palettes."
    },
  ]);

  let [editName, setEditName] = useState("")
  let [editAge, setEditAge] = useState("")
  let [editStatu, setEditStatus] = useState("")
  let [editAbout, setEditAbout] = useState("")
  let [editCity, setEditCity] = useState("")
  let [idx, setIdx] = useState(null)


  function deleteUser(id) {
    setUsers(users.filter((el) => el.id != id))
  }

  function editStatus(id) {
    setUsers(users.map((el) => el.id == id ? { ...el, status: !el.status } : el))
  }
  let addUser = (event) => {
    event.preventDefault()
    let obj = {
      "id": Date.now(),
      "name": event.target["name"].value,
      "age": event.target["age"].value,
      "status": false,
      "city": event.target["city"].value,
      "about": event.target["about"].value,
    }
    setUsers([obj, ...users])
  }

  function editNN(user) {
    setEditName(user.name)
    setEditAge(user.age)
    setEditAbout(user.about)
    setEditCity(user.city)
  }


  return (
    <>
      <div className='min-h-screen bg-gray-50 pb-100'>
        <div>
          <div className='flex items-center ml-30 mr-30 justify-between'>
            <form className='flex flex-col ' onSubmit={addUser}>
              <h1 className='text-[20px] pl-30 '>Add New User</h1>
              <input className='border w-100 h-8 rounded-md mt-4 pl-2' type="text" placeholder='Name...' name='name' />
              <input className='border w-100 h-8 mt-4 rounded-md pl-2' type="text" placeholder='Age...' name='age' />
              <input className='border w-100 h-8 mt-4 rounded-md pl-2' type="text" placeholder='City...' name='city' />
              <input className='border w-100 h-8 mt-4 rounded-md pl-2' type="text" placeholder='About...' name='about' />
              <button className='border w-100 h-11 mt-4 rounded-md bg-blue-500 text-white ' type='submit'> Add New USer</button>
            </form>
            <div className='flex flex-col items-center gap-5'>
              <input type="text" placeholder='Search By Name' className='w-60 pl-2 rounded-md h-10 border' />
              <select className='border w-60 h-10 rounded-md'  >
                <option value="">All Status</option>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>
            <form className='flex flex-col ' onSubmit={editUser}>
              <h1 className='text-[20px] pl-30'>Add New User</h1>
              <input placeholder='Serch' value={editName} onChange={(e) => setEditName(e.target.value)} className='pl-2 border w-100 h-8 rounded-md mt-4' type="text" />
              <input placeholder='Serch' value={editAge} onChange={(e) => setEditAge(e.target.value)} className='pl-2 border w-100 h-8 mt-4 rounded-md' type="text" />
              <input placeholder='Serch' value={editAbout} onChange={(e) => setEditAbout(e.target.value)} className='pl-2 border w-100 h-8 mt-4 rounded-md' type="text" />
              <input placeholder='Serch' value={editCity} onChange={(e) => setEditCity(e.target.value)} className='pl-2 border w-100 h-8 mt-4 rounded-md' type="text" />
              <button className='border w-100 h-11 mt-4 rounded-md bg-blue-500 text-white '> Add New USer</button>
            </form>
          </div>
        </div>
        <div className="p-10  flex justify-center">
          <div className="w-300 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <table className="w-full table-fixed border-collapse">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-200">
                  <th className="w-50 px-8 py-5 text-left text-[13px] font-black text-gray-500 uppercase tracking-widest">Name</th>
                  <th className="w-20 px-6 py-5 text-left text-[13px] font-black text-gray-500 uppercase tracking-widest">Age</th>
                  <th className="w-35 px-6 py-5 text-left text-[13px] font-black text-gray-500 uppercase tracking-widest">Status</th>
                  <th className="w-45 px-6 py-5 text-left text-[13px] font-black text-gray-500 uppercase tracking-widest">City</th>
                  <th className="px-6 py-5 text-left text-[13px] font-black text-gray-500 uppercase tracking-widest">About</th>
                  <th className="w-55 px-8 py-5 text-right text-[13px] font-black text-gray-500 uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users
                  .map((user) => (
                    <tr key={user.id} className={`transition-all duration-300 ${user.status ? 'bg-white' : 'bg-gray-50/50 opacity-80'}`}>
                      <td className="px-8 py-6 text-[15px] font-bold text-slate-800">{user.name}</td>
                      <td className="px-6 py-6 text-[15px] text-slate-500 font-medium">{user.age}</td>

                      <td className="px-6 py-6">
                        <label className="relative inline-flex items-center cursor-pointer group">

                          <span onClick={() => editStatus(user.id)} className={`ml-3 text-[12px] font-bold uppercase tracking-tight transition-colors ${user.status ? 'text-emerald-600' : 'text-slate-400'}`}>
                            {user.status ? 'Active' : 'Offline'}
                          </span>
                        </label>
                      </td>

                      <td className="px-6 py-6 text-[15px] text-slate-600">{user.city}</td>
                      <td className="px-6 py-6 text-[14px] text-slate-400 italic font-light truncate">
                        "{user.about}"
                      </td>

                      <td className="px-8 py-6">
                        <div className="flex justify-end gap-2">
                          <button onClick={() => editNN(user)} className="px-5 py-2 bg-blue-600 text-white text-[13px] font-bold rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95">
                            Edit
                          </button>
                          <button onClick={() => deleteUser(user.id)} className="px-5 py-2 bg-white text-red-500 border border-red-100 text-[13px] font-bold rounded-lg hover:bg-red-50 transition-all active:scale-95">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div >
    </>
  );
};

export default App;