import {Link, Outlet} from 'react-router-dom'
import style from './Header.module.css'


function Header(){

    return(
        <div className={style.Header_Content}>
            <nav>
                <ul>
                    <Link to='/page1' className={style.links}>Page 1</Link>
                    <Link to='/page2' className={style.links}>Page 2</Link>
                    <Link to='/page3' className={style.links}>Page 3</Link>
                    <Link to='/page4' className={style.links}>Page 4</Link>
                </ul>
            </nav>
        </div>
    )
}
export default Header