import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Card from '../components/Card.jsx'
import { stats, earningsByMonth, activities } from '../data/mock.js'
export default function Overview() {
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Total Projects" value={stats.totalProjects} footer="Active and archived combined" />
        <Card title="Earnings" value={"$"+stats.earnings.toLocaleString()} footer="Year to date" />
        <Card title="Tasks Due" value={stats.tasksDue} footer="Next 7 days" />
        <Card title="Clients" value={stats.clients} footer="Billable this month" />
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow p-5 lg:col-span-2">
          <div className="font-semibold mb-3">Monthly Earnings</div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={earningsByMonth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-5">
          <div className="font-semibold mb-3">Recent Activity</div>
          <ul className="space-y-3">
            {activities.slice(0,6).map(a=>(
              <li key={a.id} className="flex items-start justify-between">
                <div className="text-sm">{a.text}</div>
                <div className="text-xs text-slate-500">{a.time}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
