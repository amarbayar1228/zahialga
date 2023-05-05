import { Link } from "react-router-dom";
import css from "./style.module.css"
const Sidebar = () =>{
    const logout  = () =>{ 
        localStorage.removeItem("idToken")
        localStorage.removeItem("localId")
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("expireDate")
        document.location.replace("/");
    }
    return<div className="blog-sidebar">
        <div className="widget">
            <h4 className="sidebar-title">Хэрэгсэл</h4>
            <div className="sidebar-cat-list"> 
                <Link to="/dashboard"> <div className={css.Links}><div>Хяналтын самбар</div> <i className="fas fa-angle-double-right" /></div></Link>
                <Link to="/add-item"><div className={css.Links}><div>Бараа нэмэх</div> <i className="fas fa-angle-double-right" /></div></Link>
                <Link to="/dog-add"><div className={css.Links}><div>Нохой нэмэх</div> <i className="fas fa-angle-double-right" /></div></Link>
                <div className={css.Links}>
                    <div>Захиалгын түүх</div>
                    <i className="fas fa-angle-double-right" />
                </div>
                <div className={css.Links}>
                    <div>Лог</div>
                    <i className="fas fa-angle-double-right" />
                </div>
                <div className={css.Links}>
                    <div>Тохиргоо</div>
                    <i className="fas fa-angle-double-right" />
                </div>  
                 
                <div className={css.Links} onClick={logout}> 
                    <div>Гарах</div>
                    <i className="fas fa-angle-double-right" />
                </div> 
            </div>
        </div>
    </div>
}
export default Sidebar;