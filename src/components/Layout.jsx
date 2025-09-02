import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import NotificationDropdown from './NotificationDropdown.jsx'
export default function Layout() {
  const [open, setOpen] = useState(true)
  const linkBase = 'px-3 py-2 rounded-lg block'
  const linkActive = 'bg-indigo-600 text-white'
  const linkIdle = 'text-slate-700 hover:bg-slate-100'
  return (
    <div className="min-h-screen grid grid-cols-[auto_1fr]">
      <aside className={`bg-white border-r ${open ? 'w-64' : 'w-16'} transition-all`}>
        <div className="p-4 flex items-center justify-between">
          <div className="text-xl font-bold">Admin</div>
          <button aria-label="toggle" className="text-sm" onClick={() => setOpen(v=>!v)}>{open?'⟨':'⟩'}</button>
        </div>
        <nav className="px-3 space-y-2">
          <NavLink to="/overview" className={({isActive})=>`${linkBase} ${isActive?linkActive:linkIdle}`}>Overview</NavLink>
          <NavLink to="/projects" className={({isActive})=>`${linkBase} ${isActive?linkActive:linkIdle}`}>Projects</NavLink>
          <NavLink to="/profile" className={({isActive})=>`${linkBase} ${isActive?linkActive:linkIdle}`}>Profile</NavLink>
        </nav>
      </aside>
      <div className="flex flex-col">
        <header className="h-16 bg-white border-b px-4 flex items-center justify-between">
          <div className="font-semibold">Freelance Client Dashboard</div>
          <NotificationDropdown />
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
