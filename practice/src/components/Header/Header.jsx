import style from './Header.module.scss';

import { ReactComponent as Basket } from '../../assets/icons/basket.svg';
import { ReactComponent as Instagram } from '../../assets/icons/Instagram.svg';
import { ReactComponent as BasketBlack } from '../../assets/icons/BasketBlack.svg';
import { ReactComponent as InstagramBlack } from '../../assets/icons/InstagramBlack.svg';

export const Header = () => {
    return (
        <header className={style.header} >
            <div className={style.header_nav}>
                <a href="./Page.jsx" className={style.header_text}>Shop</a>
            </div>
            <div className={style.header_icons}>
                <Basket alt="Basket" className={style.basket} />
                <Instagram alt="Instagram" className={style.instagram} />
                <BasketBlack alt="BasketBlack" className={style.basketBlack} />
                <InstagramBlack alt="InstagramBlack" className={style.instagramBlack} />
                <div className={style.header_number}>+1 (888) 888-88-88</div>
            </div>
        </header>
    );
}