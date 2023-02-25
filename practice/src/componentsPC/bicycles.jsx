import style from '../scss/HomePage.module.scss';

export const Bicycles = () => {
    return (
        <section className={style.bicycles}>

            <div className={style.priceBlock}>
                <div className={style.bicycles_title}>
                    SEGWAY Ninebot Kickscooter MAX
                </div>
                <div className={style.warrantyBlock}>
                    <div className={style.warranty_title}>
                        Add an extended warranty from Extend
                    </div>
                    <div className={style.warranty_button}>

                    </div>
                    <div className={style.warranty_button}>

                    </div>
                    <div className={style.warranty_button}>

                    </div>
                </div>
            </div>

        </section>
    );
}
