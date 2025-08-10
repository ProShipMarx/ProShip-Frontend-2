export default function AuthPage() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow mt-10">
      <h2 className="text-2xl font-bold mb-4">Create your account</h2>
      <form className="space-y-3">
        <input className="w-full border p-2 rounded" placeholder="Email" />
        <input className="w-full border p-2 rounded" type="password" placeholder="Password" />
        <select className="w-full border p-2 rounded">
          <option value="carrier">Carrier</option>
          <option value="broker">Broker</option>
        </select>
        <button className="w-full bg-blue-600 text-white py-2 rounded">Sign up</button>
      </form>
      <p className="text-xs text-gray-500 mt-3">Auth is stubbed for MVP demo. Hook to /api/auth when ready.</p>
    </div>
  )
}
