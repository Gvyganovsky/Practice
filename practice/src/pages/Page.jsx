import logo from '../assets/icons/logo.png';
import style from '../scss/HomePage.module.scss';

function Page() {
    return (
        <section>
            <header className={style.header}>
                <img src={logo} alt="logo" className={style.logo} />
                <div className={style.header_nav}>
                    <div className={style.header_text}>Home</div>
                    <div className={style.header_text}>Shop</div>
                    <div className={style.header_text}>Blog</div>
                    <div className={style.header_text}>Contact</div>
                </div>
                <img src='' alt="basket" className={style.basket} />
            </header>


            <footer>

            </footer>
        </section>
    );
}

export { Page };
