import { Route, Routes } from "react-router-dom"
import { Home } from "../../notes/components/Home"
import { Add } from "../../notes/components/Add"
import { List } from "../../notes/components/List"
import {Arrange} from "../../notes/components/Arrange"
import { Search } from "../../notes/components/search"
export const Main = ()=>{
    return (<div className="bg-">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/view-all" element={<List/>}/>
            <Route path="/Arrange" element={<Arrange/>}/>
            <Route path="/Search" element={<Search/>}/>
        </Routes>
    </div>)
}