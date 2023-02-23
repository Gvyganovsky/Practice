import style from '../scss/HomePage.module.scss';
import { ReactComponent as Basket } from '../assets/icons/basket.svg';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header_nav}>
                <Logo className={style.logo} />
                <a href="./Page.jsx" className={style.header_text}>Coffe</a>
                <a href="./Page.jsx" className={style.header_text}>Tea</a>
                <a href="./Page.jsx" className={style.header_text}>Menu</a>
            </div>
            <Basket className={style.basket} />
        </header>
    );
}
