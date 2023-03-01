import style from '../../scss/PC.module.scss';

import { ReactComponent as Basket } from '../../assets/icons/basket.svg';
import { ReactComponent as Instagram } from '../../assets/icons/Instagram.svg';

export const Header = () => {
    return (
        <header className={style.header} >
            <div className={style.header_nav}>
                <a href="./Page.jsx" className={style.header_text}>Shop</a>
                <a href="./Page.jsx" className={style.header_text}>Contact</a>
            </div>
            <div className={style.header_icons}>
                <Basket alt="Basket" className={style.basket} />
                <Instagram alt="Instagram" className={style.instagram} />
                <div className={style.header_number}>+1 (888) 888-88-88</div>
            </div>
        </header>
    );
}