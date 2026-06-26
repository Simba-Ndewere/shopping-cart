import shopCss from './Shop.module.css';

import { useEffect, useState } from 'react';
import { useOutletContext } from "react-router";
import { increment } from '../productUtils';
import { decrement } from '../productUtils';

const Shop = () => {

    const productArray = ["", "", "", "", "", "", "", "", "", "", "", ""];
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useOutletContext();

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/smartphones/?delay=2000')
            .then((res) => res.json())
            .then((res) => setProducts(res.products));
    }, []);

    return <div className={shopCss.contBackground}>

        <div className={shopCss.container}>
            <div className={shopCss.toys}>Store</div>
            <div className={shopCss.shop}>

                {products.length != 0 ? productArray.map((product, index) => {
                    return <div key={products[index].id} className={shopCss.toyCont}>
                        <img className={shopCss.image1} src={products[index].images[1]} />
                        <div className={shopCss.title}>{products[index].title}</div>
                        <div className={shopCss.description}>{products[index].description}</div>
                        <div className={shopCss.priceQuantity}>
                            <div className={shopCss.price}>{products[index].price}</div>
                            <div className={shopCss.quantity}>
                                <div className={shopCss.decrement} onClick={() => decrement(cart, setCart, products[index].id)}> - </div>
                                <div className={shopCss.toyQuantity}>1</div>
                                <div className={shopCss.increment} onClick={() => increment(cart, setCart, products[index].id, products[index].price, products[index].images[1], products[index].title)}> + </div>
                            </div>
                        </div>
                    </div>
                }) : <div>Loading..</div>}
            </div>
        </div>
    </div>
}

export default Shop;