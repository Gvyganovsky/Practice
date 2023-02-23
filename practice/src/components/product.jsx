import style from '../scss/HomePage.module.scss';

export const Product = (props) => {
    return (
        <div className={style.product} id={props.id}>
            <img src={props.img} alt={props.img} className={style.product_img} />
            <div className={style.product_text}>
                <div className={style.product_title}>{props.name}</div>
                <div className={style.product_calories}>Calories</div>
                <div className={style.product_caloriesBlock}>
                    <div className={style.product_calories}>Total Fat 19g</div>
                    <div className={style.product_calories}>{props.Fat}</div>
                </div>
                <div className={style.product_caloriesBlockSecond}>
                    <div className={style.product_calories}>Saturated Fat 13 g</div>
                    <div className={style.product_calories}>{props.Saturated}</div>
                </div>
                <div className={style.product_caloriesBlockSecond}>
                    <div className={style.product_calories}>Trans Fat {props.gramm}</div>
                </div>
            </div>
        </div>
    );
}
