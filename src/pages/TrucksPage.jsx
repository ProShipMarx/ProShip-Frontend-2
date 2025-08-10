import { useEffect, useState } from 'react'
import { getTrucks } from '../api'

export default function TrucksPage() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const data = await getTrucks()
      setItems(data)
      setLoading(false)
    })()
  }, [])

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Available Trucks</h2>
      {loading ? <p>Loading…</p> : (
        <div className="grid gap-3">
          {items.map((it, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-4">
              <div className="font-medium">{it.location}</div>
              <div className="text-sm text-gray-600">Equip: {it.equipment} · Date: {it.date}</div>
              <div className="text-xs text-gray-500">Contact: {it.contact}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
