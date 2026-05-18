import biggertoysCss from './BiggerToys.module.css';
import image from '../../images/bigtoys.jpg'
const Biggertoys = () => {
    return (
        <>
            <div className={biggertoysCss.container}>
                <div className={biggertoysCss.toys}>
                    <div className={biggertoysCss.bigToys}>
                        <img className={biggertoysCss.image} src={image} />
                        <div className={biggertoysCss.cont}>
                            <div className={biggertoysCss.title}>Bigger Toys</div>
                            <div className={biggertoysCss.para}>Our members can borrow fully assembled larger items from just £10 a month each (minimum 2 months), with no packaging to throw away, or batteries to find. And when your kids have finished with them, they don’t take up valuable space in your home.</div>
                            <div className={biggertoysCss.btn}>
                                <p className={biggertoysCss.headerButton}>Go to Store</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Biggertoys;