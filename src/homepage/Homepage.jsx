import homepageCss from './Homepage.module.css';

const Homepage = () => {

    return (
        <>
            <div className={homepageCss.container}>
                <div className={homepageCss.header}>
                    <div className={homepageCss.imageHeader}></div>
                    <p className={homepageCss.title}>A New Box Of Toys Every Month</p>
                </div>
            </div>
        </>
    )
}

export default Homepage;