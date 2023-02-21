import style from '../scss/HomePage.module.scss';
import Orange from '../assets/boots/Orange.png';

export const Product = () => {
    return (
        <div className={style.product}>
            <img src={Orange} alt="Orange" className={style.product_img} />
            <div className={style.product_text}>
                <div className={style.product_title}></div>
                <div className={style.product_price}></div>
            </div>
        </div>
    );
}