import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Teams from './pages/Teams';
import U23 from './pages/U23';
import U19 from './pages/U19';

const App = () => {

  const [openSidebar, setOpenSidebar] = React.useState(true);

  return (
    <div className='myApp'>
      <div className="appLeft">
        <Sidebar openSidebar={openSidebar}/>
      </div>
      <div className="appRight">
        <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
        <Routes>
          <Route exact path='/' element={<Teams />} />
          <Route exact path='/u23' element={<U23 />} />
          <Route exact path='/u19' element={<U19 />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
