import navigationCss from './Navigation.module.css';
import menuImg from '../images/menu.png';

const Navigation = () => {
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