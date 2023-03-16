
import React from 'react';


import Home from './components/Home'
import ChatBot from './components/Chat'


import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
              
          <Route path="/Chat" element={<ChatBot/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App;


