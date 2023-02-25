import style from '../scss/HomePage.module.scss';

export const Detals = (props) => {
    return (
        <div className={style.detals}>
            <div className={style.detals_block_text}>
                <div className={style.detals_title}>{props.title}</div>
                <div className={style.detals_text}>{props.text}</div>
                <button></button>
            </div>

            <div className={style.detals_block_img}>
                <img src={props.img} alt={props.img} />
                <div className={style.detals_price}>{props.price}</div>
            </div>
        </div>
    );
}
