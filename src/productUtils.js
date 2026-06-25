export function increment(cart, setCart, productId, price) {
    if (!cart.find(({ id }) => id === productId)) {
        setCart([
            ...cart,
            {
                id: productId,
                quantity: 1,
                price: price
            }
        ])
    } else {
        setCart(cart.map(product => {
            if (productId == product.id) {
                const quantityVal = product.quantity;
                return { ...product, quantity: quantityVal + 1 }
            } else {
                return product;
            }
        }))
    }
}

export function decrement(cart, setCart, productId) {
    const product = cart.find(({ id }) => id === productId);
    if (product) {
        product.quantity > 1 ?
            setCart(cart.map(product => {
                if (productId == product.id) {
                    let quantityVal = product.quantity;
                    return { ...product, quantity: quantityVal - 1 }
                } else {
                    return product;
                }
            })) : setCart(
                cart.filter(a => a.id !== productId)
            );
    }
}

export function deleteProduct(cart, setCart, productId) {
    setCart(
        cart.filter(a => a.id !== productId)
    );
}