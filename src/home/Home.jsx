import homeCss from './Home.module.css';

const Home = () => {

    return (
        <>
            <div className={homeCss.container}>
                <div className={homeCss.header}>
                    <div className={homeCss.imageHeader}></div>
                    <div className={homeCss.titleButton}>
                        <p className={homeCss.title}>A New Box Of Toys Every Month</p>
                        <p className={homeCss.headerDescr}>We deliver boxes of fantastic handpicked appropriate toys books and puzzles straight to your door</p>
                        <div className={homeCss.btn}>
                            <p className={homeCss.headerButton}>Get Your Toys</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;