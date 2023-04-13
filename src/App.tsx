
import Home from './pages/Home/home';
import "./scss/app.scss";
import Layout from './layout';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import { useState } from 'react';
//@ts-ignore
export const MyContext = React.createContext();

function App() {

  const [openMenu, setOpenMenu] = useState(false)


  return (
    <div className="App">
      <MyContext.Provider value={{ openMenu, setOpenMenu }}>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />}></Route>

          </Route>
        </Routes>
      </MyContext.Provider>

    </div>
  );
}

export default App;
