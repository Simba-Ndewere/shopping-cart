import homeCss from './Home.module.css';
import { Link } from "react-router";

const Home = () => {

    return (
        <>
            <div className={homeCss.container}>
                <div className={homeCss.header}>
                    <div className={homeCss.imageHeader}></div>
                    <div className={homeCss.titleButton}>
                        <p className={homeCss.title}>The Latest Smartphones At Great Prices</p>
                        <p className={homeCss.headerDescr}>Discover premium smartphones from the world's leading brands.
                            Find the perfect device for work, gaming, photography, and everyday life.</p>
                        <div className={homeCss.btn}>
                            <Link to='/shop' className={homeCss.headerButton}>Shop Phones</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;