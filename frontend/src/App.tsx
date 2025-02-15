import { useState } from 'react'
import arrow from "../public/arrow.svg"
import { axiosInstance } from './function/axiosInstance'

function App() {

  const [code,setCode] = useState("")

  const onsubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
 const res:string =  await axiosInstance.post("/",{
    "code": code
  })
console.log(res)
  }


  return (
    <>
    <div className='flex bg-[#242424] gap-4 p-4 h-screen'>
      <form onSubmit={onsubmit} className='relative' >
  <textarea value={code} onChange={(e)=>setCode(e.target.value)} name="code" className='w-[50vw] text-white rounded-2xl h-[95vh] p-4 pl-6 bg-[#0a0a0a] resize-none'></textarea>
  <button type='submit' className=' cursor-pointer absolute bottom-4 right-4 text-white'><img src={arrow} className='bg-white rounded-3xl' alt="submit" /></button>
      </form>
  <div className='bg-[#343434] w-[50vw] rounded-2xl text-white p-4 pl-6'></div>
    </div>
    </>
  )
}

export default App
