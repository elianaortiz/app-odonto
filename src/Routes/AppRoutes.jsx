import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Favs from "./Favs"
import Detail from "./Detail"
import Contact from "./Contact"
import Home from "./Home"

const AppRoutes = () => {
    return (
            <Routes>
                <Route exact path={"/home"} element={<Home/>}/>
                <Route exact path={"/favs"} element={<Favs/>}/>
                <Route exact path={"/detail/:id"} element={<Detail/>}/>
                <Route exact path={"/contact"} element={<Contact/>}/>
            </Routes>
    )
}

export default AppRoutes