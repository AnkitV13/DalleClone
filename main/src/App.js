import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home, CreatePost } from './pages'
import StarsCanvas from './components/Stars'


const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-[#1e1b4b] sm:px-8 px-4 py-4 border-b border-b-[#3b0764]">
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/2560px-OpenAI_Logo.svg.png" alt="logo" className="w-28 object-contain" />
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-[#add8e6] text-[#1e1b4b] px-4 py-2 rounded-md">Create</Link>
    </header>

    <main className="sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)]">
      <StarsCanvas/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App