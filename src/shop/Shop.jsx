import shopCss from './Shop.module.css'

const Shop = () => {
    return <>
        <div className={shopCss.container}>
            <div className={shopCss.toys}>Toys</div>
            <div className={shopCss.shop}>
                <div className={shopCss.image1}></div>
                <div className={shopCss.image1}></div>
                <div className={shopCss.image1}></div>
                <div className={shopCss.image1}></div>
                <div className={shopCss.image1}></div>
                <div className={shopCss.image1}></div>
                <div className={shopCss.image1}></div>
                <div className={shopCss.image1}></div>
                <div className={shopCss.image1}></div>
                <div className={shopCss.image1}></div>
                <div className={shopCss.image1}></div>
                <div className={shopCss.image1}></div>
            </div>
        </div>
    </>
}

export default Shop;