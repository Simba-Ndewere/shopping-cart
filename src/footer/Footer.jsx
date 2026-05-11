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
            </div>
        </div>
    </>)
}

export default Footer;