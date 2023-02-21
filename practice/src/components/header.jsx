import style from '../scss/HomePage.module.scss';
import logo from '../assets/icons/logo.png';
import { ReactComponent as Basket } from '../assets/icons/basket.svg';

export const Header = () => {
    return (
        <header className={style.header}>
            <img src={logo} alt="logo" className={style.logo} />
            <div className={style.header_nav}>
                <a href="./Page.jsx" className={style.header_text}>Home</a>
                <a href="./Page.jsx" className={style.header_text}>Home</a>
                <a href="./Page.jsx" className={style.header_text}>Home</a>
                <a href="./Page.jsx" className={style.header_text}>Home</a>
            </div>
            <Basket className={style.basket} />
        </header>
    );
}
