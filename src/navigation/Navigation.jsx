import navigationCss from './Navigation.module.css';
import menuImg from '../images/menu.png';
import { useState } from 'react';

const Navigation = () => {

    const[menuClicked, setMenuClicked] = useState(false)

    return <>
        <div className={navigationCss.container}>
            <img className={navigationCss.menu} src={menuImg} />
            <div className={navigationCss.sidenav}>
                <a className={navigationCss.closebtn}>&times;</a>
                <a>About</a>
                <a>Services</a>
                <a>Clients</a>
                <a>Contact</a>
            </div>
        </div>
    </>
} 

export default Navigation;