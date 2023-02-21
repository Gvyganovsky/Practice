import style from '../scss/HomePage.module.scss';

export const Product = (props) => {
    return (
        <div className={style.product} id='props'>
            <img src={props.img} alt={props.img} className={style.product_img} />
            <div className={style.product_text}>
                <div className={style.product_title}>{props.name}</div>
                <div className={style.product_price}>{props.price}</div>
            </div>
        </div>
    );
}
