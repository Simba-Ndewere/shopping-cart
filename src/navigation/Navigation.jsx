import navigationCss from './Navigation.module.css';
import menuImg from '../images/menu.png';
import { useState } from 'react';

const Navigation = () => {

    const [menuClicked, setMenuClicked] = useState(false);
    
    return <>
        <div className={navigationCss.container}>
            <img className={navigationCss.menu} onClick={() => { setMenuClicked(!menuClicked) }} src={menuImg} />
            <div className={navigationCss.sidenav} style={{width : menuClicked && 250 }}>
                <a className={navigationCss.closebtn} onClick={() => { setMenuClicked(!menuClicked) }}>&times;</a>
                <a>Home</a>
                <a>Shop</a>
                <a>Cart</a>
            </div>
        </div>
    </>
}

export default Navigation;