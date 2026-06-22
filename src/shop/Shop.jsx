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
import { useEffect, useState } from 'react';


const Shop = () => {

    const toysArray = [shop1, shop2, shop3, shop4, shop5, shop6, shop7, shop8, shop9, shop10, shop11, shop12];
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/smartphones')
            .then((res) => res.json())
            .then((res) => setProducts(res.products));
    }, []);

    console.log(products);

    return <div className={shopCss.contBackground}>
        <div className={shopCss.container}>
            <div className={shopCss.toys}>Store</div>
            <div className={shopCss.shop}>

                {toysArray.map((toy) => {
                    return <div key = {1} className={shopCss.toyCont}>
                        <img className={shopCss.image1} src={toy} />
                        <div className={shopCss.title}>Batmobile</div>
                        <div className={shopCss.priceQuantity}>
                            <div className={shopCss.price}>£49</div>
                            <div className={shopCss.quantity}>
                                <div className={shopCss.decrement}> - </div>
                                <div className={shopCss.toyQuantity}>1</div>
                                <div className={shopCss.increment}> + </div>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </div>
    </div>
}

export default Shop;