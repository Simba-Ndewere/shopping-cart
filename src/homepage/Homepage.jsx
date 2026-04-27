import homepageCss from './Homepage.module.css';

const Homepage = () => {

    return (
        <>
            <div className={homepageCss.container}>
                <div className={homepageCss.header}>
                    <div className={homepageCss.imageHeader}></div>
                    <div className={homepageCss.titleButton}>
                        <p className={homepageCss.title}>A New Box Of Toys Every Month</p>
                        <p className={homepageCss.headerDescr}>We deliver boxes of fantastic handpicked appropriate toys books and puzzles straight to your door</p>
                        <div className={homepageCss.btn}>
                            <p className={homepageCss.headerButton}>Get Your Toys</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage;