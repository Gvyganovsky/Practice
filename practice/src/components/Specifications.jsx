import style from '../scss/HomePage.module.scss';
import DM from '../assets/Photo/DM.png'
import { ReactComponent as ToolsGray } from '../assets/icons/ToolsGray.svg';
import { ReactComponent as Charging } from '../assets/icons/Charging.svg';
import { ReactComponent as Wheel } from '../assets/icons/Wheel.svg';
import { ReactComponent as Page } from '../assets/icons/page.svg';

export const Specificationss = (props) => {
    return (
        <div className={style.accessories_block} id={props.id}>
            <img src={props.img} alt={props.img} className={style.accessories_img} />
            <div className={style.accessories_name}>{props.name}</div>
            <div className={style.accessories_text}>{props.text}</div>
            <div className={style.accessories_price}>{props.price}</div>
            <button className={style.accessories_button}>ADD TO CART</button>
        </div>
    );
}

export const Specifications = () => {
    return (
        <section className={style.downloadmanual}>

        </section>
    );
}
