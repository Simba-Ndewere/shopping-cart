import navigationCss from './Navigation.module.css';
import menuImg from '../images/menu.png';
import { Link } from "react-router";
import { useState } from 'react';

const Navigation = ({ cart }) => {

    const [menuClicked, setMenuClicked] = useState(false);

    let cartSize = 0;

    cart.forEach(product => {
        cartSize = cartSize + product.quantity;
    });

    return <div className={navigationCss.contBackground}>
        <div className={navigationCss.container}>
            <img className={navigationCss.menu} onClick={() => { setMenuClicked(!menuClicked) }} src={menuImg} />
            <div className={navigationCss.sidenav} style={{ width: menuClicked && 250 }}>
                <a className={navigationCss.closebtn} onClick={() => { setMenuClicked(!menuClicked) }}>&times;</a>
                <Link to='home'>Home</Link>
                <Link to='shop'>Store</Link>
                <div className={navigationCss.cartCont}>
                    <Link to='cart'>Cart</Link>
                    <a>{cartSize}</a>
                </div>
            </div>
        </div>
    </div>
}

export default Navigation;