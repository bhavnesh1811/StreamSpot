import React from 'react'
import {Routes,Route} from "react-router-dom";
import Search from '../Pages/Search';
import Home from '../Pages/Home';
import SingleMoviePage from '../Pages/SingleMoviePage';
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/search' element={<Search/>}></Route>
            <Route path='/movies/:id' element={<SingleMoviePage/>}></Route>
        </Routes>

    </div>
  )
}

export default AllRoutes