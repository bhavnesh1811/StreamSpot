import React from 'react'
import {Routes,Route} from "react-router-dom";
import Search from '../Pages/Search';
import Home from '../Pages/Home';
import SingleMoviePage from '../Pages/SingleMoviePage';
import Login from '../Pages/Login';
import Video from '../Pages/Video';
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/search' element={<Search/>}></Route>
            <Route path='/movies/:id' element={<SingleMoviePage/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/video/' element={<Video/>}></Route>
        </Routes>

    </div>
  )
}

export default AllRoutes