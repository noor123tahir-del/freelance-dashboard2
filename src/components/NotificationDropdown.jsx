import React, { useState } from 'react'
import { activities } from '../data/mock.js'
export default function NotificationDropdown() {
  const [open, setOpen] = useState(false)
  const recent = activities.slice(0,3)
  return (
    <div className="relative">
      <button onClick={()=>setOpen(o=>!o)} className="px-3 py-2 rounded-xl bg-slate-900 text-white">Notifications</button>
      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-xl border z-20">
          <div className="p-3 text-sm font-semibold border-b">Recent Activity</div>
          <ul className="max-h-60 overflow-auto">
            {recent.map(a=>(
              <li key={a.id} className="px-3 py-2 text-sm hover:bg-slate-50">
                <div className="font-medium">{a.text}</div>
                <div className="text-xs text-slate-500">{a.time}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
