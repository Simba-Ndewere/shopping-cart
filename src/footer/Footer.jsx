import footerCss from './Footer.module.css'

const Footer = () => {
    return (<>
        <div className={footerCss.container}>
            <div className={footerCss.footer}>
                <div className={footerCss.title}>
                    Subscribe Newsletter
                </div>
                <div className={footerCss.subscribe}>
                    <div className={footerCss.email}>Enter your email</div>
                    <div className={footerCss.subscribeBtn}>Subscribe</div>
                </div>
                <div className={footerCss.headers}>
                    <div className={footerCss.header}>
                        <p className={footerCss.headerTitle}>Browse Links</p>
                        <p>Browse Toys</p>
                        <p>Pricing</p>
                        <p>Gift</p>
                    </div>
                    <div className={footerCss.header}>
                        <p className={footerCss.headerTitle}>Ground Rules</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Shipping & Delivery</p>
                    </div>
                    <div className={footerCss.header}>
                        <p className={footerCss.headerTitle}>About Us</p>
                        <p>How It Works</p>
                        <p>Reviews</p>
                        <p>Blog</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Footer;