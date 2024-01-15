import Menulist from "./Menulist"
import Container from "./Container"
import { Outlet } from "react-router-dom"

const Body = ()=>{
   return(
    <div className="flex grid grid-flow-col">
    <Menulist/>
    <Outlet/>
    </div>
   
   )
}
export default Body