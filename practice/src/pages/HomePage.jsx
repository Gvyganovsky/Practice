import style from '../scss/HomePage.module.scss';
import { LogoBlock } from '../components/logoBlock';
import { Products } from '../components/products';

function HomePage() {
    return (
        <section className={style.HomePage}>
            <LogoBlock />
            <Products />


        </section>

    );
}

export { HomePage };
