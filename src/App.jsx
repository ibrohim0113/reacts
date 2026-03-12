import React, { useState } from "react";

function App() {
  let [users, setUsers] = useState([
    {
      id: 1,
      name: "Jacob Jones",
      email: "jackson.graham@example.com",
      city: "Dushanbe",
      status: false,
      phone: "88888 0090",
      avatar: "https://i.pravatar.cc/150?u=1",
    },
    {
      id: 2,
      name: "Jenny Wilson",
      email: "jessica.hanson@example.com",
      city: "Kulob",
      status: false,
      phone: "88888 0090",
      avatar: "https://i.pravatar.cc/150?u=2",
    },
    {
      id: 3,
      name: "Guy Hawkins",
      email: "bill.sanders@example.com",
      city: "Dushanbe",
      status: false,
      phone: "88888 0090",
      avatar: "https://i.pravatar.cc/150?u=3",
    },
    {
      id: 4,
      name: "Cody Fisher",
      email: "michael.mitc@example.com",
      city: "Bokhtar",
      status: false,
      phone: "88888 0090",
      avatar: "https://i.pravatar.cc/150?u=4",
    },
    {
      id: 5,
      name: "Esther Howard",
      email: "felicia.reid@example.com",
      city: "Dushanbe",
      status: false,
      phone: "88888 0090",
      avatar: "https://i.pravatar.cc/150?u=5",
    },
    {
      id: 6,
      name: "Kristin Watson",
      email: "kenzi.lawson@example.com",
      city: "Khujand",
      status: false,
      phone: "88888 0090",
      avatar: "https://i.pravatar.cc/150?u=6",
    },
    {
      id: 7,
      name: "Dianne Russell",
      email: "deanna.curtis@example.com",
      city: "Dushanbe",
      status: false,
      phone: "88888 0090",
      avatar: "https://i.pravatar.cc/150?u=7",
    },
    {
      id: 8,
      name: "Ronald Richards",
      email: "tim.jennings@example.com",
      city: "Hisor",
      status: false,
      phone: "88888 0090",
      avatar: "https://i.pravatar.cc/150?u=8",
    },
  ]);

  function deleteUser(id) {
    let newUsers = users.filter((el) => el.id !== id);
    setUsers(newUsers);
  }

  let hendelSubmit = (event) => {
    event.preventDefault()
    let obj = {
      id: Date.now(),
      name: event.target["name"].value,
      email: event.target["email"].value,
      city: event.target["city"].value,
      phone: event.target["phone"].value,
      avatar: event.target["avatar"].value,
    }
    setUsers([...users, obj])
    event.target["name"].value = ""
    event.target["email"].value = ""
    event.target["city"].value = ""
    event.target["phone"].value = ""
    event.target["avatar"].value = ""
  }



  function editStatus(id) {
    let newUsers = users.map((el) => {
      if (el.id == id) {
        return { ...el, status: !el.status };
      }
      return el;
    });

    setUsers(newUsers);
    
  }
  function Edit(user) {
    
   
  }
  return (
    <>
      <div className=" p-8 bg-gray-50 min-h-screen">
        <div className="flex justify-center gap-[300px] ">
          <form className="flex-col flex gap-[5px] justify-center " onSubmit={hendelSubmit}>
            <input className="w-100 h-10 border-gray-500 border-2 rounded-[5px] pl-[5px]" type="text" placeholder="Name..." name="name" />
            <input className="mt-[14px] w-100 h-10 border-gray-500 border-2 rounded-[5px] pl-[5px]" type="text" placeholder="Email..." name="email" />
            <input className="mt-[14px] w-100 h-10 border-gray-500 border-2 rounded-[5px] pl-[5px]" type="text" placeholder="City..." name="city" />
            <input className="mt-[14px] w-100 h-10 border-gray-500 border-2 rounded-[5px] pl-[5px]" type="text" placeholder="Phone..." name="phone" />
            <input className="mt-[14px] w-100 h-10 border-gray-500 border-2 rounded-[5px] pl-[5px]" type="text" placeholder="Avatar..." name="avatar" />
            <button type="submit" className="ml-[130px] mt-5 w-30 bg-blue-500 border-2 cursor-pointer border-blue-700 mb-[100px]  rounded-[10px] text-white">Add New User</button>
          </form>
          <form  className="flex-col flex gap-[5px] justify-center" >
            <input className="w-[400px] h-10 border-gray-500 border-2 rounded-[5px] pl-[5px]" type="text" placeholder="Name..." name="name" />
            <input className="mt-[14px] w-100 h-10 border-gray-500 border-2 rounded-[5px] pl-[5px]" type="text" placeholder="Email..." name="email" />
            <input className="mt-[14px] w-100 h-10 border-gray-500 border-2 rounded-[5px] pl-[5px]" type="text" placeholder="City..." name="city" />
            <input className="mt-[14px] w-100 h-10 border-gray-500 border-2 rounded-[5px] pl-[5px]" type="text" placeholder="Phone..." name="phone" />
            <input className="mt-[14px] w-100 h-10 border-gray-500 border-2 rounded-[5px] pl-[5px]" type="text" placeholder="Avatar..." name="avatar" />
            <button type="submit" className="ml-[130px] mt-5 w-30 bg-blue-500 border-2 cursor-pointer border-blue-700 mb-[100px]  rounded-[10px] text-white">Edit User</button>
          </form>
        </div>
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl overflow-hidden ">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b text-gray-400 text-sm uppercase">
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Город</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Phone</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover shadow-sm"
                    />
                    <div>
                      <p className="font-bold text-gray-800">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {user.city}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded text-[10px] font-bold uppercase ${user.status == true
                        ? "bg-green-600 text-white"
                        : "bg-slate-400 text-white"}`}
                    >
                      {user.status ? "Active" : "Inactive"}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                    {user.phone}
                  </td>

                  <td className="px-6 py-4 text-right flex justify-end items-center gap-[10px]">
                    <input checked={user.status} onChange={() => editStatus(user.id)} className="cursor-pointer rounded-[40px] w-[20px] h-[20px] border-2 mr-[10px]" type="checkbox" />
                    <button onClick={()=>Edit(user)} className="text-blue-500 cursor-pointer">Edit</button>
                    <button onClick={() => deleteUser(user.id)} className="text-red-500 ml-3 cursor-pointer">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div >
    </>
  )

}
export default App;  