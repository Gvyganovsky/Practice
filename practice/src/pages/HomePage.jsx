import style from '../scss/HomePage.module.scss';
import { LogoBlock } from '../componentsPC/logoBlock';
import { Products } from '../componentsPC/products';
import { Bicycles } from '../componentsPC/bicycles'
import { Miles } from '../componentsPC/miles'

function HomePage() {
    return (
        <section className={style.HomePage}>
            <LogoBlock />
            <Products />
            <Bicycles />
            <Miles />
        </section>
    );
}

export { HomePage };