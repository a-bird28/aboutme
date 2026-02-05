import { useState } from 'react'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Projects from './routes/Projects'
import Contact from './routes/Contact'
import About from './routes/About'

function App() {
  return <BrowserRouter>
      <header className='siteHeader'>
          <h1 className='red title'>Anna Byrd</h1>
          <nav>
              <ul className='navList'>
                  <li><a href="/projects" className='navlink green'>Projects</a></li>
                  <li><a href="/about" className='navlink blue'>About</a></li>
                  <li><a href="/contact" className='navlink pink'>Contact</a></li>
              </ul>
          </nav>
      </header>
      <Routes>
        {/* All the end points goes here */}
        <Route path='/' index element={<Home />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact /> } />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>;
}

export default App;
