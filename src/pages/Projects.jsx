import React from 'react'
import { projects } from '../data/mock.js'
export default function Projects() {
  return (
    <div className="bg-white rounded-2xl shadow">
      <div className="p-5 border-b font-semibold">Projects</div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left">Project</th>
              <th className="px-4 py-3 text-left">Client</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Deadline</th>
              <th className="px-4 py-3 text-left">Budget</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(p=>(
              <tr key={p.id} className="border-t">
                <td className="px-4 py-3">{p.name}</td>
                <td className="px-4 py-3">{p.client}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs ${p.status==='On Track'?'bg-green-100 text-green-700':''}${p.status==='At Risk'?'bg-amber-100 text-amber-700':''}${p.status==='Blocked'?'bg-rose-100 text-rose-700':''}`}>{p.status}</span>
                </td>
                <td className="px-4 py-3">{p.deadline}</td>
                <td className="px-4 py-3">${p.budget.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
