import cartCss from './Cart.module.css';
import shop1 from '../images/shop1.jpg';
import deleteIcon from '../images/delete.png';

import { increment } from '../productUtils';
import { decrement } from '../productUtils';
import { deleteProduct } from '../productUtils';

import { useOutletContext } from "react-router";

const Cart = () => {

    const [cart, setCart] = useOutletContext();

    let totalAmount = 0;

    cart.forEach(element => {
        totalAmount = totalAmount + element.price * element.quantity;
    });

    console.log(totalAmount);

    return <div className={cartCss.contBackground}>
        <div className={cartCss.container}>
            <div className={cartCss.titleHeader}>Cart</div>

            <div className={cartCss.productBilling}>

                <div className={cartCss.cards}>

                    {cart.map((product) => {
                        return <div key={product.id} className={cartCss.cartCard}>
                            <img src={product.url} className={cartCss.cartImage} />
                            <div className={cartCss.cartInfo}>
                                <div className={cartCss.name}>{product.name}</div>
                                <div className={cartCss.price}>£{product.price}</div>
                                <div className={cartCss.quantites}>
                                    <div className={cartCss.quantity}>
                                        <div className={cartCss.decrement} onClick={() => decrement(cart, setCart, product.id)}> - </div>
                                        <div className={cartCss.toyQuantity}>{product.quantity}</div>
                                        <div className={cartCss.increment} onClick={() => increment(cart, setCart, product.id, product.price, product.url, product.title)}> + </div>
                                    </div>
                                    <img src={deleteIcon} className={cartCss.deleteIcon} />
                                </div>
                            </div>
                        </div>
                    })}


                </div>
                <div className={cartCss.checkout}>
                    <div className={cartCss.checkoutCont}>
                        <p className={cartCss.title}>Billing Summary</p>

                        <div className={cartCss.titleAmount}>
                            <p className={cartCss.code}>Promo-code</p>
                            <p className={cartCss.fee}>-£38</p>
                        </div>

                        <div className={cartCss.titleAmount}>
                            <p className={cartCss.delivery}>Delivery</p>
                            <p className={cartCss.fee}>£45</p>
                        </div>

                        <div className={cartCss.titleAmount}>
                            <p className={cartCss.tax}>Tax</p>
                            <p className={cartCss.fee}>£31</p>
                        </div>

                        <div className={cartCss.titleAmount}>
                            <p className={cartCss.amount}>Total</p>
                            <p className={cartCss.fee}>£ {totalAmount}</p>
                        </div>
                    </div>
                    <p className={cartCss.pay}>Proceed to checkout</p>
                </div>

            </div>
        </div>
    </div>
}

export default Cart;