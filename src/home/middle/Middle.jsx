import middleCss from './Middle.module.css';
import toy1 from '../../images/toy1.png';
import toy2 from '../../images/toy2.png';
import toy3 from '../../images/toy3.png';

const Middle = () => {
    return (
        <>
            <div className={middleCss.container}>
                <div className={middleCss.middle}>
                    <div className={middleCss.title}>How to Buy?</div>
                    <div className={middleCss.icons}>
                        <div className={middleCss.icon}>
                            <img className={middleCss.iconImage1} src={toy1} />
                            <div className={middleCss.iconTitle1}>Choose a Toy</div>
                            <div className={middleCss.iconDescr1}>Pick from over 1000  <br />of the latest must haves.</div>
                        </div>
                        <div className={middleCss.icon}>
                            <img className={middleCss.iconImage1} src={toy2} />
                            <div className={middleCss.iconTitle1}>Make Play & Learn</div>
                            <div className={middleCss.iconDescr1}>Kid led discovery that <br /> sparks magination.</div>
                        </div>
                        <div className={middleCss.icon}>
                            <img className={middleCss.iconImage1} src={toy3} />
                            <div className={middleCss.iconTitle1}>Swap & Repeat</div>
                            <div className={middleCss.iconDescr1}>Return any unloved toy <br /> & swap it.</div>
                        </div>
                    </div>
                    <div className={middleCss.btn}>
                        <p className={middleCss.headerButton}>Get Started</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Middle;