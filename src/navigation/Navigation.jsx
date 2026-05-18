import navigationCss from './Navigation.module.css';
import menuImg from '../images/menu.png';
import closeImg from '../images/close.png';
import { useState } from 'react';

const Navigation = () => {

    const [menuClicked, setMenuClicked] = useState(false);

    console.log(menuClicked);
    return <>
        <div className={navigationCss.container}>
            <img className={navigationCss.menu} onClick={() => { setMenuClicked(!menuClicked) }} src={menuImg} />
            <div className={navigationCss.sidenav} style={{width : menuClicked ? 250 : 0}}>
                <a className={navigationCss.closebtn}>&times;</a>
                <img className={navigationCss.closeMenu} onClick={() => { setMenuClicked(!menuClicked) }} src={closeImg} />
                <a>About</a>
                <a>Services</a>
                <a>Clients</a>
                <a>Contact</a>
            </div>
        </div>
    </>
}

export default Navigation;