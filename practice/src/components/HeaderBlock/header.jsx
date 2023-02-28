import style from '../../scss/PC.module.scss';
import styles from '../../scss/Mobile.module.scss';

import { ReactComponent as Basket } from '../../assets/icons/Basket.svg';
import { ReactComponent as Instagram } from '../../assets/icons/Instagram.svg';
import { ReactComponent as LogoAdapt } from '../../assets/icons/LogoAdapt.svg';

import { ReactComponent as Phone } from '../../assets/icons/Phone.svg';
import { ReactComponent as InstagramBlack } from '../../assets/icons/InstagramBlack.svg';
import { ReactComponent as BasketBlack } from '../../assets/icons/BasketBlack.svg';

export const Header = () => {
    return (
        <section>
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

            <header className={styles.headerAdapt}>
                <div className={styles.header_burger}>
                    <span className={styles.line1}></span>
                    <span className={styles.line2}></span>
                    <span className={styles.line3}></span>
                </div>
                <LogoAdapt alt="Logo" className={styles.header_logo} />
                <div className={styles.header_icons}>
                    <Phone alt="Phone" className={styles.header_icon} />
                    <InstagramBlack alt="InstagramBlack" className={styles.header_icon} />
                    <BasketBlack alt="BasketBlack" className={styles.header_icon} />
                </div>
            </header>
        </section>
    );
}