import middleCss from './Middle.module.css';

const Middle = () => {
    return (
        <>
            <div className={middleCss.container}>
                <div className={middleCss.middle}>
                    <div className={middleCss.title}>
                        How to Buy?
                    </div>
                </div>
            </div>
        </>
    )
}

export default Middle;