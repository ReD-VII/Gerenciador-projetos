import {Outlet, Route, Routes} from 'react-router-dom'
import style from './StageShield.module.css'
// Paginas
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Company from '../pages/Company'
import NewProject from '../pages/NewProject'
function StageShield(){

    return(
        <main className={style.main_stage}>
            <Routes>
                <Route path="/page1" element={<Home/>}/>
                <Route path="/page2" element={<Contact/>}/>
                <Route path="/page3" element={<Company/>}/>
                <Route path="/page4" element={<NewProject/>}/>
            </Routes>
            <Outlet/>
        </main>
    )
}
export default StageShield

