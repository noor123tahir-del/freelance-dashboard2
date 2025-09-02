import React from 'react'
export default function Card({ title, value, footer, children }) {
  return (
    <div className="bg-white rounded-2xl shadow p-5">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="text-3xl font-semibold mt-1">{value}</div>
      {children}
      {footer && <div className="text-xs text-slate-400 mt-3">{footer}</div>}
    </div>
  )
}
