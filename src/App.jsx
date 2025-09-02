import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Overview from './pages/Overview.jsx'
import Projects from './pages/Projects.jsx'
import Profile from './pages/Profile.jsx'
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/overview" replace />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}
