import shopCss from './Shop.module.css'
import shop1 from '../images/shop1.jpg';
import shop2 from '../images/shop2.jpg';
import shop3 from '../images/shop3.jpg';
import shop4 from '../images/shop4.jpg';
import shop5 from '../images/shop5.jpg';
import shop6 from '../images/shop6.jpg';
import shop7 from '../images/shop7.jpg';
import shop8 from '../images/shop8.jpg';
import shop9 from '../images/shop9.jpg';
import shop10 from '../images/shop10.jpg';
import shop11 from '../images/shop11.jpg';
import shop12 from '../images/shop12.jpg';

const Shop = () => {
    return <>
        <div className={shopCss.container}>
            <div className={shopCss.toys}>Toys</div>
            <div className={shopCss.shop}>
                <img className={shopCss.image1} src={shop1}/>
                <img className={shopCss.image1} src={shop2}/>
                <img className={shopCss.image1} src={shop3}/>
                <img className={shopCss.image1} src={shop4}/>
                <img className={shopCss.image1} src={shop5}/>
                <img className={shopCss.image1} src={shop6}/>
                <img className={shopCss.image1} src={shop7}/>
                <img className={shopCss.image1} src={shop8}/>
                <img className={shopCss.image1} src={shop9}/>
                <img className={shopCss.image1} src={shop10}/>
                <img className={shopCss.image1} src={shop11}/>
                <img className={shopCss.image1} src={shop12}/>
            </div>
        </div>
    </>
}

export default Shop;