import shopCss from './Shop.module.css';

import { useEffect, useState } from 'react';
import { useOutletContext } from "react-router";
import { increment, decrement } from '../productUtils';

const Shop = () => {

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

                {products.length != 0 ? products.map((product) => {

                    const cartItem = cart.find(({ id }) => id === product.id);

                    return <div key={product.id} className={shopCss.toyCont}>
                        <img className={shopCss.image1} src={product.images[1]} />
                        <div className={shopCss.title}>{product.title}</div>
                        <div className={shopCss.description}>{product.description}</div>
                        <div className={shopCss.priceQuantity}>
                            <div className={shopCss.price}>{product.price}</div>
                            <div className={shopCss.quantity}>
                                <div className={shopCss.decrement} onClick={() => decrement(cart, setCart, product.id)}> - </div>
                                <div className={shopCss.toyQuantity}> {cartItem ? cartItem.quantity : 0}
                                </div>
                                <div className={shopCss.increment} onClick={() => increment(cart, setCart, product.id, product.price, product.images[1], product.title)}> + </div>
                            </div>
                        </div>
                    </div>
                }) : <div>Loading..</div>}
            </div>
        </div>
    </div>
}

export default Shop;