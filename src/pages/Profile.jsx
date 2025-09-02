import React, { useState } from 'react'
export default function Profile() {
  const [form, setForm] = useState({ name: 'Alex Freelancer', email: 'alex@studio.co', password: '' })
  function update(e) { setForm({ ...form, [e.target.name]: e.target.value }) }
  function submit(e) { e.preventDefault(); alert('Saved') }
  return (
    <form onSubmit={submit} className="max-w-xl space-y-4">
      <div>
        <label className="block text-sm text-slate-600">Name</label>
        <input name="name" value={form.name} onChange={update} className="w-full mt-1 px-3 py-2 border rounded-xl" />
      </div>
      <div>
        <label className="block text-sm text-slate-600">Email</label>
        <input name="email" value={form.email} onChange={update} className="w-full mt-1 px-3 py-2 border rounded-xl" />
      </div>
      <div>
        <label className="block text-sm text-slate-600">Password</label>
        <input name="password" type="password" value={form.password} onChange={update} className="w-full mt-1 px-3 py-2 border rounded-xl" />
      </div>
      <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white">Save</button>
    </form>
  )
}
