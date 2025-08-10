import { useState } from 'react'
import { postTruck } from '../api'

export default function PostTruckPage() {
  const [form, setForm] = useState({ location:'', equipment:'', date:'', contact:'' })
  const [msg, setMsg] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await postTruck(form)
      setMsg('Truck posted (or simulated).')
    } catch (e) {
      setMsg('Post failed (using mock).')
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow mt-10">
      <h2 className="text-xl font-semibold mb-4">Post a Truck</h2>
      <form className="grid gap-3" onSubmit={onSubmit}>
        {['location','equipment','date','contact'].map(k => (
          <input key={k} className="w-full border p-2 rounded" placeholder={k} type={k==='date'?'date':'text'}
            value={form[k]}
            onChange={(e)=>setForm({...form,[k]:e.target.value})} />
        ))}
        <button className="bg-green-600 text-white py-2 rounded">Submit</button>
      </form>
      {msg && <p className="mt-3 text-sm text-gray-600">{msg}</p>}
    </div>
  )
}
