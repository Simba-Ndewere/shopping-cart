import cartCss from './Cart.module.css';
import shop1 from '../images/shop1.jpg';
import deleteIcon from '../images/delete.png';

const Cart = () => {
    return <>
        <div className={cartCss.container}>
            <div className={cartCss.title}>Cart</div>
            <div className={cartCss.cartCard}>
                <img src={shop1} className={cartCss.cartImage} />
                <div className={cartCss.cartInfo}>
                    <div className={cartCss.name}>Batmobile</div>
                    <div className={cartCss.price}>£89</div>
                    <div className={cartCss.quantites}>
                        <div className={cartCss.quantity}>
                            <div className={cartCss.decrement}> - </div>
                            <div className={cartCss.toyQuantity}>1</div>
                            <div className={cartCss.increment}> + </div>
                        </div>
                        <img src={deleteIcon} className={cartCss.deleteIcon} />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Cart;