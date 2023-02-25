import style from '../scss/HomePage.module.scss';
import { LogoBlock } from '../componentsPC/logoBlock';
import { Products } from '../componentsPC/products';
import { Bicycles } from '../componentsPC/bicycles'

function HomePage() {
    return (
        <section className={style.HomePage}>
            <LogoBlock />
            <Products />
            <Bicycles />
        </section>

    );
}

export { HomePage };