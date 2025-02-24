import {useState} from "react"
import ham from "../../assets/ham.png"
import x from "../../assets/x.png"
import "./navbar.css"


const Navbar = () => {

    const [open, setOpen] = useState(true)

    const change =()=>{
        setOpen(!open)
    }
    return (
        <div className="navbar">
    
        <div className ="navbar__menu" onClick={change}>
        { open?<img className="navbar__image" src={ham} /> :<img className="navbar__image" src={x} />}
        </div>
        <div className={open?"navbar__list__none":"navbar__list"}>
            <ul className="navbar__list__names">
                <li> Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blogs</li>
                <li>Policy</li>
            </ul>
        </div>
        </div>
    )
}

export default Navbar