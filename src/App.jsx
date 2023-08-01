import React from 'react';
import HeaderComponent from './components/Header/HeaderComponent.jsx';
import EpisodeList from './components/Main/EpisodeList.jsx';
import { Outlet, Route, Routes } from 'react-router-dom';
import DetailedDescription from './components/DetailedDescription/DetailedDescription.jsx';


const App = () => {
  function Layout() {
    return (
      <div className="App">
        <HeaderComponent/>
        <main>
          <Outlet />
        </main>
      </div>
    )
  }
    return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='' element={<EpisodeList/>}/>
          <Route path="/list/:id" element={<DetailedDescription/>}/>
        </Route>
      </Routes>

    )
}

export default App