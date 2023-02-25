import style from '../scss/HomePage.module.scss';

export const Product = (props) => {
    return (
        <div className={style.product} id={props.id}>
            <img src={props.img} alt={props.img} className={style.product_img} />
            <div className={style.product_title}>{props.title}</div>
        </div>
    );
}
